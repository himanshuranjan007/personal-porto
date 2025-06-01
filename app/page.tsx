import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { ProjectCarousel } from "@/components/project-carousel"
import { ContactForm } from "@/components/contact-form"
import { SkillsGrid } from "@/components/skills-grid"
import { Toaster } from "@/components/ui/toaster"

const projects = [
  // {
  //   title: "Dummy Brewer",
  //   description: "Dummy Project for dummy boys ",
  //   image: "https://i.postimg.cc/sxN1DwdY/Pngtree-nature-forest-abstract-2394668.jpg",
  //   tags: ["UNITY", "WASM", "C#", "ICP", "MOTOKO"],
  //   githubUrl: "#",
  //   demoUrl: "#",
  // },
  {
    title: "Ace",
    description:
      "Ace is an AI-powered Solana Superapp. It allows users to transact across the Solana blockchain and beyond with a ChatGPT-like interface.",
    image: "https://i.ibb.co/nNXqzfSk/Screenshot-2025-06-02-at-2-56-05-AM.png",
    tags: ["REACTJS", "TYPESCRIPT", "SOLANA","NODEJS","EXPRESSJS","SUPABASE"],
    githubUrl: "https://github.com/himanshuranjan007/solAssistAI",
    demoUrl: "https://sol-assist-ai.vercel.app/",
  },
  {
    title: "Raydium SOL-USDC CLMM Liquidity Management Bot",
    description: "An automated bot for managing SOL-USDC CLMM liquidity on Raydium, keeping positions within ±5% of market price by rebalancing out-of-range funds.",
    image: "https://i.ibb.co/93NnkPJg/Screenshot-2025-06-02-at-2-40-33-AM.png" ,
    tags: ["Raydium-SDK", "TYPESCRIPT", "SOLANA"],
    githubUrl: "https://github.com/himanshuranjan007/raydium-clmm-bot",
    demoUrl: "https://github.com/himanshuranjan007/raydium-clmm-bot",
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
          <h2 className="text-3xl font-bold mb-12 text-white text-center">My Work</h2>
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
            or DM me on <a href="https://twitter.com/always_a_bot" className="text-blue-400 hover:underline">X</a> or use the form below
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

