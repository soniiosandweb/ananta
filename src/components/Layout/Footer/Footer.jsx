import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Footer.css';
import logo from '../../../assests/images/logo.webp';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const footerLinks = [
        {
            name: "Privacy Policy",
            link: "/privacy-policy"
        },
        {
            name: "Terms & Conditions",
            link: "/terms-conditions"
        },
    ]

    return(
        <footer className="bg-primary-bg px-2.5 text-sm">
            <div className='max-w-8xl m-auto py-2.5'>
                {/* <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-2/3 p-2.5 flex flex-col">
                        <p>RERA No : PBRERA-SAS79-PR0777</p>
                        <ul className="mt-7 flex items-center footer-links">
                            {footerLinks.map((item, i) => (
                                <li className="px-1.5" key={i}><NavLink to={item.link} reloadDocument={true}>{item.name}</NavLink></li>
                            ))}
                        </ul>
                        <p>Copyright &copy; {new Date().getFullYear()} The Ananta Aspire. All Rights Reserved.</p>
                    </div>
                    <div className="w-full md:w-1/3 p-2.5 flex flex-col items-center md:items-end">
                        <NavLink to="/" className="block w-max" reloadDocument={true}>
                            <LazyLoadImage
                                src={logo}
                                alt="The Ananta Aspire"
                                style={{width: "100px"}}
                            />
                        </NavLink>
                    </div>
                </div> */}
                <div className="flex flex-col items-center text-center gap-1.5 px-2.5 py-2.5">
                    {/* <div className='h-px w-full bg-gray-300'></div> */}
                    <p className='text-md'>Channel Partner RERA Number : Coming Soon</p>
                    <p className='text-md'>Project RERA Number : PBRERA-SAS79-PR0777</p>
                    <p className='text-md font-semibold'>Disclaimer:</p>
                    <p><b>1.</b> The images shown are for illustration purposes only and may not be an exact representation of the product</p>
                    <p className='mt-1.5'><b>2.</b> Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us.</p>
                    <p>All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws.</p>
                    <p>For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.</p>
                    <p className='mt-1.5'><NavLink to='/terms-conditions' target='_blank' className='text-primary-brown font-semibold'>Terms & Conditions</NavLink> and <NavLink to='/privacy-policy' target='_blank' className='text-primary-brown font-semibold'>Privacy Policy</NavLink></p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer