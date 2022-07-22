/** @format */

import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    adres: { type: String, required: false },
    totalSum: { type: Number, required: false },
    order: { type: Object, required: true },
  },
  {
    timestamps: true,
  }
)

export const burgerShema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
})

export const chickenShema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
})

export default mongoose.model('order', orderSchema)
