import Image from "next/image";
import SectionHeading from "./SectionHeading";

const WorkSection = () => {
    return ( 
        <div>
            <SectionHeading heading="OUR WORK"/>
            <div className="my-8 mb-20">
                <div className="flex gap-5 justify-center mb-10">
                    <Image
                        src="/logos/1.svg"
                        alt=""
                        width={80}
                        height={48}
                    />
                    <Image
                        src="/logos/2.svg"
                        alt=""
                        width={80}
                        height={48}
                    />
                    <Image
                        src="/logos/3.svg"
                        alt=""
                        width={80}
                        height={48}
                    />
                    <Image
                        src="/logos/4.svg"
                        alt=""
                        width={80}
                        height={48}
                    />
                    <Image
                        src="/logos/5.svg"
                        alt=""
                        width={80}
                        height={48}
                    />
                    <Image
                        src="/logos/6.svg"
                        alt=""
                        width={80}
                        height={48}
                    />
                </div>
                <div className="grid grid-cols-2 gap-5 w-[80vw] mx-auto">
                    <div className="h-80 rounded-lg bg-slate-800">

                    </div>
                    <div className="h-80 rounded-lg bg-slate-800">

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WorkSection;