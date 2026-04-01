"use client";

import HeroSection from "../components/hero/HeroSection";
import ProjectsSection from "./projects/ProjectsSection";
import SkillShowcase from "../components/skillShowcase/SkillShowcase";
import ExperienceSection from "../components/experienceSection/ExperienceSection";

const skills = [
  { name: "HTML5", logo: "/images/skills/html.svg" },
  { name: "CSS3", logo: "/images/skills/CSS3.svg" },
  { name: "JavaScript", logo: "/images/skills/javascript.png" },
  { name: "TypeScript", logo: "/images/skills/typescript.svg" },
  { name: "Next.js", logo: "/images/skills/Nextjs.svg" },
  { name: "React", logo: "/images/skills/react.png" },
  { name: "Tailwind CSS", logo: "/images/skills/tailwind.png" },
  { name: "Bootstrap", logo: "/images/skills/bootstrap.png" },
  { name: "Node.js", logo: "/images/skills/Nodejs.svg" },
  { name: "Express.js", logo: "/images/skills/Expressjs.png" },
  { name: "Flask", logo: "/images/skills/flask.png" },
  { name: "MongoDB", logo: "/images/skills/mongoDb.svg" },
  { name: "Git", logo: "/images/skills/git.svg" },
  { name: "Figma", logo: "/images/skills/figma.png" },
];

const sampleExperiences = [
  {
    id: "1",
    company: "Web Studio Nepal",
    role: "Frontend Developer",
    period: "jaunary 2025",
    location: "Kathmandu, Nepal",
    type: "developer" as const,
    website: "#",
    description: [
      "Learned to write best practice, optimize, and secure code",
      "Worked on real-world frontend projects using React and Next.js",
      "Collaborated with team members to deliver responsive and dynamic web interfaces",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Redux Toolkit",
      "TanStack Query",
    ],
    achievements: [
      "Completed project successfully with optimized and maintainable code",
      "Gained hands-on experience in professional frontend development workflow",
    ],
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with 95% viewport height */}
      <div className="h-[100vh] overflow-hidden">
        <HeroSection />
      </div>

      {/* ServicesSection overlapping the bottom 5% */}
      <div className="absolute top-[95vh] left-0 w-full z-10 bg-neutral-900">
        <ProjectsSection />
      </div>
      <div className="h-[100vh]" />
      <div className="relative z-0">
        <SkillShowcase skills={skills} />
        <ExperienceSection experiences={sampleExperiences} />
      </div>
    </div>
  );
}
