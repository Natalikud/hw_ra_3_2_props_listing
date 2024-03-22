import data from './components/listing/data/etsy.json';
import Listing from './components/listing/js/listing';
import './components/listing/css/style.css';

function App() {
  return (
    <div className="App">
      <Listing items = { data }/>
    </div>
  );
}

export default App;
