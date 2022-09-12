const Food = ({ foodArr }) => (
  <ul>
    {foodArr.map((food) => (
      <li key={food}>{food}</li>
    ))}
  </ul>
);

export default Food;
