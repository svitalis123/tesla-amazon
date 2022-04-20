const functions = require("firebase-functions");
const express=require('express')
const cors=require("cors")
const stripe=require("stripe")("sk_test_51IMNwALPboT5Svvf7KnjMN2KDJnjdUKGTsW9xHphxbQqpckngvqT9rYnw9GWPSH8jfvdHvMzQVnbDppADAovzGG000IzSG5iUN")

const app=express();

app.use(express.json());
app.use(cors({origin:true}));

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/payments/create',async (req,res)=>{
    const total= req.query.total;
    console.log(total);
    const paymentIntent=await stripe.paymentIntents.create({
            amount:total,
            currency:"usd"
    })
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
    
})
exports.api=functions.https.onRequest(app);