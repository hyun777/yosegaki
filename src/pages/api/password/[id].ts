import mongoose from 'mongoose';
import { Post } from '../../../models/Post';
import type { NextApiRequest, NextApiResponse } from 'next';

// mongoose connect
mongoose.connect(process.env.MONGO_URI!);

// CRUD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      const result = await Post.findOne({ _id: id });

      if (result === null) return res.json({ success: false });

      res.json({
        success: true,
        payload: result,
      });
      break;

    default:
      break;
  }
}
