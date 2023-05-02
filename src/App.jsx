import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { fetchRandomGreeting } from './redux/greetingSlice';
import Greeting from './components/greeting'

function App() {
  const dispatch = useDispatch();
  const {greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Greeting greeting={ greeting.message }/> }/>

      </Routes>    
    </BrowserRouter>
  )
}

export default App
