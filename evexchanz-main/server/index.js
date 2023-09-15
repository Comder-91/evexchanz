import  express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import Provider from './routes/provider.js'
import dotenv from 'dotenv'
import Stripe from 'stripe'
import Client from './routes/client.js'

dotenv.config();


const app = express();

const stripe= new Stripe(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors())

app.use('/provider',Provider);
app.use('/client',Client);



app.get('/',(req,res)=>{
  res.send(`Hello to Backend of the API`);
})

// This is your test secret API key.


const storeItems = new Map([
  [1, { priceInCents: 100000, name: "Battery Model 5566" }],
  [2, { priceInCents: 200000, name: "Battery Model 5577" }],
])

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "INR",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_URL}success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
