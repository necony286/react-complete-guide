import React from 'react';

const UserInput = (props) => {
  return (
    <div>
      <p>some text USERINPUT</p>
      <input type="text" onChange={props.changedInput} value={props.username} />
    </div>
  );
};

export default UserInput;
