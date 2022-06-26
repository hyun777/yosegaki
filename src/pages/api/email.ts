import mongoose from 'mongoose';
import { Post } from '../../models/Post';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// mongoose connect
mongoose.connect(process.env.MONGO_URI!);

async function main(receiverName: string, receiverEmail: string, image: any) {
  const buf = Buffer.from(image, 'base64');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.google.com',
    port: 587,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.NODEMAILER_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  const message = {
    from: `寄せ書きゼネレーター <${process.env.NODEMAILER_EMAIL}>`,
    to: receiverEmail,
    attachments: [
      {
        filename: '寄せ書き.png',
        content: buf,
        encoding: 'base64',
      },
    ],
    subject: `${receiverName}様への寄せ書きが届きました。`,
    html: `
      <h1>
        寄せ書きゼネレーター
      </h1>
      <hr />
      <br />
      <p>添付ファイルを確認してください。<p/>
      <hr />
    `,
  };

  try {
    await transporter.sendMail(message);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

// CRUD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;

  switch (req.method) {
    case 'GET':
      break;
    case 'POST':
      try {
        const sendResult = await main(
          body.addressee,
          body.addresseeEmail,
          body.image
        );
        console.log(sendResult);

        if (!sendResult)
          return res.json({
            success: false,
            desc: 'mailFailure',
          });

        await Post.findOneAndUpdate({ _id: body._id }, { status: 'D' });

        res.json({
          success: true,
        });
      } catch (error) {
        console.log(error);
      }

      break;

    default:
      break;
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};
