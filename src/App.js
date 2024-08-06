import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/Home Page/HomePage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/About Page/AboutPage";
import ViewBlog from "./Pages/View Blog Page/ViewBlog";
import Error404Page from "./Pages/Error 404 Page/Error404Page";
import DigitalTalentSolutions from "./Pages/Digital Talent Solutions/DigitalTalentSolutions";
import ExperienceDesign from "./Pages/Experience Design/ExperienceDesign";
import ScrollToTop from "./ScrollToTop";
import CookieConsent from "./Pages/CookieConsent";
import { useCookies } from "react-cookie";
import PrivacyPolicy from "./Pages/Privacy Policy/PrivacyPolicy";
import DataServices from "./Pages/Enterprise Application/Data Services/DataServices";
import BuisnessInteligence from "./Pages/Enterprise Application/Buisness Intelliigence/BuisnessInteligence";
import Aimlservices from "./Pages/Enterprise Application/AI & ML/aimlservices";
import Saps4hana from "./Pages/Enterprise Application/SAP1/Saps4hana";
import Sap2techservices from "./Pages/Enterprise Application/SAP2/Sap2techservices";
import SWdev from "./Pages/Product Engineering/Software Development/SWdev";
import Modernization from "./Pages/Product Engineering/Modernization/Modernization";
import Career from "./Pages/Career Page/Career";
import CloudNative from "./Pages/Product Engineering/Cloud Native Apps/CloudNative";
import Integration from "./Pages/Product Engineering/Integration/Integration";
import Sapbpt from "./Pages/SAPBPT Page/Sapbpt";
import SapbtpAppointment from "./Pages/SAPBPT Page/SapbtpAppointment";
import ContactUsPage from "./Pages/Contact Page/ContactUsPage";
import BrowseBlogs from "./Pages/Blogs Page/BrowseBlogs";
import QlikPage from "./Pages/Qlik Page/QlikPage";
import DataAi from "./Pages/Data & AI/Data & AI/DataAi";
import DataEngineering from "./Pages/Data & AI/Data Engineering/DataEngineering";
import InsightsAnalytics from "./Pages/Data & AI/Insights & Analytics/InsightsAnalytics";
import AIML from "./Pages/Data & AI/AI & ML/AIML";
import CardSlider from "./Pages/CardSlider/CardSlider";

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/errorpage" element={<Error404Page />} />
          <Route path="/viewblog" element={<ViewBlog />} />
          {/* <Route path="*" element={<Error404Page />} /> */}
          <Route path="/digitaltalentsolutions" element={<DigitalTalentSolutions />} />
          <Route path="/experiencedesign" element={<ExperienceDesign />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/dataservices" element={<DataServices/>} />
          <Route path="/buisnessintelligence" element={<BuisnessInteligence/>} />
          <Route path="/aiandml" element={<Aimlservices/>} />
          <Route path="/saps4hana" element={<Saps4hana/>} />
          <Route path="/sapstechnologyservices" element={<Sap2techservices/>} />
          <Route path="/softwaredevelopment" element={<SWdev/>} />
          <Route path="/modernization" element={<Modernization/>} />
          <Route path="/cloudnative" element={<CloudNative/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/integration" element={<Integration/>} />
          <Route path="/sapbtp" element={<Sapbpt/>} />
          <Route path="/sapbptappointment" element={<SapbtpAppointment/>} />
          <Route path="/contact" element={<ContactUsPage/>} />
          <Route path="/browseblogs" element={<BrowseBlogs/>} />
          <Route path="/qlik" element={<QlikPage/>} />
          <Route path="/dataai" element={<DataAi/>} />
          <Route path="/dataengineering" element={<DataEngineering/>} />
          <Route path="/insightsanalytics" element={<InsightsAnalytics/>} />
          <Route path="/aiml" element={<AIML/>} />
          <Route path="/cardslider" element={<CardSlider/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;