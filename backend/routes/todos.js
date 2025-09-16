const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Todo = require('../models/Todo');

router.post('/', auth, async (req, res) => {
  const { text } = req.body;
  try {
    const todo = new Todo({ user: req.user.id, text });
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/:id', auth, async (req, res) => {
  const { text, completed } = req.body;
  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: 'Todo not found' });
    if (todo.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });
    todo.text = text ?? todo.text;
    todo.completed = completed ?? todo.completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: 'Todo not found' });
    if (todo.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });
    await todo.remove();
    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;