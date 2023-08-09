import express from "express"
import { createView,getViews,updateView,deleteView } from "../controllers/view"
// ,updateView,deleteView
export const viewRouter=express.Router()

viewRouter
.post('/',createView)
.get('/',getViews)
.patch('/:id',updateView)
.delete('/:id',deleteView)