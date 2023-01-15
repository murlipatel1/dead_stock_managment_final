const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Stock = require("../Models/Stock");
const fetchuser = require("../Middlewares/fetchuser");

// to fetch all stock of specific user
router.get("/fetchallstocks", fetchuser, async (req, res) => {
  try {
    const stock = await Stock.find({ user: req.user.id });
    res.json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// To add stock of specific user
router.post(
  "/addstock",
  fetchuser,
  [body("isbn").isLength({ min: 10 })],
  async (req, res) => {
    try {
      const {
        stock_id,
        stock_name,
        date_of_importing,
        date_of_exporting,
        no_of_units,
        isbn,
        expired,
      } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Stock({
        stock_id,
        stock_name,
        date_of_importing,
        date_of_exporting,
        no_of_units,
        isbn,
        expired,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

// To Update Stock of specific user
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const {
      stock_id,
      stock_name,
      date_of_importing,
      date_of_exporting,
      no_of_units,
      isbn,
      expired,
    } = req.body;

    const newNote = {};
    if (stock_id) {
      newNote.stock_id = stock_id;
    }
    if (stock_name) {
      newNote.stock_name = stock_name;
    }
    if (date_of_importing) {
      newNote.date_of_importing = date_of_importing;
    }
    if (date_of_exporting) {
      newNote.date_of_exporting = date_of_exporting;
    }
    if (no_of_units) {
      newNote.no_of_units = no_of_units;
    }
    if (isbn) {
      newNote.isbn = isbn;
    }
    if (expired) {
      newNote.expired = expired;
    }
    let note = await Stock.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Stock.findOneAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// to delete al the stock of specific user
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Stock.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Stock.findOneAndDelete(req.params.id);
    res.json({ Success: "deleted succesfully", note: note });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;