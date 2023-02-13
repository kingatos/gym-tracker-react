import { useState, useEffect } from 'react';
import Container from './Container';
import Header from './Header';
import Section from "./Section"
import Form from "./Form";
import BurgerMenu from './BurgerMenu';
import trackerLogo from "./Header/images/trackerlogo.png";
import BMIcalculator from "./BMIcalculator";

const getInitialTasks = () => {
  const visitsFromLocalStorage = localStorage.getItem("visits");

  return visitsFromLocalStorage
  ? JSON.parse(visitsFromLocalStorage)
  : [];
};


function App() {
  const [visits, setVisits] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("visits", JSON.stringify(visits));
  }, [visits]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newVisit = {
      id: Date.now(),
      visitDate: formData.get('visit-date'),
      weight: formData.get('weight'),
      biceps: formData.get('biceps'),
      chest: formData.get('chest'),
      waist: formData.get('waist')
    };
    setVisits([...visits, newVisit]);
  };

  const removeVisit = (id) => {
    setVisits(visits => visits.filter(visit => visit.id !== id));
  };

  return (
    <>
    <BurgerMenu />
    <Container>
      <Header
        trackerLogo={trackerLogo}
        subtitle="know your body" />
      <div>
        <Form
          onSubmit={handleSubmit} />
        <br />
        <Section
          visits={visits}
          removeVisit={removeVisit} />
      </div>
      <BMIcalculator />
    </Container>
    </>
  );
}

export default App;