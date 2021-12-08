import { useState } from "react";
import { connect } from "react-redux";
import { addReminderFunc } from "./actions";
import { deleteReminderFunc } from "./actions";
import moment from "moment";
function App(props) {
  function handleFormSubmit(e) {
    e.preventDefault();
    if (reminder !== "" && dateTime !== "") {
      props.addReminderFunc(reminder, dateTime);
      setDateTime("");
      setReminder("");
    }
  }
  function handleReminderChange(e) {
    setReminder(e.target.value);
  }
  function handledateTimeChange(e) {
    setDateTime(e.target.value);
  }
  function resetForm() {
    setReminder('');
    setDateTime('');
  }
  const [reminder, setReminder] = useState("");
  const [dateTime, setDateTime] = useState("");
  return <div className="wrap">
    <h1>Reminder App</h1>
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <input type="text" placeholder="Enter your reminder ..." className="form-control" value={reminder} onChange={handleReminderChange} />
      </div>
      <div className="form-group">
        <input type="datetime-local" placeholder="Enter your reminder ..." className="form-control" value={dateTime} onChange={handledateTimeChange} />
      </div>
      <div className="form-group">
        <button type="submit" className="form-button primary">Add Reminder</button>
        <button type="reset" className="form-button danger" onClick={resetForm}>Clear Reminder</button>
      </div>
    </form>
    <div className="reminder">
      {
        props.data ?
          <ul className="list">
            {props.data.map((item, index) =>
              <li key={index} className="reminder-item">
                <div>{item.text}</div>
                <div>{moment(new Date(item.date)).fromNow()}</div>
                <button onClick={() => props.deleteReminderFunc(index)}>Delete</button>
              </li>
            )} </ul>
          : <p>There is no reminder added.  </p>

      }
    </div>
  </div>
}

export default connect(state => { return { data: state } }, { addReminderFunc, deleteReminderFunc })(App);