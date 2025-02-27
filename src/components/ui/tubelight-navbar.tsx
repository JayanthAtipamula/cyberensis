"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] bg-gradient-to-b from-white/40 to-white/30 backdrop-blur-xl",
          className,
        )}
      >
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="flex items-center h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src="/assets/logo.png" 
                alt="CyberShield Logo" 
                className="h-12 w-auto md:h-14"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-grow gap-3">
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300",
                      "text-gray-700 hover:text-[#f28749] hover:bg-white/50",
                      isActive && "bg-white/50 text-[#f28749] shadow-sm",
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-[#f28749]/5 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#f28749] rounded-t-full">
                          <div className="absolute w-12 h-6 bg-[#f28749]/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-[#f28749]/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-[#f28749]/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#f28749] transition-colors ml-auto hover:bg-white/50 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-gradient-to-b from-white/40 to-white/30 backdrop-blur-xl z-[90] md:hidden"
          >
            <div className="container mx-auto px-8 md:px-12 lg:px-16 py-4">
              <div className="flex flex-col gap-2">
                {items.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name

                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      onClick={() => {
                        setActiveTab(item.name)
                        setIsMenuOpen(false)
                      }}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
                        "text-gray-700 hover:text-[#f28749] hover:bg-white/50",
                        isActive && "bg-white/50 text-[#f28749] shadow-sm"
                      )}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
