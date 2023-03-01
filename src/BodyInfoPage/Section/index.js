import "./style.css";


const Section = ({ visits, removeVisit }) => (
    <div>
        <h2 className="headerVisits">Your visits:</h2>
        <ul className="list">
            {visits && visits.map(( visit ) => (
                <li className="visitsList"
                    key={visit.id}>
                    Date: {visit.visitDate}, Weight: {visit.weight}, Biceps: {visit.biceps}, Chest: {visit.chest}, Waist: {visit.waist}
                    <button
                        onClick={() => removeVisit(visit.id)}
                        className="button__listRemove">✖
                    </button>

                </li>
            ))}
        </ul>
    </div>
);

export default Section;