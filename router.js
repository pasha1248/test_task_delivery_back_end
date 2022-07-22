/** @format */

import Router from 'express'

import OrderController from './Controllers/OrderController.js'
const router = new Router()

router.post('/order', OrderController.createOrder)
router.post('/order/my', OrderController.getMyOrders)
router.get('/order', OrderController.getPizzaAll)

router.get('/pizza', OrderController.getPizza)
router.get('/burger', OrderController.getBurger)
router.get('/chicken', OrderController.getChicken)

export default router
