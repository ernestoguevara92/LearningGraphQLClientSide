import './App.css';
import Title from './components/layout/Title';
import AddContact from './components/forms/AddContact';
import Contacts from './components/lists/Contacts';

const App = () => {
  return (
    <div className="App">
      <Title />
      <AddContact />
      <Contacts />
    </div>
  );
}

export default App;
