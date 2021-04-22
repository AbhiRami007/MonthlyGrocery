import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const GrocerySchema=new Schema({
    groceryItem:{type:String,required:true},
    isPurchased:{type:Boolean,default:false}
})