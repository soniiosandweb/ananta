import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import PageNotFound from './components/Layout/PageNotFound';
import CookieConsent from "react-cookie-consent";

function App() {

  return (
    <>
      <CookieConsent
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
       <p className='font-semibold text-xl mb-2'>Important</p> The Ananta Aspire is only acting as a medium for providing online advertising services. The Ananta Aspire does not in any way facilitate and cannot be deemed to be facilitating sales between developers and the visitors/users of the website. The display of information on The Ananta Aspire with respect to a developer or project does not guarantee that the developer / project has registered under the Real Estate (Regulation and Development), 2016 or is compliant with the same. Before deciding to purchase or taking any other action, you are requested to exercise due caution and to independently validate and verify all information about the project.
      </CookieConsent>

      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
