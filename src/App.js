import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import PageNotFound from './components/Layout/PageNotFound';
import CookieConsent from "react-cookie-consent";
import { ContactPage } from '@mui/icons-material';
import FloorPlanPage from './components/FloorPlan/floorPlan';
import SmartLivingPage from './components/SmartLiving/SmartLiving';
import ConnectivityPage from './components/Connectivity/connectivity';
import GalleryPage from './components/Gallery/gallery';
import ContactUsPage from './components/ContactUs/ContactUs';

function App() {

  return (
    <>
      {/* <CookieConsent
        location="top"
        buttonText="Okay, Got It"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#fff", color: "#000", padding: "0 20px", alignItems: "center", flexDirection: "column" }}
        buttonStyle={{ color: "#fff", fontSize: "16px", backgroundColor: "#8F6445", padding: "10px 30px" }}
        expires={150}
        overlay={true}
        containerClasses="cookie-banner"
        contentStyle={{textAlign: "center", flex: 1}}
        overlayStyle={{backgroundColor: "#00000099"}}
      >
       <p className='font-semibold text-xl mb-2'>Important</p>  'The Ananta Aspire' serves solely as a platform for online advertising services and does not facilitate sales between developers and website users. The information displayed does not guarantee that a developer or project is registered or compliant with the Real Estate (Regulation and Development) Act, 2016. Please exercise caution and independently verify all project information before making any purchase or decision.
      </CookieConsent> */}

      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='*' element={<PageNotFound />} />

            <Route path='/about-us' element={<Home />} />
            <Route path='/floor-plan' element={<Home />} />
            <Route path='/smart-living' element={<Home />} />
            <Route path='/amenities' element={<Home />} />
            <Route path='/connectivity' element={<Home />} />
            <Route path='/gallery' element={<Home />} />
            <Route path='/contact-us' element={<Home />} />
          
            <Route path='/floorPlan' element={<FloorPlanPage />} />
            <Route path='/smartLiving' element={<SmartLivingPage />} />
            <Route path='/connectivities' element={<ConnectivityPage />} />
            <Route path='/galleries' element={<GalleryPage />} />
            <Route path='/contact' element={<ContactUsPage />} />
        

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
