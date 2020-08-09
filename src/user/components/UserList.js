import React from 'react';

import './UserList.css';
import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';

const UserList = props => {
  if (!props.items.length) {
    return (
      <div className="center">
        <Card>
          <h2>No users.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user)=> {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}>
          </UserItem>
        );
      })}
    </ul>
  );
}

export default UserList;