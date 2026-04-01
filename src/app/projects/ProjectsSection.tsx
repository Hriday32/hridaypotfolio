"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import GlassCard from "@/src/components/ui/GlassCard";
import { projects } from "@/src/data/projects";

import "swiper/css";

export default function ProjectsSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) =>
    setActiveIndex(swiper.realIndex);

  const goToSlide = (index: number) => swiperInstance?.slideToLoop(index);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 sm:px-12 lg:px-20 rounded-4xl bg-gradient-to-br from-gray-600 to-black"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="font-semibold font-urbanist text-4xl sm:text-5xl md:text-6xl">
            <span className="text-white">My </span>
            <span className="text-orange-500 font-bold">Projects</span>
          </h2>

          <p className="text-gray-300 text-sm md:max-w-xl text-center md:text-right">
            I specialize in creating engaging digital experiences that bring
            ideas to life.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <Swiper
          modules={[Autoplay]}
          loop
          slidesPerView={3}
          spaceBetween={24}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center py-2">
                <Link href={`/projects/${project.slug}`}>
                  <GlassCard title={project.title} images={project.images} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 h-3 bg-orange-500 rounded-full"
                  : "w-3 h-3 bg-white/30 rounded-full hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .projects-swiper {
          overflow: hidden;
        }

        .projects-swiper .swiper-slide {
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        .projects-swiper .swiper-slide-active {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
