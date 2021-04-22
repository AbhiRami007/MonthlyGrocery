import mongoose from 'mongoose';
import{GrocerySchema} from '../models/groceryModel';

//create a grocery item from schema
const Grocery=mongoose.model('Grocery',GrocerySchema);

export const addNewItem=(req,res)=>
{
    let newItem=new Grocery(req.body);
    newItem.save((err,Grocery)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json(Grocery);
    });
};
export const getItem=(req,res)=>
{
    Grocery.find({},(err,Grocery)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json(Grocery);
    });
};
export const updateItem=(req,res)=>
{
    Grocery.findOneAndUpdate({_id:req.params.GroceryId},req.body,{new:true},(err,Grocery)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json(Grocery);
    });
};

export const deleteItem=(req,res)=>
{
    Grocery.remove({_id:req.params.GroceryId},(err,Grocery)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json({message:"Deletion Successful"});
    });
};