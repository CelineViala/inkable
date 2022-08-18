
import './App.scss';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import SubscribePro from './components/SubscribePro';
import DetailsPro from './components/DetailsPro';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/prosubscribe" element={ <SubscribePro/> }/>
          <Route path="/pro-details/:id" element={ <DetailsPro/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
