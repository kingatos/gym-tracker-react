import ExerciseForm from "./ExerciseForm";
import LastWorkout from "./LastWorkout";

function ExerciseFormPage({ exercises, setExercises }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newExercise = {
      id: Date.now(),
      exerciseDate: formData.get("exercise-date"),
      exercise: formData.get("exercise"),
      weight: formData.get("weight"),
      reps: formData.get("reps"),
    };
    setExercises([...exercises, newExercise]);
    localStorage.setItem("exercises", JSON.stringify([...exercises, newExercise]));
  };

  const removeExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id!== id));
    localStorage.setItem("exercises", JSON.stringify(exercises.filter((exercise) => exercise.id !== id)));
  };

  return (
    <div>
      <ExerciseForm onSubmit={handleSubmit} />
      <br />  
      <LastWorkout exercises={exercises} removeExercise={removeExercise} />
    </div>
  );
}

export default ExerciseFormPage;
