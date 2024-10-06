import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return ( 
        <footer className="border-t border-[#8E98A8] ">
            <div className="w-[90vw] mx-auto grid grid-cols-4 justify-items-center py-10 pb-20">
                <div className='col-span-2 w-full'>
                    <h1 className="text-3xl font-bold">FLUX</h1>
                    <p>Translating your thoughts and visions</p>
                </div>
                <div>
                    <h5 className="font-semibold">Quick links</h5>
                    <ul className="flex flex-col gap-2 mt-3">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <h5 className="font-semibold">Contact</h5>
                        <ul className="flex flex-col gap-2 mt-3">
                            <li>+91 9x9x9x9x9x</li>
                            <li>hi@flux.in</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold">Follow</h5>
                        <ul className="flex gap-4 mt-3">
                            <li>
                                <a href="">
                                    <Instagram />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Twitter/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Facebook />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
     );
}
 
export default Footer;