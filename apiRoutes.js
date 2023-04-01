// sets up route handler and sets up the router
const router=require("express").router();
const fs = require("fs")
letdbNote = require("./db/db.json");

//base url for this file ais local host 3001/api
router.get("/notes", (req,res) => {
    res.json(dbStore)
})

// route for posting new note
router.post("/notes", (req, res) => {
    let newNote = {
        title: req.body.title,
        text:  req.body.text,
    }
dbNote.push(newNote);
fs.writeFileSync("./db/db.json", JSON.stringify(dbNote));
res.json(dbNote);
});

// route for deleteing notes
router.delete("/notes/:id", (req, res) => {
    const noteId = req.params.id;
    const noteIndex = dbNote.findIndex(note => note.id === noteId);
    if (noteIndex !== -1) {
      dbNote.splice(noteIndex, 1);
      fs.writeFileSync("./db/db.json", JSON.stringify(dbNote));
      res.json({ success: true, message: "Note deleted successfully." });
    } else {
      res.status(404).json({ success: false, message: "Note not found." });
    }
  });
  
  module.exports = router;