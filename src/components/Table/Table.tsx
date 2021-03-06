import { useContext } from "react";
import Header from "./Header/Header";
import TableRow from "./TableRow/TableRow";

import classes from "./Table.module.css";
import { UserContext } from "../../context/user";

const Table = () => {
  const { users, isLoading } = useContext(UserContext);

  return (
    <section className={classes.Table}>
      <Header />
      {isLoading && <p className="text-center mt-5">Loading...</p>}
      {users?.map((user) => (
        <TableRow key={user.username} {...user} />
      ))}
    </section>
  );
};

export default Table;
