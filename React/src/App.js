import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import Food from './components/Food';
import Alert from './components/Alert';
import { useState } from 'react';

const food = ['Pizza', 'Hamburger', 'Coke'];
const App = () => {
  const [state, setState] = useState('');
  function handleChange(e) {
    setState(e.target.value);
  }
  return (
    <Wrapper>
      <p>Read the README.md to see the tasks</p>
      <MyComponent title="It works!" />
      <Food foodArr={food} />
      <Alert handleChange={handleChange} state={state} />
    </Wrapper>
  );
};

export default App;
