import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from 'next'

const connectDB = handler => async (req:NextApiRequest ,res:NextApiResponse) => {
  if(mongoose.connections[0].readyState){
    return handler(req, res);
  }

  await mongoose.connect(process.env.MONGODB_URI)
  return handler(req, res);
}

export default connectDB; 