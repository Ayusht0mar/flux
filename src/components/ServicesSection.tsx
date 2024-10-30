import SectionHeading from "./SectionHeading";

const ServicesSection = () => {
    return ( 
            <section id="services" className="py-16 text-black">
                <SectionHeading heading="SERVICES"/>
                <div className="grid grid-cols-2 w-[90vw] mx-auto mt-20 gap-20">
                    <p className="text-white text-xl mt-8">
                        Our goal is to understand our client&apos;s unique needs and tailor our approach to exceed their expectations. We pride ourselves on building long-term relationships with our clients and working closely with them to achieve their business objectives.
                        <br />
                        <br />
                        We believe in pushing the boundaries of what&apos;s possible in advertising. We stay on top of industry trends and are constantly exploring new and emerging technologies to help our clients stand out.
                    </p>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-[#E5E5E5]">
                    <div className="p-4 bg-[#3D3D3D] shadow-lg rounded-md">
                        <h3 className="text-xl font-semibold">Brand Creation</h3>
                        <p>The technology must be invisible to the user&apos;s eyes. Think mobile first.</p>
                    </div>
                    <div className="p-4 bg-[#3D3D3D] shadow-lg rounded-md">
                        <h3 className="text-xl font-semibold">Digital Marketing</h3>
                        <p>We integrate digital channels such as search engines, social media, email, and websites.</p>
                    </div>
                    <div className="p-4 bg-[#3D3D3D] shadow-lg rounded-md">
                        <h3 className="text-xl font-semibold">Video Production</h3>
                        <p>An online business allows customers to access products at any time using electronic devices.</p>
                    </div>
                    <div className="p-4 bg-[#3D3D3D] shadow-lg rounded-md">
                        <h3 className="text-xl font-semibold">3D Animation</h3>
                        <p>One of the most profitable segments in the world, requiring a creative and specialized team.</p>
                    </div>
                    <div className="p-4 bg-[#3D3D3D] shadow-lg rounded-md">
                        <h3 className="text-xl font-semibold">Artistic Photography</h3>
                        <p>Whether for casual or corporate events, looking for professional work makes a difference.</p>
                    </div>
                    <div className="p-4 bg-[#3D3D3D] shadow-lg rounded-md">
                        <h3 className="text-xl font-semibold">Web Development</h3>
                        <p>Your website is the first contact customers have with your brand, making it essential.</p>
                    </div>
                    </div>
                </div>
            </section>
     );
}
 
export default ServicesSection;