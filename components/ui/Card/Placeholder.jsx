import styles from  "./Placeholder.module.css";

function CardPlaceholder({ text, error = false }){
  let defaultText = "Aquí habrá un componente para la tarjeta de crédito";
  const classNames = [styles.root];

  if(error){
    classNames.push(styles.hasError);
  }

  return (
    <div className={classNames.join(" ")}>
      <small>
        { text !== undefined ? text : defaultText } 
      </small>
    </div>
  )
}

export default CardPlaceholder;