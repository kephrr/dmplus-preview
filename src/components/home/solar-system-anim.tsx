"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface OrbitingEntity {
  id: string
  icon: React.ReactNode
  name?: string
  orbitRadius: number
  duration: number
  delay?: number
  size?: number
}

interface SolarSystemProps {
  centerIcon: React.ReactNode
  centerSize?: number
  entities: OrbitingEntity[]
  className?: string
}

export function SolarSystem({ centerIcon, centerSize = 100, entities, className }: SolarSystemProps) {
  const uniqueOrbits = [...new Set(entities.map((e) => e.orbitRadius))]

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Orbit paths - only render unique radii */}
      {uniqueOrbits.map((radius) => (
        <div
          key={`orbit-${radius}`}
          className="absolute rounded-full border border-white/10"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
        />
      ))}

      {/* Center entity */}
      <div
        className="absolute z-10 flex items-center justify-center rounded-full shadow-lg shadow-orange-500/30"
        style={{
          width: centerSize,
          height: centerSize,
        }}
      >
        <div className="flex items-center justify-center text-white">{centerIcon}</div>
      </div>

      {/* Orbiting entities */}
      {entities.map((entity) => (
        <div
          key={entity.id}
          className="absolute"
          style={{
            width: entity.orbitRadius * 2,
            height: entity.orbitRadius * 2,
            animation: `orbit ${entity.duration}s linear infinite`,
            animationDelay: entity.delay ? `${entity.delay}s` : "0s",
          }}
        >
          <div
            className="absolute flex items-center justify-center rounded-full bg-card shadow-md border border-border"
            style={{
              width: entity.size || 50,
              height: entity.size || 50,
              left: "50%",
              top: 0,
              transform: "translateX(-50%)",
              animation: `counter-orbit ${entity.duration}s linear infinite`,
              animationDelay: entity.delay ? `${entity.delay}s` : "0s",
            }}
          >
            {entity.icon}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter-orbit {
          from {
            transform: translateX(-50%) rotate(0deg);
          }
          to {
            transform: translateX(-50%) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  )
}
