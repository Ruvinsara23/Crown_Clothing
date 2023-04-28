import { CardElement ,useElements,useStripe} from "@stripe/react-stripe-js"
import "./payment-form.style.scss"
import Button from "../button/button-component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/use-selector";
import { selectCartTotal } from "../../store/cart/cart-seletor";
//import { useState } from "react";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
   
    const paymentHandler = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }).then((res) => {
        return res.json();
      });
  
      const clientSecret = response.paymentIntent.client_secret;
  
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : 'Abs',
          },
        },
      });
  
  
      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          alert('Payment Successful!');
        }
      }
    };
  
    return (
        <div className='payment-form-container'>
       <form className='form-container' onSubmit={paymentHandler}>
        <h2> 
        Cretdit Card Payment
        </h2>
       <CardElement />
        <Button buttontype='inve' >Pay Now</Button>
        </form>
       </div>
      
    );
  };


 export default PaymentForm;


  