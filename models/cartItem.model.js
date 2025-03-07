import mongoose from "mongoose"
import logger from "../config/logger.js"

const cartItemSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  userId: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1
  },
  isVisible: {
    type: Boolean,
    default: true
  },
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 10 * 60 * 1000)
  }
});

cartItemSchema.index({ userId: 1, book: 1 }, { unique: true });

const CartItem = mongoose.model("CartItem", cartItemSchema);

export default {
  findById: async (bookId, userId) => {
    try {
      return await CartItem.findOne({
        book: bookId,
        userId: userId,
        isVisible: true
      }).populate('book');
    } catch (err) {
      logger.error(err);
      return null;
    }
  },

  getCart: async (userId) => {
    try {
      const cartUser = await CartItem.find({ userId, isVisible: true }).populate("book", 'title cover price discount')

      return cartUser
    } catch (err) {
      logger.error(err);

    }
  },
  findIncrement: async (bookId, userId) => {
    try {
      const updateCartItem = await CartItem.findOneAndUpdate(
        { book: bookId, userId },
        {
          $inc: { quantity: 1 },
          $set: { isVisible: true },
          $setOnInsert: { expiresAt: new Date(Date.now() + 10 * 60 * 1000) }
        },
        { upsert: true, new: true }
      );
      return updateCartItem;
    } catch (err) {
      logger.error(err);
    }
  },
  findDecrement: async (bookId, userId) => {
    try {
      const cartItem = await CartItem.findOne({
        book: bookId,
        userId: userId,
        isVisible: true
      });

      console.log(cartItem)

      if (!cartItem) {
        return null;
      }

      if (cartItem.quantity <= 1) {
        cartItem.isVisible = false;
        await cartItem.save();
        return cartItem;
      }

      cartItem.quantity -= 1;
      await cartItem.save();
      return cartItem;
    } catch (err) {
      logger.error(err);
      return null;
    }
  },

  softDelete: async (bookId, userId) => {
    try {
      return await CartItem.updateMany(
        { book: bookId, userId },
        { $set: { isVisible: false } }
      );
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
};
