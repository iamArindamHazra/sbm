"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LOGO_IMAGES = ["/img/color_bn.webp", "/img/color_en.webp"] as const;
const FLIP_INTERVAL_MS = 3000;

export default function FlippingLogo() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setFlipped((f) => !f), FLIP_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative h-16 w-40 sm:h-32 sm:w-52"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {/* Front face: color_bn */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            src={LOGO_IMAGES[0]}
            alt="Sonar Bangla Muri"
            fill
            className="object-contain opacity-90"
          />
        </div>
        {/* Back face: color_en */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src={LOGO_IMAGES[1]}
            alt="Sonar Bangla Muri"
            fill
            className="object-contain opacity-90"
          />
        </div>
      </motion.div>
    </div>
  );
}
