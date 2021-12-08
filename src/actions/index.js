import { addReminder } from "../types";
import { deleteReminder } from "../types";

export const addReminderFunc = (text, date) => {
  return {
    type: addReminder,
    text,
    date
  }
}

export const deleteReminderFunc = (index) => {
  return {
    type: deleteReminder,
    index
  }
}