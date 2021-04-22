import React from 'react';
import './App.css';
import axios from 'axios';
import GroceryList from './Grocery/GroceryList';

let mmno=new Date().getUTCMonth();
let mmstring=["january","February","March","April","May","June","July","August","September","October","November","December"];
let mm=mmstring[mmno];

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      groceries:[],
      currentItem:{}
     }
     this.updateCurrentItem=this.updateCurrentItem.bind(this);
     this.purchasedItem=this.purchasedItem.bind(this);
     
}

componentDidMount()
{
  console.log("did mount");
  const url='http://localhost:4000/grocery';
  axios.get(url).then((Response)=>
  {
    this.setState({
      groceries:Response.data
    })
  })
  .catch((error)=>{
    console.log(error);

  });
};

componentDidUpdate()
{
  console.log("did mount");
  const url='http://localhost:4000/grocery';
  axios.get(url).then((Response)=>
  {
    this.setState({
      groceries:Response.data
    })
  })
  .catch((error)=>{
    console.log(error);

  });
};

updateCurrentItem(item)
{
  this.setState({
    currentItem:item,
  })
}
addItem(event)
        {
            if(event.which===13)
            {
            console.log("Enter clicked");
            console.log("Add item");
            event.preventDefault();
            axios.post('http://localhost:4000/grocery',{
                groceryItem: event.target.value,

        })
        event.target.value="";
    }
    }
purchasedItem(e)
{ 
  console.log(e);
  const url=`http://localhost:4000/grocery/${e._id}`;
  axios.put(url,{
    isPurchased:!e.isPurchased
    });
    
  
  console.log(e.groceryItem,e.isPurchased)
}
deleteItem(e)
{ 
  console.log("deleted",e._id)
  axios.delete(`http://localhost:4000/grocery/${e._id}`)
}

  render(){
  return (
    <div className="App">
      <GroceryList groceries={this.state.groceries}
      updateCurrentItem={this.updateCurrentItem} addItem={this.addItem} purchasedItem={this.purchasedItem}
      deleteItem={this.deleteItem} month={mm}/>
    </div>
  );
  }
}

export default App;
