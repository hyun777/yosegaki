import mongoose from 'mongoose';

// 스키마구조 만들기
const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const postSchema = new mongoose.Schema(
  {
    addressee: {
      type: String,
      maxlength: 50,
    },
    addresseeEmail: {
      type: String,
      maxlength: 50,
    },
    password: {
      type: String,
      maxlength: 4,
    },
    status: {
      type: String,
      default: 'A',
    },
    comments: [
      {
        name: {
          type: String,
          maxlength: 50,
        },
        message: {
          type: String,
          maxlength: 500,
          status: {
            type: String,
            default: 'A',
          },
        },
        date: {
          type: Date,
          default: new Date().toLocaleString(),
        },
      },
    ],
  },
  schemaOptions
);

// 최종적으로 모델(생성자함수) 완성
export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
