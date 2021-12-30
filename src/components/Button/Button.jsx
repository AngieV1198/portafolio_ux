import Styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ text, linked, external = false }) {
  return external ? (
    <Link to={linked} className={Styles.btn} target="_blank" rel="noreferrer">
      <p>{text}</p>
    </Link>
  ) : (
    <a href={linked} className={Styles.btn} target="_blank" rel="noreferrer">
      <p>{text}</p>
    </a>
  ); 
}

export default Button;
