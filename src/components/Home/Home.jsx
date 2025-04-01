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
                title={"Luxury 3 & 4 BHK Apartments for Sale in Zirakpur | The Ananta Aspire"} 
                description={"Discover premium residential apartments for sale in Zirakpur at The Ananta Aspire. Explore 3 & 4 BHK luxury flats for sale, including options near Chandigarh Airport, all with world-class amenities!"} 
                keywords={"The Ananta Aspire, 3 BHK Flats in Zirakpur,4 BHK Flats in Zirakpur, Luxury Apartments in Zirakpur,Zirakpur Real Estate, Flats for Sale in Zirakpur, Ananta Aspire Zirakpur, Modern Apartments Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
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