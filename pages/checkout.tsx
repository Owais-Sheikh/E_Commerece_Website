
import React from 'react';
import { AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';



const checkout = (props:any) => {  

return <div className='flex flex-col md:flex-row lg:flex-row'>
<section className="text-gray-600 body-font relative w-50%">
  <div className="container px-5 py-24 m-2 md:mx-auto lg:mx-auto">
    <div className="flex flex-col text-center mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Shipping Detail</h1>
    </div>
    <div className="lg:w-3/4 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="message" name="message" cols={30} rows={2} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone No</label>
            <input type={'tel'} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
</section>
<div className='bg-slate-100'>
  
<div className='container mx-auto mt-20 px-8'>
<div className="flex flex-col text-center mb-12 w-96">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Order Detail</h1>
    </div>
            <ol className='list-decimal my-5'>
             {Object.keys(props.cart).length == 0 && <div>No item in the cart</div> }   
              {Object.keys(props.cart).map((owais)=>{ return <li key={owais} className=' mb-2'>
                  <div className='flex items-center justify-between'>
                  <div >{props.cart[owais].name}{` (${props.cart[owais].size} / ${props.cart[owais].color})`}</div>
                  <div className='flex items-center ml-6'>
                  <span onClick={()=>{props.removetoCart(owais,1,props.cart[owais].name,props.cart[owais].size,props.cart[owais].color,props.cart[owais].price)}} className='m-2 text-indigo-800 cursor-pointer'><AiFillMinusCircle/></span>
                  <div>{props.cart[owais].quantity}</div>
                  <span onClick={()=>{props.addtoCart(owais,1,props.cart[owais].name,props.cart[owais].size,props.cart[owais].color,props.cart[owais].price)}} className='m-2 text-indigo-800 cursor-pointer'><AiFillPlusCircle/></span></div>

                  </div>
                </li>})}
              </ol>
              <div className='font-semibold'>Subtotal = Rs. {props.total}</div>
            </div>
<div className="mt-7 p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-10">Pay</button>
        </div>
</div>
</div>
}
export default checkout