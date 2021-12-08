import { addReminder } from "../types";
import { deleteReminder } from "../types";

const Reminder = (state = [], action) => {
  let reminders = [];
  if (action.type === addReminder) {
    reminders = [...state, { text: action.text, date: action.date }];
    return reminders;
  }
  else if (action.type === deleteReminder) {
    return state.filter((item, index) => index !== action.index);
  }
}

export default Reminder;