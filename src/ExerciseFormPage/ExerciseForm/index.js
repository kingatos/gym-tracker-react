import "./style.css";

const ExerciseForm = ({ onSubmit }) => (
  <>
    <h2 className="header">know your progress</h2>
    <form className="form" onSubmit={onSubmit}>
      <label className="label" htmlFor="exercise-date">
        Exercise Date:
      </label>
      <input
        className="input"
        type="date"
        id="exercise-date"
        name="exercise-date"
        required
      />
      <br />
      <label className="label" htmlFor="exercise">
        Exercise:
      </label>
      <input
        className="input"
        htmlFor="exercise"
        id="exercise"
        name="exercise"
        required
        placeholder="enter type of exercise"
      />
      <br />
      <label className="label" htmlFor="weight">
        Weight:
      </label>
      <input
        className="input"
        type="number"
        id="weight"
        name="weight"
        required
        placeholder="kg"
      />
      <br />
      <label className="label" htmlFor="reps">
        Repetitions/Series:
      </label>
      <input
        className="input"
        type="number"
        id="reps"
        name="reps"
        required
        placeholder="enter number of reps"
      />
      <br />
      <input className="buttonInput" type="submit" value="Save results" />
    </form>
  </>
);

export default ExerciseForm;
