import './App.css';
import Clock from './components/Clock/Clock';
import ClockFunction from './components/ClockFunction/ClockFunction';
import ClockFunctionTest from './components/ClockFunctionTest/ClockFunctionTest';

function App() {
  return (
    <div className="App">
      <Clock />
      <hr />
      <ClockFunction />
      <hr />
      <ClockFunctionTest />
    </div>
  );
}

export default App;
