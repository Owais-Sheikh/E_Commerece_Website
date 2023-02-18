import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../table/product'
import ConnectDB from '../../../middlelayer/mongoos'

type Data = {
  name: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method == 'POST'){
        for (let i = 0; i < req.body.length; i++) {       
            var p = new Product({
                title : req.body[i].title,
                slug : req.body[i].slug,
                desc :req.body[i].desc,
                img : req.body[i].img,
                category : req.body[i].category,
                size :  req.body[i].size, 
                color :  req.body[i].color, 
                price : req.body[i].price,
                availableQty : req.body[i].availableQty,
            })
            await p.save(); 
        }
        res.status(200).json({success : "success"});

    }
    else{
        res.status(400).json({error : "Error"});

    }
}
export default ConnectDB(handler);
