import useToggle from '../../../hooks/useToggle';
import styles from './Card.module.css';

const images = {
  "amex": "./amex.png",
  "discover": "./discover.png",
  "jcb": "./jcb.png",
  "visa": "./visa.png",
  "visa-electron": "./visa-electron.png",
  "mastercard": "./mastercard.png"
};

const numberMask = [1, 2, 3];

// 1. Crear un stateless component
const Card = (props) => {
  const { hidden, updateToggle } = useToggle(false);

  // 3. Añadir props
  const { title = "", ccending = "", ccholder = "", ccexp = "", cctype = ""} = props;

  if(ccending == "4242"){
    throw new Error("No puedes usar este numero");
  }

  return (
    <div className={styles.root}>
      <header className={styles.head}>
        <h6 className={styles.title}>{title}</h6>
      </header>
      <div className={styles.cardType}>
        <img
          src={images[cctype]}
          alt="Imagen de la tarjeta"
          width={53}
          height={32}
        />
      </div>
      <div className={styles.cardNumber}>
        {
          hidden === false
          ? (
            <>
              <span className={styles.cardNumberMask}>
                {numberMask.map((item) => {
                  return <span key={item}>&bull;&bull;&bull;&bull;</span>
                })}
              </span>
              <span>{ccending}</span>
            </>
          )
          : <span className={styles.cardNumberHidden} />
        }
        <button onClick={updateToggle} className={["button", styles.cardNumberToggle].join(" ")}>
          {
            hidden === false ? "Ocultar" : "Mostrar"
          }
        </button>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.block}>
          <h6 className={styles.title}>Titular de la tarjeta</h6>
          <span>{ccholder}</span>
        </div>
        <div className={styles.block}>
          <h6 className={styles.title}>Vence hasta</h6>
          <span>{ccexp}</span>
        </div>
      </div>
    </div>
  )
}

// 2. Exportar el componente
export default Card;