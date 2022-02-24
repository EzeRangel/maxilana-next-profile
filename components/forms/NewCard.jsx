import React from 'react';

import styles from "./Form.module.css";
import cardStyles from "../ui/Card/Card.module.css";

const INITIAL_VALUES = {
  ccholder: "",
  ccnumber: "",
  ccexp: "",
  cvv: "",
}

const NewCard = () => {
  const [ccholder, updateHolder] = React.useState("");
  const [ccnumber, updateNumber] = React.useState("");
  const [ccexp, setExpState] = React.useState("");
  const [cvv, setCVVState] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log({ ccholder, ccnumber, ccexp, cvv });
  }

  return (
    <div className={cardStyles.root}>
      <header className={cardStyles.head}>
        <h6 className={cardStyles.title} style={{ textAlign: "right" }}>
          Nueva tarjeta
        </h6>
      </header>
      <form className={styles.root} onSubmit={handleFormSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="ccholder">Titular de la tarjeta</label>
          <input
            className={styles.input}
            id="ccholder"
            type="text"
            placeholder="Nombre que aparece en la tarjeta"
            name="ccholder"
            value={ccholder}
            onChange={(evt) => {
              const value = evt.target.value; // 1. Obtenemos el valor del input

              updateHolder(value); // 2. Actualizamos el state
            }}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="ccnumber">No. de la tarjeta</label>
          <input
            className={styles.input}
            id="ccnumber"
            type="text"
            placeholder="16 dígitos de la tarjeta"
            maxLength={16}
            name="ccnumber"
            value={ccnumber}
            onChange={({ target: { value } }) => {             
              /**
               * const evt = { ..., target: { ..., value: "ESTE ES EL VALOR" } }
               */

              updateNumber(value);
            }}
          />
        </div>
        <div className={styles.colwrapper}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="ccexp">Fecha exp.</label>
            <input
              className={styles.input}
              id="ccexp"
              type="text"
              placeholder="MM/YYYY"
              name="ccexp"
              value={ccexp}
              onChange={({ target }) => { setExpState(target.value) }}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="cvv">CVV</label>
            <input
              className={styles.input}
              id="cvv"
              type="password"
              maxLength={3}
              name="cvv"
              value={cvv}
              onChange={({ target }) => setCVVState(target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit" className={styles.button}>Guardar tarjeta</button>
        </div>
      </form>
    </div>
  )
}

export default NewCard;