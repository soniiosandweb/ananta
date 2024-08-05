import MetaData from "../Layout/MetaData"
import AboutUs from "./AboutUs/AboutUs"
import BannerSlider from "./BannerSlider/BannerSlider"
import FloorPlan from "./FloorPlan/FloorPlan"
import ListSection from "./ListSection/ListSection"

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
        </>
    )
}

export default Home