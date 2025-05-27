'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rev. Dr. João Silva",
    role: "Capelão Sênior - Força Aérea Brasileira",
    content: "A formação na CTMA transformou completamente minha abordagem ao ministério capelânico. O treinamento em crises e emergências me preparou para situações que eu nunca imaginei enfrentar. Hoje sou capaz de oferecer suporte espiritual efetivo em momentos críticos.",
    image: "/images/testimonials/joao-silva.jpg"
  },
  {
    id: 2,
    name: "Capelã Maria Santos",
    role: "Especialista em Cuidados Hospitalares",
    content: "O programa de diplomacia civil da CTMA abriu novas perspectivas em minha carreira. Aprendi a navegar conflitos complexos e a construir pontes entre diferentes comunidades. É uma experiência que recomendo a todos os líderes cristãos.",
    image: "/images/testimonials/maria-santos.jpg"
  },
  {
    id: 3,
    name: "Pastor Carlos Rodriguez",
    role: "Líder Comunitário Internacional",
    content: "A CTMA me equipou com ferramentas práticas para fazer a diferença em minha comunidade e além. O foco em ação humanitária e liderança ética me inspirou a iniciar projetos sociais que impactaram milhares de vidas.",
    image: "/images/testimonials/carlos-rodriguez.jpg"
  },
  {
    id: 4,
    name: "Rev. Ana Carolina",
    role: "Capelã de Emergências",
    content: "O treinamento especializado em gestão de crises me preparou para atuar em desastres naturais e emergências. Já participei de missões humanitárias em três países diferentes, sempre aplicando os princípios aprendidos na CTMA.",
    image: "/images/testimonials/ana-carolina.jpg"
  }
];

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-16 sm:py-24 bg-ctma-cinza-azulado-claro">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ctma-azul-marinho mb-6">
            Testemunhos de Transformação
          </h2>
          <p className="text-lg text-ctma-cinza-ardosia max-w-2xl mx-auto">
            Conheça as histórias de líderes que foram transformados através dos programas da CTMA
            e estão fazendo a diferença em suas comunidades e no mundo.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-ctma-white rounded-lg shadow-lg p-6 h-full">
                    <Quote className="text-ctma-accent-red mb-4" size={32} />                    <p className="text-ctma-cinza-ardosia mb-6 leading-relaxed italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-ctma-cinza-azulado-claro rounded-full flex items-center justify-center mr-4">
                        <span className="text-ctma-azul-marinho font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ctma-azul-marinho">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-ctma-cinza-ardosia">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              className="bg-ctma-azul-marinho text-ctma-white p-2 rounded-full hover:bg-ctma-cinza-ardosia transition-colors"
              onClick={scrollPrev}
              aria-label="Testemunho anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Navigation */}
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === selectedIndex
                      ? 'bg-ctma-azul-marinho'
                      : 'bg-ctma-cinza-ardosia'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Ir para testemunho ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="bg-ctma-azul-marinho text-ctma-white p-2 rounded-full hover:bg-ctma-cinza-ardosia transition-colors"
              onClick={scrollNext}
              aria-label="Próximo testemunho"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-ctma-cinza-ardosia mb-6">
            Você também pode fazer parte dessa jornada de transformação.
          </p>
          <button className="bg-ctma-accent-red text-ctma-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            INICIE SUA JORNADA HOJE
          </button>
        </div>
      </div>
    </section>
  );
}
