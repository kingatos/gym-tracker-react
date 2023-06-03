import { useState, useEffect } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
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
        <HashRouter>
          <BurgerMenu />
          <Switch>
            <Route path="/gym-tracker-react">
              <HomePage />
            </Route>
            <Route path="/home-page">
              <HomePage />
            </Route>
            <Route path="/body-info">
              <BodyInfoPage
                subtitle="know your body"
                visits={visits}
                setVisits={setVisits}
              />
            </Route>
            <Route path="/bmi-calculator">
              <BMIcalculatorPage />
            </Route>
            <Route path="/exercise-form">
              <ExerciseFormPage
                exercises={exercises}
                setExercises={setExercises}
              />
            </Route>
            <Route>
              <Redirect to={<HomePage />} />
            </Route>
          </Switch>
        </HashRouter>
      </Container>
    </>
  );
}

export default App;
