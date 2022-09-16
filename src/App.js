import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Contacts from "./component/Contacts/Contacts";
import Home from "./component/Home/Home";
import SkillsEducations from "./component/SkillsEducations/SkillsEducations";
import Footer from "./component/Shared/Footer/Footer";
import Navbar from "./component/Shared/Navbar/Navbar";
import Works from "./component/Works/Works";
import bg from "./asset/bg.jpeg";
import ReactProject from "./component/Works/ReactProject/ReactProject";
import FullStack from "./component/Works/FullStack/FullStack";
import ReactNative from "./component/Works/ReactNative/ReactNative";
import TeamProject from "./component/Works/TeamProject/TeamProject";
import ApartmentSeller from "./component/Works/ReactProject/ApartmentSeller/ApartmentSeller";
import TravelDestination from "./component/Works/ReactProject/TravelDestination/TravelDestination";
import RoyalEnfield from "./component/Works/ReactProject/RoyalEnfield/RoyalEnfield";
import Nest from "./component/Works/TeamProject/Nest/Nest";
import BrainSkill from "./component/Works/TeamProject/BrainSkill/BrainSkill";
import Blogs from "./component/Blogs/Blogs";

function App() {
  return (
    <div
      className="App bg-no-repeat bg-fixed bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/skillsEducation" element={<SkillsEducations />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/apartmentSeller" element={<ApartmentSeller />} />
          <Route path="/travelDestination" element={<TravelDestination />} />
          <Route path="/royalEnfield" element={<RoyalEnfield />} />
          <Route path="/nest" element={<Nest />} />
          <Route path="/brainSkill" element={<BrainSkill />} />
          <Route path="/works" element={<Works />}>
            <Route path="react" element={<ReactProject />} />
            <Route path="fullStack" element={<FullStack />} />
            <Route path="reactNative" element={<ReactNative />} />
            <Route path="teamProject" element={<TeamProject />} />
            <Route path="" element={<ReactProject />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
