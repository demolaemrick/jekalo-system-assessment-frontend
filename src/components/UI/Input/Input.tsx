import { FormEvent } from "react";
import classes from "./Input.module.css";

interface AppProps {
  label: string;
  name: string;
  value: string;
  changed: (e: FormEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, name, changed }: AppProps) => {
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{label}</label>
      <input
        className={classes.InputElement}
        placeholder={label}
        name={name}
        value={value}
        onChange={changed}
      />
    </div>
  );
};

export default Input;
