import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Twitter } from "lucide-react"

export function Hero() {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="space-y-8 backdrop-blur-sm p-8 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/50">
        <div className="relative w-24 h-24 mx-auto">
          <Image
            src="https://avatars.githubusercontent.com/u/155377613?v=4"
            alt="Profile"
            width={100}
            height={96}
            className="rounded-full"
          />
          <span className="absolute bottom-0 right-0 text-2xl">✌️</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hi, I&apos;m Himanshu , Building Thoughts into Assets !
          </h1>
          <p className="text-xl text-slate-300">
            Currently Building <span className="underline">DREAMs</span>.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            variant="default"
            className="bg-white text-black hover:bg-slate-200 transition-colors duration-200"
          >
            <a href="#contact">Contact me here</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            <a href="/cv.pdf" download>
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#1a1a1a] transition-colors duration-200" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#1a1a1a] transition-colors duration-200" asChild>
            <a href="https://twitter.com/always_a_bot" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#1a1a1a] transition-colors duration-200" asChild>
            <a href="https://github.com/himanshuranjan007" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

