/** @format */

import orderSchema from '../models/Order.js'

import pizzaShema from '../models/Pizza.js'
import burgerShema from '../models/Burger.js'
import chickenShema from '../models/Chicken.js'

class OrderController {
  async createOrder(req, res) {
    try {
      const order = await orderSchema.create(req.body)
      res.status(200).json(order)
    } catch (error) {
      console.log(error)
      res.status(500).json('Не заповнені всі поля')
    }
  }

  async getPizza(req, res) {
    try {
      const pizza = await pizzaShema.find()
      return res.status(200).json(pizza)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getBurger(req, res) {
    try {
      const pizza = await burgerShema.find()
      return res.status(200).json(pizza)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getChicken(req, res) {
    try {
      const pizza = await chickenShema.find()
      return res.status(200).json(pizza)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getMyOrders(req, res) {
    const { email, phone } = req.body

    try {
      const order = await orderSchema.find({ email: email, password: phone })
      return res.status(200).json(order)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getPizzaAll(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new OrderController()
