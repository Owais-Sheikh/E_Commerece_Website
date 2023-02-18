import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../middlelayer/mongoos'
import login from '../../../table/user';


type Data = {
  name: string
}

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
    if(req.method == 'POST'){
        
            var user = new login(req.body)
            await user.save();   
        
        res.status(200).json({success : "success"});
    }
    else{
        res.status(400).json({error : "Error"});
    }
    
}

export default connectDB(handler);
