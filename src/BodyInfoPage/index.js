import FormPage from "./FormPage";
import Section from "./Section";

function BodyInfoPage({ setVisits, visits, subtitle }) {
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
    <div>
      <h2 className="subHeader">{subtitle} </h2>
      <FormPage onSubmit={handleSubmit} />
      <br />
      <Section visits={visits} removeVisit={removeVisit} />
    </div>
  );
}

export default BodyInfoPage;
