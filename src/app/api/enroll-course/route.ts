import { NextRequest, NextResponse } from 'next/server';
import { stripe, COURSE_PRICES } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { courseId, userId, studentInfo } = await req.json();

    // Validate course exists
    const coursePrice = COURSE_PRICES[courseId];
    if (!coursePrice) {
      return NextResponse.json(
        { error: 'Curso não encontrado' },
        { status: 404 }
      );
    }

    // Create payment intent for course enrollment
    const paymentIntent = await stripe.paymentIntents.create({
      amount: coursePrice.amount,
      currency: 'brl',
      metadata: {
        type: 'course_enrollment',
        course_id: courseId,
        course_name: coursePrice.name,
        student_name: studentInfo.name,
        student_email: studentInfo.email,
        user_id: userId || 'anonymous',
      },
      description: `Matrícula - ${coursePrice.name}`,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      courseDetails: coursePrice,
    });

  } catch (error) {
    console.error('Course enrollment payment intent error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
