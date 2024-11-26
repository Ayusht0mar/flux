"use client"
import Image from "next/image";
import { useAnimation, motion, AnimatePresence, AnimationControls } from "motion/react";
import { useEffect, useState, useMemo } from "react";


const Header = () => {
    return ( 
        <header className="flex justify-between w-[90vw] mx-auto items-center py-6 bg-black text-white">
            <div className="w-full">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={32}
                    height={48}
                />
            </div>
            <nav>
                <ul className="hidden lg:flex space-x-6 text-xl tracking-wide">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="/contact" >Contact</a></li>
                </ul>
            </nav>
            <div className="w-full hidden lg:flex justify-end">
                <button className="px-9 py-2 text-lg border border-orange-500 hover:bg-orange-600 text-white rounded-full">Schedule a meet</button>
            </div>
            <NavMenu/>
        </header>
     );
}
 
export default Header;


const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const path1Controls:AnimationControls = useAnimation();
    const path2Controls:AnimationControls = useAnimation();

    const path1Variants = useMemo(
        () => ({
        open: {d: "M3.06061 2.99999L21.0606 21"},
        closed: {d: "M0 8.5L24 8.5"},
    }),
    []
);

    const path2Variants = useMemo(
        () => ({
        open: {d: "M3.00006 21.0607L21 3.06064"},
        closed: {d: "M0 15.5L24 15.5"},
    }), []);

    useEffect(() => {
        if (menuOpen) {
            path1Controls.start(path1Variants.open)
            path2Controls.start(path2Variants.open)
        } else {
            path1Controls.start(path1Variants.closed)
            path2Controls.start(path2Variants.closed)
        }
    }, [menuOpen, path1Controls, path2Controls, path1Variants, path2Variants]);


    return (
        <div className="relative block lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="relative justify-self-center flex flex-col gap-2 cursor-pointer stroke-white stroke-2 z-50">
                <svg width='24' height='24' viewBox="0 0 24 24">
                    <motion.path {...path1Variants.closed} animate={path1Controls} transition={{duration: 0.2}}/>
                    <motion.path {...path2Variants.closed} animate={path2Controls} transition={{duration: 0.2}}/>
                </svg>
            </button>
            <AnimatePresence>
            {menuOpen && (
                    <motion.div
                        initial={{scale: 0, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0, opacity: 0}}
                        transition={{duration: 0.5, type:"spring"}}
                        className="absolute -top-4 -right-4 w-64 min-h-64 rounded-md bg-black border border-[#3D3D3D] p-4 z-10 flex flex-col origin-top-right">
                        <ul className="flex flex-col space-y-1 pt-4 text-xl tracking-wide">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="/contact" >Contact</a></li>
                        </ul>
                        <div className="w-full justify-end">
                            <button className="px-9 py-2 w-full mt-6 text-lg border border-orange-500 hover:bg-orange-600 text-white rounded-full">Schedule a meet</button>
                        </div>
                    </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}