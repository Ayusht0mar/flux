interface SectionHeadingProps {
    heading: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    heading
}) => {
    return ( 
        <div className="border-y border-[#8E98A8] py-4 flex gap-8 justify-center w-full overflow-hidden">
            <h3 className="text-5xl font-bold text-[#E5E5E525]">{heading}</h3>
            <h3 className="text-5xl font-bold text-[#E5E5E525]">{heading}</h3>
            <h3 className="text-5xl font-bold text-[#E5E5E575]">{heading}</h3>
            <h3 className="text-5xl font-bold text-[#E5E5E525]">{heading}</h3>
            <h3 className="text-5xl font-bold text-[#E5E5E525]">{heading}</h3>
        </div>
     );
}
 
export default SectionHeading;