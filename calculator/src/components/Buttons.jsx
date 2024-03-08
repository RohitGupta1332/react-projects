import styles from "./ButtonStyles.module.css";

const Button = ({ buttonKey, setDisplay, display}) => {
  function calculate(value){
    if(value === 'C'){
      setDisplay('');
    }
    else if(value === '='){
      let result = eval(display)
      setDisplay(result)
    }
    else{
      setDisplay(display + value)
    }
  }
  return (
    <div className={styles.buttonContainer}>
      {buttonKey.map((key, index) => (
        <button key={index} className={styles.button} onClick={() => { calculate(key) }}>
          {key}
        </button>
      ))}
    </div>
  )
}

export default Button;
