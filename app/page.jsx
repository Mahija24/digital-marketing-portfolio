"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@/src/components/ThemeProvider";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Stats from "@/src/components/Stats";
import Brands from "@/src/components/Brands";
import BlogPreview from "@/src/components/BlogPreview";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Add smooth scrolling behavior for the entire page
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Clients />
        <Services />
        <Process />
        <Stats />
        <Portfolio />
        <Brands />
        <About />
        <Team />
        <Testimonials />
        <BlogPreview />
        <Faq />
        <Cta />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
