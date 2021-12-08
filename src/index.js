import ReactDom from "react-dom";
import App from "./App";
import "./css/index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reminder from "./reducer";
const store = createStore(reminder);

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));