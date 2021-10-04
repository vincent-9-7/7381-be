/* eslint-disable max-len */

const stripe = require("stripe")("sk_test_51JaCcrC7rcFCd2f0fkptU2A0FPOePJoU7tqdyO78P6IJ2WJawd4V362nMaL7UMGJ99jcyK67KhQyvfC2Rr8LQ8V700nls9bzGF");

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
