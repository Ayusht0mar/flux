import Image from "next/image";
import SectionHeading from "./SectionHeading";
import AutomaticMovingLogoSlider from "./AutomaticMovingLogoSlider";

const WorkSection = () => {
    return ( 
        <div>
            <SectionHeading heading="OUR WORK"/>
            <div className="my-8 mb-20">
                <AutomaticMovingLogoSlider/>
                <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-5 w-[80vw] mx-auto">
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