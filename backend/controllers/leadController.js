// Lead controller
exports.createLead = async (req, res) => {
  try {
    const Lead = req.Lead; // from middleware
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ success: true, lead });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

