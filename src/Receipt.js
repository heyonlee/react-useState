import { useState } from "react";

function Receipt (props){
    let person = props.data.person
    let topping = props.data.order.toppings.map(x => x).join(", ")     
    
  

    return (
        
        <div className="container">
            <div >
            <p className="name">{props.data.person}</p>
            </div>
            <div>
                <ul>
                    <li><span>Main :</span> {props.data.order.main}</li>
                    <li><span>Protein: </span> {props.data.order.protein}</li>
                    <li><span>Rice:</span> {props.data.order.rice} </li>
                    <li><span>Sauce:</span> {props.data.order.sauce}</li>
                    <li><span>Toppings:</span> {topping}</li>
                    <li><span>Drink:</span> {props.data.order.drink}</li>
                    <li><span>Cost:</span> {props.data.order.cost}</li>

                </ul>
            </div>

        </div>

    )
}

export default Receipt;