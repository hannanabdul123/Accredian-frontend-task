import React,{ useState } from 'react'
import ReferralModal from './Components/ReferralModal';
import './App.css';
function App() {
  const [open, setOpen] = useState(false);

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

return (
  <div className="hero h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center">
    <h1 className="text-5xl mb-4">Refer & Earn</h1>
    <p className="text-xl mb-8">Invite your friends to join our course and earn rewards!</p>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleOpen}
    >
      Refer Now
    </button>
  
    <ReferralModal open={open} handleClose={handleClose} />
  </div>
);
  

}

export default App