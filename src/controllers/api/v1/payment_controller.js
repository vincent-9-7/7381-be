/* eslint-disable max-len */

const stripe = require("stripe")(process.env.REACT_APP_STEIPE_KEY);

const calculateOrderAmount = (items,price) => {
  let totalprice = price * 100; 
  return totalprice;
};


exports.paynow = async (ctx) => {
  const { items,price } = ctx.request.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items,price),
    currency: "aud"
  });
  ctx.body = {
    clientSecret: paymentIntent.client_secret
  };
};
