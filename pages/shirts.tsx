import Link from 'next/link'
import React from 'react'
import Product from '../table/product'
import mongoose from 'mongoose'

const shirts = (props: any) => {
  console.log(props.product)
  var color = props.product.color;
  console.log(color);
  return (
    <div>
      <section className="text-gray-600 body-font">

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {Object.keys(props.product).map((item: any) => {
              return <><Link className='m-5' passHref={true} key={props.product[item]._id} href={`/products/${props.product[item].slug}`}>
                <div className=" p-8 w-full cursor-pointer shadow-xl">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="m-auto w-[30vh] h-[30vh] md:w-[30vh] md:h-[40vh] block" src={props.product[item].img} />
                  </a>
                  <div className="mt-2">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{props.product[item].title}</h2>
                    <p className="mt-1">RS - {props.product[item].price}</p>
                    <div className='mt-1'>
                      {props.product[item].size.includes('S') && <span className=' border border-gray-300 px-1'>S</span>}
                      {props.product[item].size.includes('M') && <span className='mx-1 border border-gray-300 px-1'>M</span>}
                      {props.product[item].size.includes('L') && <span className='mx-1 border border-gray-300 px-1'>L</span>}
                      {props.product[item].size.includes('XL') && <span className='mx-1 border border-gray-300 px-1'>XL</span>}
                      {props.product[item].size.includes('XXL') && <span className='mx-1 border border-gray-300 px-1'>XXL</span>}
                    </div>
                    <div className='mt-1'>
                    {props.product[item].color.includes('Red') && <button className="border-2 border-gray-300 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {props.product[item].color.includes('Black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                    {props.product[item].color.includes('Yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {props.product[item].color.includes('Orange') && <button className="border-2 border-gray-300 ml-1 bg-orange-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {props.product[item].color.includes('Purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {props.product[item].color.includes('White') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                    {props.product[item].color.includes('Blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                    </div>
                  </div></div></Link></>
            })}

          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI)
  }
  var product = await Product.find({ category: 'T_Shirt' })
  var tshirts: any = {};
  var item: any;
  for (item of product) {
    if (item.title in tshirts) {
      if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
        tshirts[item.title].color.push(item.color)
      }
      if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
        tshirts[item.title].size.push(item.size)
      }
    }
    else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }

  return { props: { product: JSON.parse(JSON.stringify(tshirts)) } }
}

export default shirts