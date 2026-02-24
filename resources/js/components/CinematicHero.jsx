import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';

export default function CinematicHero({
    headline = "Museum",
    midline = "of Ancient",
    highlightWord = "Art",
    tagline = "THE SOVEREIGN COLLECTION",
    buttonText = "ENTER ARCHIVE",
    imageUrl = "/images/assets/statues/statue_bust.png",
    showButton = true,
    showHalo = true,
    showDiscover = true
}) {
    const sectionRef = useRef(null);

    // 1. MOUSE PARALLAX SETUP
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        mouseX.set((e.clientX - innerWidth / 2) / (innerWidth / 2));
        mouseY.set((e.clientY - innerHeight / 2) / (innerHeight / 2));
    };

    // 2. SCROLL ANIMATION SETUP
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // SCROLL TRANSFORMS
    const statueScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
    const statueOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const statueParallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const haloScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const headlineOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const headlineY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
    const backdropOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    // MOUSE TRANSFORMS
    const statueMouseX = useTransform(springX, [-1, 1], [-45, 45]);
    const statueMouseY = useTransform(springY, [-1, 1], [-45, 45]);
    const haloMouseX = useTransform(springX, [-1, 1], [-20, 20]);
    const haloMouseY = useTransform(springY, [-1, 1], [-20, 20]);
    const bgGradientX = useTransform(springX, [-1, 1], ["40%", "60%"]);
    const bgGradientY = useTransform(springY, [-1, 1], ["40%", "60%"]);

    const dynamicBackground = useTransform(
        [bgGradientX, bgGradientY],
        ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(212,175,55,0.1) 0%, transparent 70%)`
    );

    // 3. MOTION VARIANTS
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const fadeInUp = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen bg-surface overflow-hidden flex items-center justify-center cursor-default z-0 transition-colors duration-500"
        >
            {/* LAYER 0: DYNAMIC RADIAL BACKDROP */}
            <motion.div
                style={{
                    opacity: backdropOpacity,
                    background: dynamicBackground
                }}
                className="absolute inset-0 pointer-events-none"
            />

            {/* LAYER 1: ANIMATED NOISE/GRAIN OVERLAY */}
            <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay noise-bg animate-grain"></div>

            {/* LAYER 3: GLOWING HALO (MOUSE + SCROLL) */}
            {showHalo && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    style={{
                        x: haloMouseX,
                        y: haloMouseY,
                        scale: haloScale
                    }}
                >
                    {/* Fixed Ambience */}
                    <motion.div
                        animate={{ opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[80vh] h-[80vh] bg-gold-500/10 rounded-full blur-[160px] mix-blend-screen"
                    />

                    {/* Rotating Geometric Halo */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="relative w-[50vh] h-[50vh] md:w-[70vh] md:h-[70vh] rounded-full border border-gold-500/20 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 rounded-full border border-gold-500/10 blur-[3px]"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full shadow-[0_0_30px_#D4AF37] opacity-80"></div>
                    </motion.div>
                </motion.div>
            )}

            {/* LAYER 2: FULL BACKGROUND IMAGE (STATIC) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                    src={imageUrl}
                    alt="Hero Background"
                    className="w-full h-full object-cover transition-all duration-[2s] grayscale brightness-[0.4] contrast-[1.1] dark:brightness-[0.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-transparent to-surface transition-colors duration-500"></div>
            </div>

            {/* LAYER 4: HEADLINE (STAGGER + SCROLL) */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    opacity: headlineOpacity,
                    y: headlineY
                }}
                className="relative z-30 text-center px-6"
            >
                {/* Sovereign Collection Prefix */}
                <motion.span
                    variants={fadeInUp}
                    className="text-gold-500 text-[10px] tracking-[0.8em] uppercase font-bold mb-12 block mix-blend-difference"
                >
                    {tagline}
                </motion.span>

                <h1 className="flex flex-col items-center">
                    <div className="overflow-hidden">
                        <motion.span
                            variants={fadeInUp}
                            className="block font-serif italic text-white text-[10vw] md:text-[8vw] leading-[0.9] tracking-tighter"
                        >
                            {headline}
                        </motion.span>
                    </div>
                    {midline && (
                        <div className="overflow-hidden">
                            <motion.span
                                variants={fadeInUp}
                                className="block font-serif italic text-white text-[10vw] md:text-[8vw] leading-[0.9] tracking-tighter"
                            >
                                {midline}
                            </motion.span>
                        </div>
                    )}
                    <div className="overflow-hidden py-4">
                        <motion.span
                            variants={fadeInUp}
                            className="block"
                        >
                            <motion.span
                                animate={{ scale: [0.93, 1], opacity: [0, 1] }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                                className="not-italic metallic-gold font-serif text-[12vw] md:text-[10vw] leading-[0.8] tracking-tighter drop-shadow-[0_0_40px_rgba(212,175,55,0.4)] inline-block"
                            >
                                {highlightWord}
                            </motion.span>
                        </motion.span>
                    </div>
                </h1>

                {showButton && buttonText && (
                    <motion.div
                        variants={fadeInUp}
                        className="mt-16"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#D4AF37", color: "#000", boxShadow: "0 0 40px rgba(212,175,55,0.3)" }}
                            whileTap={{ scale: 0.96 }}
                            className="relative group px-16 py-6 bg-gold-500/90 text-black font-black text-[11px] tracking-[1.2em] uppercase transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gold-500/20"
                        >
                            <span className="relative z-10 ml-[1.2em]">{buttonText}</span>
                            <motion.div
                                className="absolute inset-0 bg-white"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.8, ease: "expoOut" }}
                            />
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>

            {/* VERTICAL DISCOVER TEXT */}
            {showDiscover && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 2, duration: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40 transition-colors duration-500"
                >
                    <span className="text-text-main text-[8px] tracking-[1em] uppercase font-black vertical-text">DISCOVER</span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-gold-500 to-transparent"></div>
                </motion.div>
            )}

            {/* ATMOSPHERIC ENVIRONMENTAL LIGHTING */}
            <div className="absolute top-0 left-0 w-full h-[25vh] bg-gradient-to-b from-surface to-transparent z-40 pointer-events-none transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-surface via-surface/80 to-transparent z-40 pointer-events-none transition-colors duration-500" />

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes grain-animation {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-5%, -10%); }
                    20% { transform: translate(-15%, 5%); }
                    30% { transform: translate(7%, -25%); }
                    40% { transform: translate(-5%, 25%); }
                    50% { transform: translate(-15%, 10%); }
                    60% { transform: translate(15%, 0%); }
                    70% { transform: translate(0%, 15%); }
                    80% { transform: translate(3%, 35%); }
                    90% { transform: translate(-10%, 10%); }
                }

                .animate-grain { animation: grain-animation 10s steps(8) infinite; }
                
                .noise-bg {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3Cfilter id='noiseFilter'%3e%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3e%3C/filter%3e%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3e%3C/svg%3e");
                    width: 300%;
                    height: 300%;
                    top: -100%;
                    left: -100%;
                }
                
                .metallic-gold {
                    background: linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}} />
        </section>
    );
}
