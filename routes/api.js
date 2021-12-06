const router = require("express").Router();
const fs = require("fs");
const notesArray = require("../db.json");
const { v4: uuidv4 } = require('uuid');

router.get("/api/notes", (req, res) => {
    
    try {
        res.json(notesArray)   
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/api/notes", (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        ID: uuidv4()
    }
    const newNotesArray = notesArray.concat(newNote)
    console.log(newNotesArray)
    fs.writeFileSync("../db.json", JSON.stringify(newNotesArray));
    try {
        res.json({message:"success"})
    } catch (error) {
        res.json(error)
    }
    // notesArray.push(newNote).then(newArray => fs.writeFileSync("../db.json", newArray))
})

module.exports = router;