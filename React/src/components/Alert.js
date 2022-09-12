import { useState } from 'react';
const Alert = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    console.log('click');
    console.log(props.state);
    !clicked ? setClicked(true) : setClicked(false);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <input onChange={props.handleChange} value={props.state}></input>
      {clicked ? <p>{props.state}</p> : null}
    </div>
  );
};

export default Alert;
