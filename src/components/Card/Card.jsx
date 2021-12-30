import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "../Button/Button";

function Card({ imagen, title, parrafo, nboton = 2, link1="#", link2="#", NameButton, external}) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 20%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>{parrafo}</p>

        {nboton === 2 ? (
          <div className={Styles.btnn}>
            <Button text="Diseño" linked={link1}/> <Button text={NameButton} linked={link2}/>
            </div>
        ) : (
            <div className={Styles.btnnc}>
                <Button text="Diseño" linked={link1} external={external}/>
            </div>
        )}

    </animated.div>
  );
}

export default Card;
