const router = require("express").Router();
const instructor = require("../models/instructor.model");

const { json } = require("express");

// @route GET /api/instructors
// @desc get all instructor
// @access Public
router.route("/").get(async (req, res) => {
  try {
    const instructors = await instructor.find();
    res.status(200).json(instructors);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

// @route GET /api/instructors/idInstructor
// @desc get instructor by id
// @access Public
router.route("/:_id").get(async (req, res) => {
  try {
    const foundInstructor = await instructor.findOne({ _id: req.params._id });
    res.status(200).json(foundInstructor);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});
// @route POST /api/instructors/add
// @desc add new instructor
// @access Public
router.route("/add").post(async (req, res) => {
  try {
    const newInstructor = new instructor({
      name: req.body.name.trim(),
      timeTable: req.body.timeTable.trim(),
      numberOfTracks: req.body.numberOfTracks,
    });
    newInstructor.subscriptionDate = new Date();
    await newInstructor.save();
    res.status(200).json({ newInstructor });
  } catch (err) {
    res.status(400).json({ err });
  }
});
// @route PUT /api/instructors/update/idInstructor
// @desc update instructor
// @access Public
router.route("/update/:_id").put(async (req, res) => {
  try {
    const updates = {};
    if (req.body.name) {
      updates.name = req.body.name;
    }
    if (req.body.timeTable) {
      updates.timeTable = req.body.timeTable;
    }
    if (req.body.numberOfTracks) {
      updates.numberOfTracks = req.body.numberOfTracks;
    }
    const updatedInstructor = await instructor.findByIdAndUpdate(
      { _id: req.params._id },
      updates
    );
    res.status(200).json({ updatedInstructor });
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

// @route PUT /api/instructors/delete/idInstructor
// @desc delete instructor
// @access Public
router.route("/delete/:_id").delete(async (req, res) => {
  try {
    const deletedInstructor = await instructor.findByIdAndDelete({
      _id: req.params._id,
    });
    res.status(200).json({ deletedInstructor });
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = router;
