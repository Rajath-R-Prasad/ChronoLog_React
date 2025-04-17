import React, { useState , useEffect} from 'react'



function Card({id,date,message,deleteCard}) {
  
  
 
  
  return (
    <>
      <div 
      className='w-[80vw]  md:w-[17vw] h-fit overflow-hidden text-white text-xl md:text-2xl m-4 rounded-t-3xl shadow-lg shadow-neutral-700  border-[#ddbf80] border'>
        <div className='flex bg-orange-500 poppins-light md:bg-orange-400 text-white px-2 py-2 flex-row justify-between rounded-t-2xl'>
          {date}
          <img src="https://img.icons8.com/?size=100&id=XNriopMmdLcO&format=png&color=000000" alt=""
          onClick={()=>deleteCard(id)}
          className='text-black h-[20px]  cursor-pointer mt-1 md:mt-2 pr-2 hover:scale-110'
        />
        </div> 
       
        <div className='text-[20px] h-[23vh] md:h-[23vh] nunito-600 hover:overflow-y-scroll transition-all duration-600 p-2  py-2 backdrop-blur-lg  bg-transparent  '>
        {message}
        </div>
      </div>
    </>
  )
}
function TimelineCard(){
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
  
  
    
 
  
  return(
    <>
    <div className='flex flex-row gap-3 mt-1 md:p-5 flex-wrap w-[90vw] h-[70vh] md:h-[80vh] overflow-y-scroll'
    >
        {cards.map(card => (
        <Card key={card.id} id={card.id} date={card.date} message={card.message} deleteCard={deleteCard} />
    ))}
    </div>
    </>
        
    )
  }
  
  export default TimelineCard

    

