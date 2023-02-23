import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BMIcalculatorPage from "./BMIcalculatorPage";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import FormPage from "./FormPage";
import BurgerMenu from "./BurgerMenu";
import trackerLogo from "./Header/images/trackerlogo.png";



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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newVisit = {
      id: Date.now(),
      visitDate: formData.get("visit-date"),
      weight: formData.get("weight"),
      biceps: formData.get("biceps"),
      chest: formData.get("chest"),
      waist: formData.get("waist"),
    };
    setVisits([...visits, newVisit]);
  };

  const removeVisit = (id) => {
    setVisits((visits) => visits.filter((visit) => visit.id !== id));
  };

  return (
    <>
        <Container>
          <Header trackerLogo={trackerLogo} subtitle="know your body" />
          <div>
            <FormPage onSubmit={handleSubmit} />
            <br />
            <Section visits={visits} removeVisit={removeVisit} />
          </div>
          <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/bmi-calculator" element={<BMIcalculatorPage />} />
        </Routes>
        <BurgerMenu />
        </Router>
        </Container>
      </>
  );
}

export default App;
