import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PostSchema } from '../models/Post.js';
import { LikeSchema } from '../models/Likes.js';
import { CommentSchema } from '../models/Comments.js';
import { MessageSchema } from '../models/Message.js';
import { MessageRecipientSchema } from '../models/MessageRecipient.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  
  Posts = mongoose.model('Post', PostSchema)
  
  Likes = mongoose.model('Like', LikeSchema)
  
  Comments = mongoose.model('Comment', CommentSchema)
  
  Messages = mongoose.model('Message', MessageSchema)
  
  Recipients = mongoose.model('Recipient', MessageRecipientSchema)
}

export const dbContext = new DbContext()
