import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef ,useState} from 'react';
import { AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import {MdAccountCircle} from 'react-icons/md';

const Navbar = (props:any) => {

  const sideRef:any = useRef();

  const sidebar = ()=>{
    if (sideRef.current.classList.contains('translate-x-full')) {
      sideRef.current.classList.remove('translate-x-full')
      sideRef.current.classList.add('translate-x-0')
    }
    else if (!sideRef.current.classList.contains('translate-x-full')) {
      sideRef.current.classList.remove('translate-x-0')
      sideRef.current.classList.add('translate-x-full')
  }

  
  }
  return (
    <>
        <div className='flex flex-col items-center h-16 md:h-12 md:flex-row md:items-center shadow-md sticky top-0 z-10 bg-white '>
            <div className='flex flex-row ml-6 mb-2 md:mb-0'>
                <Image src='/favicon.ico' alt='Hello' width={22} height={4} className='mr-3' />
                <Link href={'/'}><p className='font-bold text-base'>Sheikh Clothes</p></Link>
            </div>
            <div className='flex flex-row justify-center md:ml-16 lg:ml-80 list-none mb-2 md:mb-0'>
            <Link href={'/'}><li className='text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4'>Home</li></Link>
            <Link href={'/shirts'}><li className='text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4'>Shirts</li></Link>
            <Link href={'/hoodies'}><li className='text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4'>Hoodies</li></Link>
            <Link href={'/pants'}><li className='text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4'>Pants</li></Link>
            <Link href={'/about'}><li className='text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4'>About</li></Link>
           <Link href={'/contact'}> <li className='text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4'>Contact</li></Link>
            </div>
            <div className = 'flex'>
            <Link href={'\login'}><span className='absolute top-2 right-20 text-xl md:text-3xl cursor-pointer'><MdAccountCircle/></span></Link>
            <span onClick={sidebar} className='absolute top-2 right-7 text-xl md:text-3xl cursor-pointer'><AiOutlineShoppingCart/></span>
            </div>
            <div ref={sideRef} className='sideBar absolute z-10 top-0 w-72 right-0 h-[100vh] px-8 bg-indigo-100 transform transition-transform translate-x-full'>
              <h2 className='text-center mt-10 font-bold'>Shopping Cart</h2>
              <span onClick={sidebar} className='absolute top-4 right-4 cursor-pointer text-xl text-indigo-800'><AiFillCloseCircle/></span>
            <ol className='list-decimal my-5'>
             {Object.keys(props.cart).length == 0 && <div>No item in the cart</div> }   
              {Object.keys(props.cart).map((owais)=>{ return <li key={owais} className='mb-2'>
                  <div className='flex items-center'>
                  <div className='w-44'>{props.cart[owais].name} {`(${props.cart[owais].size}`} {`/ ${props.cart[owais].color})`}</div>
                  <div className='flex justify-center items-center ml-8'>
                  <span onClick={()=>{props.removetoCart(owais,1,props.cart[owais].name,props.cart[owais].size,props.cart[owais].color,props.cart[owais].price)}} className='m-2 text-indigo-800 cursor-pointer'><AiFillMinusCircle/></span>
                  <div>{props.cart[owais].quantity}</div>
                  <span onClick={()=>{props.addtoCart(owais,1,props.cart[owais].name,props.cart[owais].size,props.cart[owais].color,props.cart[owais].price)}} className='m-2 text-indigo-800 cursor-pointer'><AiFillPlusCircle/></span></div>

                  </div>
                </li>})}
              </ol>
              <div className='font-semibold'>Subtotal = Rs. {props.total}</div>
              <div className='flex'>
              <Link href={'/checkout'}><button className="flex mx-auto mt-7 text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md">CheckOut</button></Link>
              <button onClick={props.clearCart} className="flex mx-auto mt-7 text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md">Clear Cart</button>
</div>
            </div>

            
            
        </div>
    </>
  )
}

export default Navbar