import Header from "@/components/Header";
import { Instagram, Linkedin, Mail } from "lucide-react";

const ContactPage = () => {
    return ( 
        <div>
            <Header/>
            <div className="mt-10">
                <h1 className="text-[#E5E5E5] text-center font-bold text-5xl">GET A QUOTE</h1>
            </div>
            <div className="mt-20">
                <h2 className="text-[#E5E5E5] text-center font-bold text-5xl">Get in touch with us</h2>
                <ul className="flex gap-16 justify-center mt-10">
                    <li className="flex gap-2 bg-[#3D3D3D] py-3 px-9 rounded-full">
                        <Mail/>
                        <p>hi@flux.in</p>
                    </li>
                    <li className="flex gap-2 bg-[#3D3D3D] py-3 px-9 rounded-full">
                        <Instagram/>
                        <p>fluxmedia</p>
                    </li>
                    <li className="flex gap-2 bg-[#3D3D3D] py-3 px-9 rounded-full">
                        <Linkedin/>
                        <p className="">flux media</p>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default ContactPage;