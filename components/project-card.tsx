"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
}

export function ProjectCard({ title, description, image, tags, githubUrl, demoUrl }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const imageRotate = useTransform(scrollYProgress, [0, 1], [20, -20])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <Card
      ref={cardRef}
      className="w-full max-w-2xl mx-auto bg-[#0a0a0a] border-[#1a1a1a] transition-all duration-300 mb-16 last:mb-0"
    >
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <motion.div
            style={{
              rotateX: imageRotate,
              scale: imageScale,
            }}
            className="w-full h-full"
          >
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-6">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-[#1a1a1a] text-slate-300 hover:bg-[#2a2a2a] text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 pt-2">
          {githubUrl && (
            <Button
              size="sm"
              variant="ghost"
              className="hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub repository</span>
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button
              size="sm"
              variant="ghost"
              className="hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Live demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

