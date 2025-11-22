"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">Built for the Vibe ecosystem</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="#tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tools
            </a>
            <a href="#resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
