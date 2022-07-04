import './App.css';
import React, {useState} from 'react';
import Records from "./Records" 
import Main from './Main';
import {receipt1,receipt2,receipt3} from"./Records"
import Receipt from './Receipt';


function App(props) {
  const receipts = [receipt1,receipt2,receipt3]

 // const [receipts, setReceipts] = useState(receipts);
    
  return (
    
  <div className="App">
    <div>
      <h1>Korilla</h1>
    </div>
    <div className='wrapper'>
   {receipts.map((key,index)=>

      <div className={key.person}>

        <Receipt data={key}/>
    </div>
      
         )}
    </div>
    
  </div>

)}

export default App;


import "./App.css";
import React, { useState } from "react";
import Records from "./Records";
import receiptList from "./Records";
import Receipt from "./Receipt";

function App(props) {
  const [receipts, setReceipts] = useState(receiptList);
//아이디를 넣으면 그아이디와 각 아이디를 비교하고 그 후에 paid 만 수정, 아니면 그냥 통과. 
//if 조건 없으면 다 true가 되기때문에 비교함. id 와 receipt.id관계설명하기

  const payReceipts = (id) => {
    setReceipts(
      receipts.map((receipt) => {
        if (receipt.id === id) {
          return {
            ...receipt,
            paid: true,
          };
        }
        return receipt;
      })
    );
  };
 // 보이는 설정  할 때 지불안 한 것만 보이게 조건 넣기.. (if(!key.paid))
  return (
    <div className="App">
      <div>
        <h1>Korilla</h1>
      </div>
      <div className="wrapper">
        {receipts.map((key, index) => {
          if (!key.paid) {
            return (
              <div className={key.person} onClick={()=>payReceipts(key.id)}>
                <Receipt data={key} className={index} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;

