import React, { useState , useEffect} from 'react'
import { Link } from 'react-router'


function Card({id,date,message,deleteCard}) {
 
  
 
  
  return (
    <>
      <div 
      className='w-[75vw]  md:w-[17vw] h-[25vh] md:h-[30vh] overflow-hidden text-white text-xl md:text-2xl md:m-4 m-1 rounded-t-3xl shadow-lg shadow-stone-600 border-[#ddbf80]  border'>
        <div className='flex bg-orange-500 poppins-light md:bg-orange-400 text-white px-2 py-2 flex-row justify-between rounded-t-2xl'>
          {date}
          <img src="https://img.icons8.com/?size=100&id=XNriopMmdLcO&format=png&color=000000" alt="delete card"
          onClick={()=>deleteCard(id)}
          className='text-black cursor-pointer h-[20px] mt-1 md:mt-2 pr-2 hover:scale-110'
        />
        </div> 
       
        <div className='text-[20px] h-full md:h-[23vh] nunito-600 text-ellipsis hover:overflow-y-scroll transition-all duration-600 px-3 pb-4 backdrop-blur-lg  bg-transparent  '>
        {message}
        </div>
      </div>
    </>
  )
}
function Home(){
  const [cards,setCards]=useState([])
  const [date,setDate]=useState("")
  const [message,setMessage]=useState("")

  
 useEffect(()=>{
  const stored_cards=JSON.parse(localStorage.getItem('cards'));
  if (stored_cards){
    setCards(stored_cards)
  }
},[]);
  useEffect(()=>{
    localStorage.setItem('cards',JSON.stringify(cards))
  },[cards])
    
  const addCard=()=>{
    if (!date || !message){
      alert("please enter both date and message");
      return
    }
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const newCard={
      id:Date.now(),
      date:formattedDate,
      message,
    };

   
    setCards(prev => [...prev, newCard]);
    setDate(""); 
    setMessage("");
    
    console.log(`card ${date} added`);
    console.log(cards);
  };
  
  const deleteCard = (id) => {
    setCards(prevCards => prevCards.filter(card => card.id !== id));
  };
  
  const recent_cards=[...cards].slice(-5).reverse();
    
  const init=()=>{
    if (cards.length===0){
      return(
        <div className='w-[80vw] poppins-medium md:w-[17vw] h-[25vh] md:h-[30vh] flex justify-center items-center text-white text-xl bg-transparent backdrop-blur-lg text-center p-3 rounded-t-xl m-4  border-[#ddbf80] border'>
        <p>Add memories about the day</p>
        </div>
      )
    }else{
      return(
        <Link to="timeline"><div className='w-[80vw] poppins-medium md:w-[17vw] h-[25vh] md:h-[30vh] flex justify-center items-center text-white text-xl bg-transparent backdrop-blur-lg text-center p-3 rounded-t-xl m-4  border-[#ddbf80] border hover:bg-slate-500 hover:bg-opacity-30'>
      <p>View all memories in Timeline</p> </div></Link>
     
      )
    }
  }
  
  return(
    <>
    <div className='flex md:flex-row flex-col md:justify-evenly items-center md:items-start'>   
    <div className='flex flex-col md:gap-2 gap-1 justify-center items-center  h-[40vh] z-10 md:h-[75vh] md:my-3 md:mx-7 w-full md:w-[30vw] backdrop-blur-lg bg-slate-500 bg-opacity-20 md:border-black rounded-2xl shadow-xl shadow-black mb-4 md:border-2  '>
    <h1 className='bg-clip-text text-transparent bg-gradient-to-br from-orange-700 to-orange-300 text-3xl md:text-5xl font-bold text-center p-2 md:m-3 m-0 poppins-bold  shadow-amber-600'>ChronoLog</h1>
    <h3 className='text-gray-200 md:text-3xl poppins-medium px-3 py-1  text-center'>Keep your memories in one place</h3>
    <label htmlFor="date_input" className='self-start ml-5 md:ml-7 mb-0 poppins-light text-sm text-white'>Enter the date</label>
    <input type="date" id='date_input'  value={date} onChange={e=>setDate(e.target.value)} 
    className='md:m-2 m-0 w-[90%] px-3 py-3 rounded-full bg-transparent border  backdrop-opacity-40 text-white'/> 
    <textarea  placeholder='Enter about the day' value={message} onChange={e=>setMessage(e.target.value)}
    className='m-2 px-3 py-2 w-[90%] rounded-lg poppins-medium backdrop-blur-lg bg-transparent border text-white '/> 
    <button onClick={addCard}
    className='m-2 px-3 poppins-medium py-2 ring-0 w-[90%] text-white bg-orange-600 hover:bg-orange-700 rounded-full' >Add card</button>
    </div>
    <div className='flex justify-center md:justify-start gap-2 md:gap-3 md:ml-5 flex-wrap w-[100vw] md:w-[70vw] h-[30vh]  md:h-[80vh] overflow-y-scroll'
    >{recent_cards.map(card => (
      <Card key={card.id} id={card.id} date={card.date} message={card.message} deleteCard={deleteCard} />
    ))}
    {init()}
    </div>
    </div> 
    
    </>

  )
}

export default Home

    
  

  

