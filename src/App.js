import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import ViewAll from './components/ViewAll';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <AddEmployee />
      <SearchEmployee />
      <DeleteEmployee />
      <ViewAll />
      <NavBar />

    </div>
  );
}

export default App;
