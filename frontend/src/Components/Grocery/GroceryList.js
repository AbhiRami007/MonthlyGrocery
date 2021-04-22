import React from 'react';

const GroceryList = (props) => {

    return ( 
        
<div className="main">
    <div className="head">
        Monthly Grocery Planning App
    </div>
    <div className="list">
        <p className="plan">Plan for the month of {props.month}</p>
        <input type="text" className="enter" onKeyPress={props.addItem.bind(this)}/>
        <div className="data">
            <div className="items">
                <div className="itemPurchased">{props.groceries.map((item)=>(
                <div className="flexC">
                    <p className="all" key={item._id} onClick={props.updateCurrentItem.bind(this,item)}>
                        <div style={{textDecoration: item.isPurchased? 'line-through': 'none'}}>
                            {item.groceryItem}
                            </div>
                        
                    </p>
                    <div className="buttons">
                    <div className="pButton"><button type="submit"  key={item._id} onClick={props.purchasedItem.bind(this,item)}>
                        Purchased</button></div>
                    <div className="delButton"><button type="submit" key={item._id} onClick={props.deleteItem.bind(this,item)}>X</button></div>
                </div>
                </div>)
                )}</div>
                 </div>
            </div>
    </div>
    
    </div> );
    
}

 
export default GroceryList;