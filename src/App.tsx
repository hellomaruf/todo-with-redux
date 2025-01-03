
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
// import { decrement, increment } from './features/counter/counterSlice'
// import { RootState } from './assets/redux/store'
// import { useAppDispatch, useAppSelector } from './assets/redux/hooks'

function App() {
  // const dispatch = useAppDispatch()
  // const {count} = useAppSelector((state : RootState)=>state.counter )
  // console.log(count);
  
  // const handleIncrement = (amount : number) =>{
  //   dispatch(increment(amount))
  // }
  // const handleDecrement = () =>{
  //   dispatch(decrement())
  // }


  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
