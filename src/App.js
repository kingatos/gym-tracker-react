import { useState } from 'react';
import Container from './Container';
import Header from './Header';
import Section from "./Section"
import Form from "./Form";
import BurgerMenu from './BurgerMenu';


function App() {
  const [visits, setVisits] = useState([]);
  
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
        title="Gym Tracker"
        subtitle="know your body" />
      <div>
        <Form
          onSubmit={handleSubmit} />
        <br />
        <Section
          visits={visits}
          removeVisit={removeVisit} />
      </div>
    </Container>
    </>
  );
}

export default App;