import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

function Cards() {
  const productData = useSelector((state) => state.eless.productData)
  const userInfo = useSelector((state) => state.eless.userInfo)
  const [payNow, setPayNow] = useState(false)

  const [totalAmt, setTotalAmt] = useState('')

  const handleCheckout = () => {
    if(userInfo){
      setPayNow(true)
    }else{
      toast.error('Pleas sign in to Checkout')
    }
  }

  useEffect(()=>{
    let price = 0
    productData.map((item) =>{
      price += item.price * item.quantity
      return price
    })
    setTotalAmt(price);
  },[productData])

  return (
    <div>
      <img
        className='w-full h-60 object-cover'
        src='https://rostec.ru/upload/iblock/21c/21ce801f245044336a741e0084b4387d.jpg'
        alt='bagImg'
      />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>$ {totalAmt}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping {' '}
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            </p>
          </div>
          <p className="flex justify-between font-titleFont font-semibold mt-6">
            {' '}
            Total <span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">procced to checkout</button> 
          {
            payNow && <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51Pah9hDb6EixqP8thsclofPijWYFyI8NB3yW5X6CUaPZj6RaIqGkpF0JjBT96zPqvYeCsyoe92nJwOa9NLJSYVDB000dSNzhLR"
                name="Eless online shopping"
                amount={totalAmt * 100}
                label="Pay to eless"
                description={`Your Payment amount is $${totalAmt}`}
                // token={payment}
                email={userInfo.email}
              />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;
