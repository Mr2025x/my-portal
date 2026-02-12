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

  // 1. 定义物理量 (Motion Values)
  const x = useMotionValue(50); // 鼠标 X%
  const y = useMotionValue(50); // 鼠标 Y%
  
  // 2. 定义弹簧 (Springs) - 对应 Svelte 的 spring()
  const springConfig = { damping: 30, stiffness: 250, mass: 1 };
  
  // 3. 计算旋转角度 (Transforms)
  // 当鼠标在左边(0%)时，卡牌向左倾斜(-12deg)
  const rotateX = useSpring(useTransform(y, [0, 100], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 100], [-12, 12]), springConfig);
  
  // 透明度弹簧：移入时变1，移出变0
  const opacity = useSpring(0, { stiffness: 200, damping: 40 });
  
  // 背景移动弹簧：稍微放大范围以产生视差
  const bgX = useSpring(useTransform(x, [0, 100], [30, 70]), springConfig);
  const bgY = useSpring(useTransform(y, [0, 100], [30, 70]), springConfig);

  // 4. 交互处理函数
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // 计算鼠标在卡牌内的百分比 (0-100)
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    const px = clamp(round((clientX / rect.width) * 100));
    const py = clamp(round((clientY / rect.height) * 100));

    x.set(px);
    y.set(py);
    opacity.set(1);
  };

  const handleLeave = () => {
    // 鼠标离开，复位到中心
    x.set(50);
    y.set(50);
    opacity.set(0);
  };

  return (
    <Link href={href} target="_blank" className="relative w-[300px] block select-none">
      <motion.div
        ref={ref}
        className={styles.card}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        // 这里就是 CSS 变量计算的“桥梁”
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
            {/* 卡面图片 */}
            <Image src={img} alt={name} fill className="object-cover" />
            
            {/* 光效层 */}
            <div className={styles.shine} />
            <div className={styles.glare} />
          </div>
        </div>
      </motion.div>
      
      {/* 标题 */}
      <h3 className="mt-6 text-center text-xl font-bold text-gray-400 font-serif tracking-widest uppercase hover:text-white transition-colors">
        {name}
      </h3>
    </Link>
  );
}