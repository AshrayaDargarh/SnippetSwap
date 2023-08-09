import express from "express"
import { createView,getViews,getView,updateView,deleteView } from "../controllers/view"
// ,updateView,deleteView
export const viewRouter=express.Router()

viewRouter
.post('/',createView)
.get('/',getViews)
.get('/:id',getView)
.patch('/:id',updateView)
.delete('/:id',deleteView)