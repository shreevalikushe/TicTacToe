import FilterTodo from "./Components/Filter/FilterTodo";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import Todo from "./Components/Todo/Todo";
import UpliftingTodo from "./Components/Uplifting/UpliftingTodo";
import "./styles.module.css";

export default function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <FilterTodo /> */}
      {/* <UpliftingTodo /> */}
      <TicTacToe />
    </div>
  );
}
