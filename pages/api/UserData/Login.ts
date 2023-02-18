import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../middlelayer/mongoos'
import login from '../../../table/user'

type Data = {
  name: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'POST') {
    console.log(req.body);
    var user = await login.findOne({ "Email": req.body.Email });
    if (user) {
      if (req.body.Email == user.Email && req.body.password == user.password) {

        res.status(200).json({ success: true, email: user.Email, name: user.name })
      }
      else {
        res.status(200).json({ success: false, error: "Invalid input" })
      }
    }
    else {
      res.status(200).json({ success: false, error: "No user found" })
    }
  }
  else{
    res.status(200).json({ error: "Invalid Method" })
  }
}

export default connectDB(handler)