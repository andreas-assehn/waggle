import mongoose from 'mongoose';
import { Chat } from '../../globalUtils/Types';

const ChatSchema = new mongoose.Schema<Chat>({
  roomId: { type: String, required: true },
  messages: [
    {
      userId: { type: String, required: false },
      message: { type: String, required: false },
      timestamp: { type: String, required: false },
    },
  ],
});

const ChatModel = mongoose.model('Chats', ChatSchema);

export default ChatModel;
