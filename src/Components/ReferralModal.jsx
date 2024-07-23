
import React,{ useState } from 'react'
import axios from 'axios';
function ReferralModal({open,handleClose}) {
    const[referrer,SetReferrer]=useState("");
    const[referee,SetReferee]=useState("");
    const[email,SetEmail]=useState("");
    const [message, setMessage] = useState('');
    
    const CloseM=async(e)=>{
      e.preventDefault();
      setMessage('');
      SetReferrer('');
      SetReferee('');
      SetEmail('');
      handleClose();
    }
    const handleSubmit=async(e)=>{
    e.preventDefault();
  
    try{
      console.log('Entering');
      const response=await axios.post('http://localhost:3300/api/referrals',{
        
         referrer,
         referee,
         email,
      });
      
      console.log(response);

      alert('Referral submitted successfully!');
      setMessage('Referral submitted successfully!');
      SetReferrer('');
      SetReferee('');
      SetEmail('');
      
    } catch(error){
      
      
      setMessage('Error submitting referral.');
    }

    };
            
if(!open) return null;
  return (
 <div className='mb-8 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>

 
    <div className=' bg-white p-8 rounded shadow-lg w-96 mb-6'>
      <h2 className='text-2xl mb-8'>Refer a friend</h2> 
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
<label className='block text-gray-700'>Your name</label>
<input

 type="text" 
 value={referrer}
 className='w-full px-3 py-2 border-2 rounded  text-black focus:outline-none focus:border-blue-500 '
 onChange={(e)=>SetReferrer(e.target.value)}
 required
placeholder="Enter Input"
/>
</div>

<div className='mb-4'>
<label className='block text-gray-700'>Friend's name</label>
<input
 type="text" 
 value={referee}
  className='w-full px-3 py-2 border-2 rounded  text-black focus:outline-none focus:border-blue-500 '
 onChange={(e)=>SetReferee(e.target.value)}
 required
 placeholder="Enter Input"
/>
</div>

<div className='mb-4'>
<label className='block text-gray-700'>Friend's Email</label>
<input

 type="text" 
 value={email}
  className='w-full px-3 py-2 border-2  rounded  text-black focus:outline-none focus:border-blue-500 '
 onChange={(e)=>SetEmail(e.target.value)}
 required
pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
 placeholder="example@example.com"
/>
</div>

   <button

   
   type='submit' 
   className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '
   
   >Submit</button> 

        </form>

        <button onClick={CloseM} 
        className='mt-4 text-red-500 hover:underline' 
        >Close</button>

        {
          message && <p className='mt-4 text-blue-800'>{message}</p>
        }

    </div>
    </div>
  );
}

export default ReferralModal;