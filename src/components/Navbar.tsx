import navlogo from '../assets/images/task.webp'
import { ModeToggle } from './mode-toggle'


function Navbar() {
  return (
    <div className="max-w-7xl mx-auto text-2xl my-3 flex items-center gap-1">
    <img className='w-[50px] h-[50px] object-cover' src={navlogo} alt=""  />
    <span className="font-bold ">Task</span>Master
    <div className="ml-auto">
    <ModeToggle/>
    </div>
   </div>
  )
}

export default Navbar
