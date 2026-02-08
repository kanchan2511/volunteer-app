const express = require("express")
const router = express.Router();
const Volunteer = require("../models/Volunteer")
router.post("/", async (req, res) => {
  try {
    const { name, email, contact, dob, location } = req.body;

    if (!name || !email || !contact || !dob || !location) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const volunteer = new Volunteer(req.body);
    await volunteer.save();

    res.json({ message: "Volunteer saved" });
  } catch (err) {
  console.error("SAVE ERROR:", err);
  res.status(500).json({ error: err.message });
}

});

router.get("/", async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.json(volunteers);
    }catch(err){
        res.status(500).json({error: "Fetch failed"})
    } 
})
module.exports = router;
