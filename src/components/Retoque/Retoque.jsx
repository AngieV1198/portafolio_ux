import React from "react";
import Imagefolio from "./Imagefolio";
import Styles from "./Retoque.module.css";
import { collection } from "../../images";


function Retoque(props) {
  const imglist = collection.map((element, key) => (
    <Imagefolio key={key} image={element} />
  ));
  
  return (
    <>
      <div className={Styles.container}>
        <h2>Retoque Digital</h2>
        <div className={Styles.listfolio}>{imglist}</div>
      </div>
    </>
  );
}

export default Retoque;
