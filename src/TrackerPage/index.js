import Section from './Section';
import FormPage from './FormPage';
import { visits, removeVisit, handleSubmit } from '../App';

function TrackerPage() {
  return (
    <div>
      <FormPage onSubmit={handleSubmit} />
      <br />
      <Section visits={visits} removeVisit={removeVisit} />
    </div>
  );
}

export default TrackerPage;
