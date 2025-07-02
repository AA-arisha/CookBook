import { useSelector } from 'react-redux';
import './App.css';
import Hero from './jsx/hero';
import Modal from './jsx/modal';
import StickyDiv from './jsx/stickydiv';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  const isModalOpen = useSelector( (state)=>state.weeks.isModalOpen );
  useEffect(()=>{
      console.log("is modal open ",isModalOpen);
      }, [isModalOpen])
  return (
    <div className="App">
      <header className="App-header" >
        <Toaster  position='top-right'/>
          <Hero/>
          <StickyDiv/>
          { isModalOpen&& <Modal/> }
         
      </header>
    </div>
  );
}

export default App;
