import { useContext } from "react";
import Avatar from "../../UI/Avatar/Avatar";
import DeleteIcon from "../../Icons/DeleteIcon";

import { IUser } from "../../../types";
import axios from "../../../axios";
import { UserContext } from "../../../context/user";

import classes from "./TableRow.module.css";

const TableRow = ({
  name_prefix,
  username,
  first_name,
  last_name,
  date_of_birth,
}: IUser) => {
  const { removeUser } = useContext(UserContext);

  const handleDelete = async () => {
    await axios.delete(`/${username}`);
    removeUser(username);
  };
  return (
    <div className={classes.TableRow}>
      <div className={classes.InnerFlex}>
        <Avatar>{name_prefix}</Avatar>
        <div>{username}</div>
        <div>{`${first_name} ${last_name}`}</div>
      </div>
      <div className={classes.InnerFlex}>
        <div>{date_of_birth}</div>
        <div>
          <DeleteIcon clicked={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default TableRow;
