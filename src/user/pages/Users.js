import React from "react";

import UserList from '../components/UserList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jose Angel',
      image: 'https://cdn1.iconfinder.com/data/icons/flat-character-color-1/60/flat-design-character_3-512.png',
      places: 3
    },
    {
      id: 'u2',
      name: 'Jose Angel 2',
      image: 'https://cdn1.iconfinder.com/data/icons/flat-character-color-1/60/flat-design-character_3-512.png',
      places: 10
    }
  ];

  return (
    <UserList items={USERS}></UserList>
  );
}

export default Users;