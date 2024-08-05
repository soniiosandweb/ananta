import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Footer.css';
import logo from '../../../assests/images/logo.webp';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const footerLinks = [
        {
            name: "Privacy Policy",
            link: "/"
        },
        {
            name: "Terms & Conditions",
            link: "/"
        },
    ]

    return(
        <footer className="bg-primary-bg px-2.5 text-sm">
            <div className='max-w-8xl m-auto py-2.5'>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-2/3 p-2.5 flex flex-col">
                        <p>RERA No : PBRERA-SAS79-PR0777</p>
                        <ul className="mt-7 flex items-center footer-links">
                            {footerLinks.map((item, i) => (
                                <li className="px-1.5" key={i}><NavLink to={item.link}>{item.name}</NavLink></li>
                            ))}
                        </ul>
                        <p>Copyright &copy; {new Date().getFullYear()} The Ananta Aspire. All Rights Reserved.</p>
                    </div>
                    <div className="w-full md:w-1/3 p-2.5 flex flex-col items-center md:items-end">
                        <NavLink to="/" className="block w-max">
                            <LazyLoadImage
                                src={logo}
                                alt="The Ananta Aspire"
                                style={{width: "100px"}}
                            />
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 px-2.5 pt-5 pb-2.5">
                    <div className='h-px w-full bg-gray-300'></div>
                    <p>Disclaimer: The information provided on this website is for general informational purposes only and is subject to change. We make no representations or warranties about its accuracy, completeness, or reliability. Users should verify all information before relying on it. External links are provided as a convenience and do not constitute an endorsement. We assume no responsibility for the content of external sites.</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer