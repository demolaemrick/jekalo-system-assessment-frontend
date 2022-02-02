import classes from "./Button.module.css";

interface ButtonProps {
  clicked: () => void;
}

const Button = ({ clicked }: ButtonProps) => {
  return (
    <button className={classes.Button} onClick={clicked}>
      Submit
    </button>
  );
};

export default Button;
