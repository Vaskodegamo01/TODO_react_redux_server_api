const express = require("express");
const multer = require("multer");
const auth = require("../middleware/middleware");

const Task = require("../models/Task");

const upload = multer();


const router = express.Router();

// router.get("/", auth, (req, res) => {
//     Task.find({userId: req.user._id})
//         .then( results => res.send(results))
//         .catch(e => res.send(e).status(500))
// });

router.get("/", (req, res) => {
    Task.find()
        .then( results => res.send(results))
        .catch(e => res.send(e).status(500))
});

// router.post("/", auth, upload.none(), (req, res) => {
//     const taskData = req.body;
//     const task = new Task(taskData);
//     task.userId = req.user._id;
//
//     task.save()
//         .then(() => res.send(taskData))
//         .catch((e) => res.send(e).status(500))
// });

router.post("/", upload.none(), (req, res) => {
    const taskData = req.body;
    const task = new Task(taskData);
    task.userId = "5c9532ce4382b9373b166e0e";

    task.save()
        .then(() => res.send(taskData))
        .catch((e) => res.send(e).status(500))
});

router.post("/:id", auth, upload.none(),(req, res) => {
    Task.updateOne({_id:req.params.id, userId: req.user._id}, req.body)
        .then(result => res.send(result))
        .catch((e)=>res.send(e).status(500))
});

// router.delete('/:id', auth, (req, res)=>{
//     Task.deleteOne({_id: req.params.id, userId: req.user._id})
//         .then(result => res.send(result))
//         .catch((e)=>res.send(e).status(500))
// });

router.delete('/:id',  (req, res)=>{
    Task.deleteOne({_id: req.params.id, userId: "5c9532ce4382b9373b166e0e"})
        .then(result => res.send(result))
        .catch((e)=>res.send(e).status(500))
});

module.exports = router;