import { CardElement ,useElements,useStripe} from "@stripe/react-stripe-js"
import "./payment-form.style.scss"
import Button from "../button/button-component";





 const PaymentForm =()=>{
    const stripe=useStripe();
    const elements=useElements();
    
    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
          return;
        }
        //netlify\functions\create-payment-intent
        const response = await fetch('/.netlify/functions/create-payment-intent', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 1000}),
        }).then(res =>res.json());
        console.log(response)
        };

    return(
       <div className='payment-form-container'>
       <form className='form-container' onSubmit={paymentHandler}>
        <h2> 
        Cretdit Card Payment
        </h2>
       <CardElement />
        <Button buttontype='inve' >Pay Now</Button>
        </form>
       </div>
    ) 

    }

export default PaymentForm;
