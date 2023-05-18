import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BMIcalculatorPage from "./BMIcalculatorPage";
import Container from "./Container";
import Header from "./Header";
import BurgerMenu from "./BurgerMenu";
import trackerLogo from "./Header/images/trackerlogo.png";
import BodyInfoPage from "./BodyInfoPage";
import HomePage from "./HomePage";
import ExerciseFormPage from "./ExerciseFormPage";

const getInitialVisits = () => {
  const visitsFromLocalStorage = localStorage.getItem("visits");

  return visitsFromLocalStorage && visitsFromLocalStorage.length > 0
    ? JSON.parse(visitsFromLocalStorage)
    : [];
};

const getInitialExercises = () => {
  const exercisesFromLocalStorage = localStorage.getItem("exercises");

  return exercisesFromLocalStorage && exercisesFromLocalStorage.length > 0
    ? JSON.parse(exercisesFromLocalStorage)
    : [];
};

function App() {
  const [visits, setVisits] = useState(getInitialVisits());
  const [exercises, setExercises] = useState(getInitialExercises());

  useEffect(() => {
    localStorage.setItem("visits", JSON.stringify(visits));
  }, [visits]);

  return (
    <>
      <Container>
        <Header trackerLogo={trackerLogo} />
        <Router>
          <Routes>
            <Route path="/gym-tracker-react" element={<HomePage />} default />
            <Route path="/home-page" element={<HomePage />} />
            <Route
              path="/body-info"
              element={
                <BodyInfoPage
                  subtitle="know your body"
                  visits={visits}
                  setVisits={setVisits}
                />
              }
            />
            <Route path="/bmi-calculator" element={<BMIcalculatorPage />} />
            <Route
              path="/exercise-form"
              element={
                <ExerciseFormPage
                  exercises={exercises}
                  setExercises={setExercises}
                />
              }
            />
          </Routes>
          <BurgerMenu />
        </Router>
      </Container>
    </>
  );
}

export default App;
