import { useState } from "react";
import "./style.css";

function BMIcalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [BMIstatus, setBMIstatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const calculatedBMI = () => Number(weight / Number(height / 100) ** 2);

    const bmi = calculatedBMI();
    setBmi(bmi);

    if (bmi <= 18.5) {
      setBMIstatus("Underweight");
    } else if (bmi <= 25) {
      setBMIstatus("Normal");
    } else if (bmi <= 30) {
      setBMIstatus("Overweight");
    } else {
      setBMIstatus("Obese");
    }
  };

  return (
    <>
      <h2 className="header">know your body mass index </h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">Weight:</label>
        <input
          className="input"
          required
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="enter your weight"
        />
        <br />
        <label className="label">Height:</label>
        <input
          className="input"
          required
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="enter your height"
        />
        <br />
        <button className="buttonInput" type="submit">
          Calculate BMI:
        </button>
        <p className="resultBmi">Your BMI: {bmi.toFixed(2)}</p>
        <p className="statusBmi">{BMIstatus}</p>
      </form>
    </>
  );
}

export default BMIcalculator;
