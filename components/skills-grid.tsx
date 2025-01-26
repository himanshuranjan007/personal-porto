"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

interface Skill {
  name: string
  width?: string
}

const skills: Skill[] = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Go" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Git" },
  { name: "Tailwind" },
  // { name: "Apollo" },
  { name: "Express" },
  { name: "PostgreSQL" },
  { name: "Prisma" },
  { name: "Supabase" },
  { name: "Firebase" },
  // { name: "Python" },
  // { name: "Django" },
  // { name: "Framer Motion", width: "w-[200px]" },
  // { name: "Unity" },
  // { name: "Flutter" },
  { name: "Blockchain" },
  { name: "Solidity" },
  // { name: "Docker" },
  // { name: "Kubernetes", width: "w-[150px]" },
  // { name: "Jest" },
  { name: "C++" },
  // { name: "Java" },
  // { name: "C#" },
  // { name: "PHP" },
  // { name: "MySQL" },
  // { name: "SQLite" },
  // { name: "Linux" },
  // { name: "I Use Arch btw", width: "w-[180px]" },
  // { name: "ICP" },
  // { name: "Motoko" },
  // { name: "Rust" },
  // { name: "Dart" },
]

export function SkillsGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className={`${skill.width || "w-auto"} relative group`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative px-6 py-3 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-[#2a2a2a] cursor-pointer transition-colors hover:bg-[#2a2a2a]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm sm:text-base font-medium text-slate-300 group-hover:text-white">{skill.name}</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

