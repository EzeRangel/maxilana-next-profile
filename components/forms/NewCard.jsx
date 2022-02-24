import React, { useState } from 'react';

import styles from "./Form.module.css";
import cardStyles from "../ui/Card/Card.module.css";

const INITIAL_VALUES = {
  title: "",
  ccholder: "",
  ccnumber: "",
  ccexp: "",
  cvv: "",
}

const NewCard = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [ccholder, updateHolder] = useState("");
  const [ccnumber, updateNumber] = useState("");
  const [ccexp, setExpState] = useState("");
  const [cvv, setCVVState] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const params = {
        title,
        cvv,
        ccexp,
        ccholder,
        cctype: "visa",
        ccending: ccnumber,
      };

      console.log(params);

      setTitle("");
      updateHolder("");
      updateNumber("");
      setExpState("");
      setCVVState("");
    } catch (err) {
      console.log("Ocurrió un error al agregar una tarjeta.");
    } finally {
      setLoading(false);
    }

        
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
          <label className={styles.label} htmlFor="title">Identificador de la tarjeta</label>
          <input
            className={styles.input}
            id="title"
            type="text"
            placeholder="Tarjeta de nómina"
            name="title"
            value={title}
            onChange={(evt) => {
              const value = evt.target.value; // 1. Obtenemos el valor del input

              setTitle(value); // 2. Actualizamos el state
            }}
          />
        </div>
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
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Guardando tarjeta..." : "Guardar tarjeta"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewCard;