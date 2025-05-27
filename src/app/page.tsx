import Link from "next/link";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ctma-azul-marinho to-ctma-cinza-ardosia min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center text-ctma-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Chaplain Training Management Agency
              <span className="block text-ctma-cinza-azulado-claro">CTMA</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-ctma-cinza-azulado-claro">
              Formamos capelães, diplomatas civis e líderes para um impacto global de compaixão, paz e esperança, especialmente em momentos de crise e desastres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cursos"
                className="bg-ctma-accent-red text-ctma-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                TORNE-SE UM CAPELÃO
              </Link>
              <Link
                href="/cursos"
                className="bg-transparent border-2 border-ctma-white text-ctma-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ctma-white hover:text-ctma-azul-marinho transition-colors"
              >
                CONHEÇA NOSSOS CURSOS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section className="py-16 sm:py-24 bg-ctma-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-6">
            Nossa Missão: Fé em Ação, Vidas Transformadas
          </h2>
          <p className="text-lg text-ctma-cinza-ardosia leading-relaxed mb-8">
            A CTMA (Chaplain Training Management Agency) é mais que uma instituição, somos um movimento global com sede em Orlando, Flórida (EUA), impulsionado pela fé, compaixão e misericórdia. Acreditamos que a liderança ética e a ação humanitária, inspiradas pelo amor de Cristo, são capazes de responder às maiores necessidades humanas em qualquer parte do mundo, especialmente em tempos de crise e emergência. Nossa essência é clara: Servir com excelência, liderar com propósito e transformar vidas pelo amor de Cristo.
          </p>
          <Link
            href="/sobre-nos"
            className="inline-block bg-transparent hover:bg-ctma-cinza-azulado-claro text-ctma-azul-marinho font-semibold hover:text-ctma-azul-marinho py-3 px-8 border border-ctma-azul-marinho hover:border-transparent rounded-md transition-colors"
          >
            SAIBA MAIS SOBRE A CTMA
          </Link>
        </div>
      </section>

      {/* Seção de Testemunhos */}
      <TestimonialsCarousel />
    </main>
  );
}
