interface SectionHeadingProps {
    heading: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    heading
}) => {
    return ( 
        <div className="text-6xl font-bold border-y border-[#8E98A8] py-3 flex gap-8 justify-center w-full font-barlowCondensed overflow-hidden">
            <h3 className="text-[#E5E5E525]">{heading}</h3>
            <h3 className="text-[#E5E5E525]">{heading}</h3>
            <h3 className="text-[#E5E5E575]">{heading}</h3>
            <h3 className="text-[#E5E5E525]">{heading}</h3>
            <h3 className="text-[#E5E5E525]">{heading}</h3>
        </div>
     );
}
 
export default SectionHeading;