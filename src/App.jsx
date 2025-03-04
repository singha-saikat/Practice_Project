import Counter from "./components/Counter";

const App = () => {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
    </div>
  );
};

export default App;
