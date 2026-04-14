import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiGithub, FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Bloodline Vengeance",
    description: "A dark action-packed game where players explore, fight, and discover their bloodline. Developed by Reclone Studio.",
    tags: ["C++", "Blueprints", "Game Development", "Reclone Studio"],
    image: "/RecloneStudios_BloodlineVengeance.jpg", // Placeholder
    github: "",
    live: "https://www.reclonestudio.com/",
    showGithub: false,
    showLive: true,
    timeline: "2025 - Present",
  },
  {
    id: 2,
    title: "AI Song Recommendation System",
    description: "An intelligent music recommendation web app that analyzes user preferences to suggest personalized songs, enhancing discovery and user engagement through data-driven insights.",
    tags: ["Python", "Machine Learning", "Web Development"],
    image: "/SonicFlix.png", // Placeholder
    github: "",
    live: "https://song-recommendation-4ri6.vercel.app/",
    showGithub: false,
    showLive: true,
    timeline: "2025",
  },
  {
    id: 3,
    title: "Morse Code Translator",
    description: "A lightweight web application that converts text to Morse code and vice versa in real time, providing an interactive way to learn and experiment with encoded communication.",
    tags: ["Java", "App Developement"],
    image: "/Java_Morse_Code_Translator.jpg", // Placeholder
    github: "",
    live: "https://drive.google.com/drive/folders/1RLTQy6hf6EIP2hlzcGD4Jsf_7CZRHO7F?usp=sharing",
    showGithub: false,
    showLive: true,
    timeline: "2024",
  },
  {
    id: 4,
    title: "Speed Cart – Quick-commerce Web App",
    description: "A fast and responsive e-commerce web application designed to deliver a seamless shopping experience, featuring product browsing, cart management, and optimized performance for smooth user interactions.",
    tags: ["Web Development"],
    image: "/SpeedCart.png", // Placeholder
    github: "",
    live: "https://speed-cart.vercel.app/",
    showGithub: false,
    showLive: true,
    timeline: "2024",
  },
  {
    id: 5,
    title: "Pong Game (C++)",
    description: "A classic arcade-style Pong game built with Python, featuring real-time paddle controls, ball physics, and score tracking, demonstrating core game development and logic implementation.",
    tags: ["C++", "Game Developement"],
    image: "/PongScreenshot2.png", // Placeholder
    github: "https://github.com/Recalled9/Pong-C-.git",
    live: "https://drive.google.com/file/d/1PMrlKnDu-_krYkjMBLiRbvvY9XfuANxX/view?usp=sharing",
    showGithub: true,
    showLive: false,
    timeline: "2025",
  }
];

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.05,
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="bg-[rgb(var(--bg))] text-[rgb(var(--fg))] py-20 relative">
      <div className="container mx-auto px-4">
        {/* Big faded background text */}
        <h1
          className="absolute inset-0 font-mono flex items-start top-10 sm:-top-8 justify-center text-[5rem] sm:text-[7rem] md:text-[12rem] font-bold 
           bg-gradient-to-r from-[rgb(var(--fg))]/60 via-[rgb(var(--fg))]/35 to-[rgb(var(--fg))]/80 
           bg-clip-text text-transparent tracking-tighter select-none pointer-events-none z-0"
          style={{
            opacity: 0.18,
            WebkitTextStroke: "1px rgba(var(--fg),0.45)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          PROJECTS
        </h1>

        {/* Heading */}
        <div className="text-center mb-14 relative">
          <h2 className="text-[2.7rem] sm:text-5xl md:text-[6rem] font-bold tracking-tight">
            Projects
          </h2>
          <p className="text-[rgb(var(--fg))]/60 max-w-2xl mx-auto mt-6 text-base sm:text-lg md:text-xl">
            A selection of my recent work, showcasing problem-solving skills,
            creativity, and technical expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-16">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 px-6"
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 h-64 lg:h-80 rounded-xl overflow-hidden border border-[rgb(var(--fg))]/20 group shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgb(var(--bg))]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  {project.showGithub && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(var(--fg))] text-[rgb(var(--bg))] hover:bg-[rgb(var(--fg))]/90 transition-all"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.showLive && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(var(--fg))] text-[rgb(var(--bg))] hover:bg-[rgb(var(--fg))]/90 transition-all"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-mono text-[rgb(var(--fg))]/60 mb-1">
                  {project.timeline} {/* ✅ Timeline shown here */}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-[rgb(var(--fg))]/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[rgb(var(--fg))]/10 border border-[rgb(var(--fg))]/20 text-xs rounded font-mono text-[rgb(var(--fg))]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  {project.showGithub && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[rgb(var(--fg))]/70 hover:text-[rgb(var(--fg))] transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.showLive && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[rgb(var(--fg))]/70 hover:text-[rgb(var(--fg))] transition-colors"
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 text-center px-6">
          <p className="text-[rgb(var(--fg))]/60 mb-6">
            Explore more projects and open-source contributions on my GitHub.
          </p>
          <a
            href="https://github.com/Recalled9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[rgb(var(--fg))] text-[rgb(var(--bg))] font-medium rounded-full hover:bg-[rgb(var(--fg))]/90 transition-all"
          >
            <FiGithub className="mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
