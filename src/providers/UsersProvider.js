import React, { useState } from 'react';
import { usersData } from 'data/usersData';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  isLoading: false,
});

const UsersProivder = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <UsersContext.Provider value={{ users, handleAddUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProivder;
