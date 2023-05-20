import "./style.css";

const LastWorkout = ({ exercises, removeExercise }) => (
  <div>
    <h2 className="headerExercise">Your workout:</h2>
    <ul className="list">
      {exercises &&
        exercises.map((exercise) => (
          <li className="exerciseList" key={exercise.id}>
            Date:{exercise.exerciseDate} Exercise: {exercise.exercise} Weight:{" "}
            {exercise.weight} Repetitions/Series: {exercise.reps}
            <button
              onClick={() => removeExercise(exercise.id)}
              className="button__listRemove"
            >
              ✖
            </button>
          </li>
        ))}
    </ul>
  </div>
);

export default LastWorkout;
