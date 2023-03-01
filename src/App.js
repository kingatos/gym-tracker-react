import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BMIcalculatorPage from "./BMIcalculatorPage";
import Container from "./Container";
import Header from "./Header";
import BurgerMenu from "./BurgerMenu";
import trackerLogo from "./Header/images/trackerlogo.png";
import BodyInfoPage from "./BodyInfoPage";
import HomePage from "./HomePage";

const getInitialVisits = () => {
  const visitsFromLocalStorage = localStorage.getItem("visits");

  return visitsFromLocalStorage && visitsFromLocalStorage.length > 0
    ? JSON.parse(visitsFromLocalStorage)
    : [];
};

function App() {
  const [visits, setVisits] = useState(getInitialVisits);

  useEffect(() => {
    localStorage.setItem("visits", JSON.stringify(visits));
  }, [visits]);

  return (
    <>
      <Container>
        <Header trackerLogo={trackerLogo}  />
        <Router>
          <Routes>
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/body-info" element={<BodyInfoPage subtitle="know your body" visits={visits} setVisits={setVisits} />}/>
            <Route path="/bmi-calculator" element={<BMIcalculatorPage />} />
          </Routes>
          <BurgerMenu />
        </Router>
      </Container>
    </>
  );
}

export default App;
