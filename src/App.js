import React from 'react';
import { useState } from 'react';
import './App.css';

const App =()=> {
  
  const [search, setSearch]=useState('');
  const [matn]=useState([
  {id: 1, name:'Apple'},
  {id: 2, name:'Banana'},
  {id: 3, name:'Apricot'},
  {id: 4, name:'Papaya'},
  {id: 5, name:'Peach'},
  {id: 6, name:'Rose'},
  {id: 7, name:'Water'},
  {id: 8, name:'Pomegranate'},
  {id: 9, name:'Olma'},
  {id: 10, name:'Pineapple'},
  {id: 11, name:'Rambutan'},
  {id: 12, name:'Raspberries'},
  {id: 13, name:'Uzum'},
  {id: 14, name:'Anor'},
  {id: 15, name:'Anjir'},
  {id: 16, name:'Xurmo'},])
 const ChangesetSearch=(e)=>{setSearch(e.target.value)};
  
  return (
    <div className='Main'>
      <div className='Header'>
        <h1 > Search: </h1> 
        <input 
        type='text' 
        placeholder="What is your need"
        value={search}
        onChange={ChangesetSearch}
        />
        </div>
        <div className='grid-Container'>
            {matn.filter((item) => {
              return search.toLowerCase()===''? item : item.name.toLowerCase().includes(search.toLowerCase())})
            .map((item)=>(
              <h1 className='grid-item' key={item.id}>  {item.name}  </h1>
            ))
            
            }
        
        
      </div>
              
    </div>
   
  );
}

export default App;
