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
  const { body } = req;

  switch (req.method) {
    case 'GET':
      try {
        const result = await Post.findOne({ _id: id, status: 'A' });

        if (result === null)
          return res.json({
            success: false,
          });

        res.json({
          success: true,
          result,
        });
      } catch (error) {
        res.json({
          success: false,
        });
      }

      break;

    case 'PATCH':
      try {
        const result2 = await Post.findOneAndUpdate(
          { _id: id, status: 'A' },
          { $push: { comments: body } },
          { new: true }
        );

        if (result2 === null)
          return res.json({
            success: false,
          });

        res.json({
          success: true,
          data: result2,
        });
      } catch (error) {
        res.json({
          success: false,
        });
      }
      break;

    case 'DELETE':
      try {
        const result3 = await Post.findByIdAndUpdate(
          { _id: id, status: 'A' },
          {
            $pull: {
              comments: { _id: body.commentId },
            },
          },
          { safe: true, upsert: true }
        );

        if (result3 === null)
          return res.json({
            success: false,
          });

        res.json({
          success: true,
        });
      } catch (err) {
        res.json({
          success: false,
        });
      }

      break;

    default:
      break;
  }
}
