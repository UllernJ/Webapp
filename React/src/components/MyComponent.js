import Title from './Title';
const MyComponent = (props) => (
  <div>
    <Title title="Test!" />
    <h1>{props.title}</h1>
  </div>
);

export default MyComponent;
