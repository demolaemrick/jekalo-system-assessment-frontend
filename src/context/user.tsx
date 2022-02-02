import { useState, useEffect, createContext, FC } from "react";
import axios from "../axios";
import { IUser } from "../types";

interface IUserContext {
  users: IUser[];
  isLoading: boolean;
  addUser: (user: IUser) => void;
  removeUser: (username: string) => void;
}

export const UserContext = createContext<IUserContext>({
  users: [],
  isLoading: false,
  addUser: (user) => {},
  removeUser: (username) => {},
});

const UserProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const response = await axios.get("/users");
      setUsers(response.data);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  const addUserHandler = (user: IUser) => {
    setUsers([...users, user]);
  };

  const removeUserHandler = (username: string) => {
    const filteredUsers = users.filter((user) => user.username !== username);
    setUsers(filteredUsers);
  };

  const values = {
    users,
    isLoading,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
