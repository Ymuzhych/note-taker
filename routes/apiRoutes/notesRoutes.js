const router = require('express').Router();

const { createNewNote, deleteNote } = require('../../lib/notes');
let { notesArray } = require('../../db/db');

// notes are available at api/notes in JSON 
router.get('/notes', (req, res) => {
  let results = notesArray;
  res.json(results);
});
//Post route
router.post('/notes', (req, res) => {

  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});

// Delete
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = router;