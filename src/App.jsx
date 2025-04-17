import React, { useState } from 'react'



function Card({id,date,message}) {
  
 
  
  return (
    <>
      <div
      className='min-w-[15vw] min-h-[30vh] text-blue-900 text-2xl m-4 px-3 py-1  hover:scale-110 transition-transform duration-600 bg-sky-200 rounded-xl border-red-950 border-4'>
        <div className='flex flex-row justify-between'>
          {date}
          <img src="https://img.icons8.com/?size=100&id=XNriopMmdLcO&format=png&color=000000" alt="" className='text-black h-[20px] mt-2'
        onClick={() => deleteCard(id)
      }/>
        </div> 
        <hr className='border-black w-[70%] text-center' />
        <div className='text-sm text-red-500'>
        {message}
        </div>
      </div>
    </>
  )
}
function Card_container(){
  const [cards,setCards]=useState([])
  const [date,setDate]=useState("")
  const [message,setMessage]=useState("")

  const deleteCard = (id) => {
    const newCards = [...cards]; 
    newCards.pop(); 
    setCards(newCards);
  };

  const addCard=()=>{
    if (!date || !message){
      alert("please enter both date and message");
      return
    }
    const newCard=React.createElement(Card,{
      id:Date.now(),
      date,
      message,
      key: cards.length+1,
    });
    setCards(prevCards => [...prevCards, newCard]);
    setDate(""); 
    setMessage("");
    console.log(`card ${date} added`);
    console.log(cards);
  }; 
  
  
    
 
  
  return(
    <>    
    <div className='flex flex-col gap-3 justify-center w-[45vw] '>
    <h1 className='text-white text-4xl font-bold text-center p-2 m-3 font-mono'>Digidairy</h1>
    <h3 className='text-gray-400 text-3xl px-3 py-1 text-center'>Keep your memories in one place</h3>
    <input type="date" value={date} onChange={e=>setDate(e.target.value)} 
    className='m-2 px-2 py-1 rounded-md'/> <br />
    <input type="text" placeholder='Enter the text' value={message} onChange={e=>setMessage(e.target.value)}
    className='m-2 px-2 py-1 rounded-md'/> <br />
    <button onClick={addCard}
    className='m-2 px-2 py-1 text-white bg-orange-700 rounded-full' >Add card</button>
    </div> <hr />
    <div className='flex flex-row gap-3 flex-wrap max-w-[50vw]'
    >{cards}</div>
    
    
    </>

  )
}

export default Card_container
