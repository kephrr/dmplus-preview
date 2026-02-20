import { Zap, Globe, Database, Cloud, Code, Cpu, Rocket } from "lucide-react"

export const orbitingEntities = [
    // Inner orbit - 1 entity
    {
      id: "code",
      icon: <Code className="h-5 w-5 text-sky-500" />,
      name: "Technologies",
      orbitRadius: 100,
      duration: 8,
      size: 45,
    },
    // Middle orbit - 2 entities
    {
      id: "database",
      icon: <Database className="h-5 w-5 text-emerald-500" />,
      orbitRadius: 180,
      duration: 14,
      delay: 0,
      size: 50,
    },
    {
      id: "cloud",
      icon: <Cloud className="h-5 w-5 text-blue-400" />,
      orbitRadius: 180,
      duration: 14,
      delay: 7,
      size: 50,
    },
    // Outer orbit - 4 entities
    {
      id: "cpu",
      icon: <Cpu className="h-5 w-5 text-rose-500" />,
      orbitRadius: 280,
      duration: 22,
      delay: 0,
      size: 50,
    },
    {
      id: "globe",
      icon: <Globe className="h-5 w-5 text-cyan-500" />,
      orbitRadius: 280,
      duration: 22,
      delay: 5.5,
      size: 50,
    },
    {
      id: "rocket",
      icon: <Rocket className="h-5 w-5 text-amber-500" />,
      orbitRadius: 280,
      duration: 22,
      delay: 11,
      size: 50,
    },
    {
      id: "zap",
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      orbitRadius: 280,
      duration: 22,
      delay: 16.5,
      size: 50,
    },
  ]