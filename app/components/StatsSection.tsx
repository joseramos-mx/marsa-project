'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const stats = [
  { number: '08+', label: 'Años de experiencia' },
  { number: '500+', label: 'Pacientes satisfechos' },
  { number: '100+', label: 'Implantes colocados' },
]

export default function StatsSection() {
  return (
    <section className="bg-black py-16 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {stats.map((stat, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
               className="relative flex flex-col items-center justify-center w-full aspect-[481/240]"
               style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
             >
               <Image 
                 src="/mask.svg" 
                 alt="" 
                 fill 
                 className="object-contain pointer-events-none" 
                 sizes="(max-width: 768px) 100vw, 33vw"
               />
               <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full">
                 <span 
                   className="text-[#3e1900] text-[4.5rem] sm:text-8xl md:text-6xl lg:text-7xl xl:text-[6rem] leading-none mb-1 font-medium tracking-tight"
                 >
                   {stat.number}
                 </span>
                 <span 
                   className="text-[#3e1900] text-sm sm:text-lg md:text-xs lg:text-sm tracking-tight"
                 >
                   {stat.label}
                 </span>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
