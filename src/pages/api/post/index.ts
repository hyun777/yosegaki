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
  const { body } = req;

  switch (req.method) {
    case 'GET':
      res.json({ message: 'get' });
      break;
    case 'POST':
      const post = new Post(body);

      const result = await post.save();

      res.json({
        success: true,
        data: result,
      });

      break;

    default:
      break;
  }
}
