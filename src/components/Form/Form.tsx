import { useContext, useState, FormEvent } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import { UserContext } from "../../context/user";

import { IUser } from "../../types";
import { initialUserState } from "../../constants";
import axios from "../../axios";

import classes from "./Form.module.css";

const Form = () => {
  const [user, setUser] = useState<IUser>(initialUserState);
  const { addUser } = useContext(UserContext);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    const { data } = await axios.post("/user", user);
    addUser(data);
    setUser(initialUserState);
  };

  return (
    <section className={classes.Form}>
      <div className="row">
        <Input
          label="First name"
          name="first_name"
          value={user.first_name}
          changed={handleChange}
        />
        <Input
          label="Last name"
          name="last_name"
          value={user.last_name}
          changed={handleChange}
        />
        <Button clicked={handleSubmit} />
      </div>
      <div className="row">
        <Input
          label="Username"
          name="username"
          value={user.username}
          changed={handleChange}
        />
        <Input
          label="Date Of Birth"
          name="date_of_birth"
          value={user.date_of_birth}
          changed={handleChange}
        />
      </div>
    </section>
  );
};

export default Form;
