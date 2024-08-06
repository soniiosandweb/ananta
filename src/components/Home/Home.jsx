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
                title="The Ananta Aspire"
                description="Find affordable luxury apartments at Ananta Aspire Zirakhpur. Explore our ready-to-move-in 1, 2, 3, and 4BHK flats. Get sample flat photos and prices."
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