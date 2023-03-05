import "./style.css";

const FormPage = ({ onSubmit }) => (
  <form 
    className="form" 
    onSubmit={onSubmit}>
    <label 
      className="label" 
      htmlFor="visit-date"
    >
        Visit Date:
    </label>
    <input
      className="input"
      type="date"
      id="visit-date"
      name="visit-date"
      required
    />
    <br />
    <label 
      className="label" 
      htmlFor="weight"
    >
        Weight:
    </label>
    <input 
      className="input" 
      type="number" 
      d="weight" 
      name="weight" 
      required 
      placeholder="kg"
    />
    <br />
    <label 
      className="label" 
      htmlFor="biceps"
    >
        Biceps:
    </label>
    <input 
      className="input" 
      type="number" 
      id="biceps" 
      name="biceps" 
      required 
      placeholder="cm"
    />
    <br />
    <label 
      className="label" 
      htmlFor="chest"
    >
        Chest:
    </label>
    <input 
      className="input" 
      type="number" 
      id="chest" 
      name="chest" 
      required 
      placeholder="cm"
    />
    <br />
    <label 
      className="label" 
      htmlFor="waist"
    >
        Waist:
    </label>
    <input 
      className="input" 
      type="number" 
      id="waist" 
      name="waist" 
      required 
      placeholder="cm"
    />
    <br />
    <input 
      className="buttonInput" 
      type="submit" 
      value="Add Visit" 
    />
  </form>
);

export default FormPage;
