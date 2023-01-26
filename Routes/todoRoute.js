const express = require("express")

const router = express.Router()
const Todo = require("../Models/todo")

router.get('/', async(req, res) => {
    try{
        const activeTodo = await Todo.find({completed: false})
        res.json(activeTodo)
    }catch(err){
        res.send("Error", err)
    }
})


router.get('/all', async(req, res) => {
    try{
        const activeTodo = await Todo.find({})
        res.json(activeTodo)
    }catch(err){
        res.send("Error", err)
    }
})


router.get('/:id', async(req, res) => {
    try{
        const currTodo = await Todo.findById(req.params.id)
        res.json(currTodo)
    }catch(err){
        res.send("Error", err)
    }
})


router.post('/', async(req, res) => {
    try{
        const newTodo = new Todo({
            name: req.body.name,
            desc: req.body.desc,
            completed: req.body.completed
        })

        const msg = await newTodo.save()
        res.json(msg)
        
    }catch(err){
        res.send("ERROR", err)
    }
})


router.patch('/:id', async(req, res) => {
    try{
        const curr = await Todo.findById(req.params.id)

        if(req.body.name){
            curr.name = req.body.name
        }
        if(req.body.desc){
            curr.desc = req.body.desc
        }
        if(req.body.completed!=null){
            curr.completed = req.body.completed
        }

        const msg = await curr.save()
        res.json(msg)

    }catch(err){
        res.send("ERROR", err);
    }
})


router.delete("/:id", async(req, res) => {
    try{
        const currTodo = await Todo.findById(req.params.id)
        if(currTodo!=null){
            const msg = await currTodo.remove()
            res.json(msg)
        }
    }catch(err){
        res.send(err)
    }
})



module.exports = router