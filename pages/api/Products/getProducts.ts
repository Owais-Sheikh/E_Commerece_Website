// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../table/product'
import ConnectDB from '../../../middlelayer/mongoos'

type Data = {
  name: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    var product = await Product.find() 
    var tshirts:any = {};
    var item:any;
    for(item of product){
      if(item.title in tshirts){
          if(!tshirts[item.title].color.includes(item.color) && item.availableQty > 0){
              tshirts[item.title].color.push(item.color)
          }
          if(!tshirts[item.title].size.includes(item.size) && item.availableQty > 0){
            tshirts[item.title].size.push(item.size)
        }
      }
      else{
        tshirts[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
            tshirts[item.title].color = [item.color];
            tshirts[item.title].size = [item.size]; 
        }
      }
    }
    res.status(200).json({ tshirts  })
}
export default ConnectDB(handler);
