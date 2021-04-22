import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/groceryRoutes';
import cors from 'cors';

const app=express();
const PORT=4000;

//Mongoose Connection
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/groceryDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//body parser setup
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// CORS setup
app.use(cors());

routes(app);
app.get('/',(req,res)=>
    res.send(`Monthly Grocery Planner app is running in port ${PORT}`)
);
app.listen(PORT,()=>
console.log(`Grocery app running on port ${PORT}`)
);