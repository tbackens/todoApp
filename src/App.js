
import './App.css';
import TodoList from './components/TodoList';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <TodoList/>
    </div>
  );
}

export default App;
