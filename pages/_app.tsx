import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import {useState,useEffect} from 'react'


export default function App({ Component, pageProps }: AppProps) {

  const [cart, setcart] = useState<any>({})
  const [total, settotal] = useState<number>()
  useEffect(() => {
   try {
    if (localStorage.getItem("cart")) {
      setcart(JSON.parse(localStorage.getItem("cart")))
      savetoCart(JSON.parse(localStorage.getItem("cart")))
    }
   } catch (error) {
    console.error(error);
    localStorage.clear();
   }
  }, [])
  
  
  const addtoCart = (Id:number,quantity:number,name:string,size:string,color:string,price:number) =>{
    const myCart = cart;
    if(Id in cart){
      myCart[Id].quantity = myCart[Id].quantity + quantity;
    }
    else{
      myCart[Id] = {quantity:1,name,size,color,price}
    }
    setcart(myCart)
    savetoCart(myCart)
  }
  const removetoCart = (Id:number,quantity:number,name:string,size:string,color:string,price:number) =>{
    const myCart = cart;
    if(Id in cart){
      myCart[Id].quantity = myCart[Id].quantity - quantity;
    }
    if(myCart[Id].quantity <= 0){
      delete myCart[Id];
    }
    
    setcart(myCart)
    savetoCart(myCart)
  }
  
  const savetoCart = (myCart:object)=>{
    localStorage.setItem('cart',JSON.stringify(myCart));
    var subtotal = 0;
    var keys = Object.keys(myCart);
    for (let index = 0; index < keys.length; index++) {
      subtotal += myCart[keys[index]].price * myCart[keys[index]].quantity;
      
    }
    settotal(subtotal);
  }

  const clearCart = ()=>{
    setcart({});
    savetoCart({});
  }


  return<>
  <Navbar total={total} cart = {cart} addtoCart = {addtoCart} removetoCart = {removetoCart} savetoCart = {savetoCart} clearCart = {clearCart}/>
  <Component total={total} cart = {cart} addtoCart = {addtoCart} removetoCart = {removetoCart} savetoCart = {savetoCart} clearCart = {clearCart} {...pageProps} />
  <Footer/>
  </>
}
