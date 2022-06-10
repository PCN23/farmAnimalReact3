import './App.css';
import { animals } from './AnimalList';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


function App() {


  return (
    <div className="App">
      <Header />
      <Main animals={animals}/>
      <Footer />
    </div>
  );
}

export default App;
