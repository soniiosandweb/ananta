import MetaData from "../Layout/MetaData"
import AboutUs from "./AboutUs/AboutUs"
import Amenities from "./Amenities/Amenities"
import BannerSlider from "./BannerSlider/BannerSlider"
import ContactUs from "./ContactUs/ContactUs"
import FloorPlan from "./FloorPlan/FloorPlan"
import Gallery from "./Gallery/Gallery"
import ListSection from "./ListSection/ListSection"
import ProjectConnectivity from "./ProjectConnectivity/ProjectConnectivity"
import SmartLiving from "./SmartLiving/SmartLiving"

const Home = () => {
    return(
        <>
            <MetaData 
                title={"The Ananta Aspire: Your Dream Home Awaits in Zirakpur"} 
                description={"Explore luxurious 3 & 4 BHK flats in Zirakpur at The Ananta Aspire. Discover modern amenities, stunning designs, and a prime location. Schedule a visit today! "} 
                keywords={"The Ananta Aspire, 3 BHK Flats in Zirakpur,4 BHK Flats in Zirakpur, Luxury Apartments in Zirakpur,Zirakpur Real Estate, Flats for Sale in Zirakpur, Ananta Aspire Zirakpur, Modern Apartments Zirakpur"}
                
            />

            <BannerSlider />
            <ListSection />
            <AboutUs />
            <FloorPlan />
            <SmartLiving />
            <Amenities />
            <ProjectConnectivity />
            <Gallery />
            <ContactUs />
        </>
    )
}

export default Home