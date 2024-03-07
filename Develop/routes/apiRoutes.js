const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to read notes data' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

router.post('/notes', (req, res) => {
  const newNote = req.body;
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to read notes data' });
    } else {
      const notes = JSON.parse(data);
      newNote.id = Date.now().toString();
      notes.push(newNote);
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to save the new note' });
        } else {
          res.json(newNote);
        }
      });
    }
  });
});

router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to read notes data' });
    } else {
      let notes = JSON.parse(data);
      notes = notes.filter((note) => note.id !== noteId);
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to delete the note' });
        } else {
          res.sendStatus(204);
        }
      });
    }
  });
});

module.exports = router;