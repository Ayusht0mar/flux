import SectionHeading from "./SectionHeading";

const NewsletterSection = () => {
    return ( 
        <div>
            <SectionHeading heading="NEWSLETTER"/>
            <div className="w-[80vw] mx-auto my-20">
                <p className="text-balance w-8/12 text-2xl font-semibold">Subscribe to our newsletter and follow our content closely. <br /> Receive news based on what has to do with you.</p>
                <form className="flex flex-col gap-6 mt-6">
                    <input type="email" placeholder="Email Address" className="px-4 py-2 rounded-md bg-[#3D3D3D] text-white w-1/2" />
                    <button className="px-6 py-2 text-lg bg-orange-500 hover:bg-orange-600 rounded-full w-fit text-black font-semibold">Subscribe</button>
                </form>
            </div>
        </div>
     );
}
 
export default NewsletterSection;