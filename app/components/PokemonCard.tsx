"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSpring, useMotionValue, useTransform, motion } from "framer-motion";
import { clamp, round, adjust } from "@/lib/math";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  name: string;
  img: string;
  href: string;
}

export default function PokemonCard({ name, img, href }: PokemonCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 1. 物理量 (不变)
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  
  const springConfig = { damping: 30, stiffness: 250, mass: 1 };
  
  const rotateX = useSpring(useTransform(y, [0, 100], [25, -25]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 100], [-25, 25]), springConfig);
  
  const opacity = useSpring(0, { stiffness: 200, damping: 40 });
  
  const bgX = useSpring(useTransform(x, [0, 100], [30, 70]), springConfig);
  const bgY = useSpring(useTransform(y, [0, 100], [30, 70]), springConfig);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    const px = clamp(round((clientX / rect.width) * 100));
    const py = clamp(round((clientY / rect.height) * 100));
    x.set(px); y.set(py); opacity.set(1);
  };

  const handleLeave = () => {
    x.set(50); y.set(50); opacity.set(0);
  };

  return (
    // 添加 group 类，用于控制子元素 hover 状态
    <Link href={href} target="_blank" className="group relative w-[280px] md:w-[300px] block select-none">
      <motion.div
        ref={ref}
        className={styles.card}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          // @ts-ignore
          "--pointer-x": useTransform(x, v => `${v}%`),
          "--pointer-y": useTransform(y, v => `${v}%`),
          "--rotate-x": useTransform(rotateX, v => `${v}deg`),
          "--rotate-y": useTransform(rotateY, v => `${v}deg`),
          "--background-x": useTransform(bgX, v => `${v}%`),
          "--background-y": useTransform(bgY, v => `${v}%`),
          "--card-opacity": opacity,
        }}
      >
        <div className={styles.rotator}>
          <div className={styles.front}>
            <Image src={img} alt={name} fill className="object-cover" />
            <div className={styles.shine} />
            <div className={styles.glare} />
          </div>
        </div>
      </motion.div>
      
      {/* 标题：字体改为 serif，增加 group-hover 联动效果 */}
      <h3 className="mt-8 text-center text-xl font-[family-name:var(--font-serif)] text-stone-500 tracking-[0.2em] uppercase transition-all duration-500 group-hover:text-stone-200 group-hover:tracking-[0.3em] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        {name}
      </h3>
    </Link>
  );
}