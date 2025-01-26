import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { ProjectCarousel } from "@/components/project-carousel"
import { ContactForm } from "@/components/contact-form"
import { SkillsGrid } from "@/components/skills-grid"
import { Toaster } from "@/components/ui/toaster"

const projects = [
  {
    title: "Dummy Brewer",
    description: "Dummy Project for dummy boys ",
    image: "https://i.postimg.cc/sxN1DwdY/Pngtree-nature-forest-abstract-2394668.jpg",
    tags: ["UNITY", "WASM", "C#", "ICP", "MOTOKO"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Social Media App",
    description:
      "A social media app where users can posta and like comment",
    image: "https://i.postimg.cc/G21LLt7m/abstract-nature-inspired-shapes-with-soft-gradients-created-with-generative-ai-technology-964851-458.avif",
    tags: ["GO", "NEXTJS", "CSS"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Nature Hub Solulu",
    description: "A natural selection of the fittest.",
    image: "https://i.postimg.cc/PqJ3CQ76/robotic-hand-overgrown-with-green-vegetation-symbol-natures-resilience-robotic-hand-overgrown-with-g.avif",
    tags: ["NEXTJS", "HTML", "CSS", "SOLIDITY", "BLOCKCHAIN"],
    githubUrl: "#",
    demoUrl: "#",
  },
]

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen pt-14">
      <Nav />
      <section id="home" className="min-h-[90vh] flex items-center">
        <Hero />
      </section>
      <section id="projects" className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">My Projects</h2>
          <ProjectCarousel projects={projects} />
        </div>
      </section>
      <section id="skills" className="py-12 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">My Skills</h2>
          <SkillsGrid />
        </div>
      </section>
      <section id="contact" className="py-12 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Contact Me</h2>
          <p className="text-slate-400 text-center mt-4 mb-10">
            Contact me via mail on{" "}
            <a href="mailto:hr731977@gmail.com" className="text-blue-400 hover:underline">
              hr731977@gmail.com
            </a>{" "}
            or use the form below
          </p>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  )
}

