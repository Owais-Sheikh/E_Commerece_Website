import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../table/product'
import ConnectDB from '../../../middlelayer/mongoos'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method == 'POST'){
        for (let i = 0; i < req.body.length; i++) {       
            var p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
        }
        res.status(200).json({success : "success"});

    }
    else{
        res.status(400).json({error : "Error"});

    }
}
export default ConnectDB(handler);
