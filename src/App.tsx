
import './App.css'
import { decrement, increment } from './features/counter/counterSlice'
import { RootState } from './assets/redux/store'
import { useAppDispatch, useAppSelector } from './assets/redux/hooks'

function App() {
  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state : RootState)=>state.counter )
  console.log(count);
  
  const handleIncrement = (amount : number) =>{
    dispatch(increment(amount))
  }
  const handleDecrement = () =>{
    dispatch(decrement())
  }


  return (
    <>
     <div className="">
      <h2>Counter with redux</h2>
      <button onClick={()=>handleIncrement(5)}>Increment by 5</button>
      <button onClick={()=>handleIncrement(1)}>Increment</button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
     </div>
    </>
  )
}

export default App
