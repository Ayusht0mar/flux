"use client"
import { animate, useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

const AutomaticMovingLogoSlider = () => {

    const logos = [
        "/logos/1.svg",
        "/logos/2.svg",
        "/logos/3.svg",
        "/logos/4.svg",
        "/logos/5.svg",
        "/logos/6.svg",
    ]

    let [ ref, {width}] = useMeasure()

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 4;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });
        
        return controls.stop;
    }, [xTranslation, width]);

    return ( 
        <div className="py-8 overflow-clip">
            <motion.div className="flex gap-2 inset-0" ref={ref} style={{x: xTranslation}}>
                {[...logos, ...logos].map((item, idx) => (
                    <Card image={item} key={idx}/>
                ))}
            </motion.div>
        </div>
     );
}

const Card = ({image} : {
    image : string;
}) => {
    return <div className="relative overflow-hidden h-[80px] min-w-[100px] rounded-lg flex  justify-center items-center">
        <Image
            src={image}
            alt={image}
            fill
        />
    </div>
}
 
export default AutomaticMovingLogoSlider;