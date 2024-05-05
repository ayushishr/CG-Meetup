const express = require("express");
const Service = require("../models/Service");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const services = await Service.find({}).populate("createdBy", "username");
  res.json(services);
});

router.post("/", authMiddleware, async (req, res) => {
  const { title, description } = req.body;
  const newService = new Service({ title, description, createdBy: req.userId });

  await newService.save();
  res.status(201).json(newService);
});

router.get("/:id", authMiddleware, async (req, res) => {
  const service = await Service.findById(req.params.id).populate("createdBy", "username");
  if (!service) return res.status(404).json({ message: "Service not found" });

  res.json(service);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) return res.status(404).json({ message: "Service not found" });

  if (service.createdBy.toString() !== req.userId) {
    return res.status(403).json({ message: "Not authorized to edit this service" });
  }

  const { title, description } = req.body;
  service.title = title || service.title;
  service.description = description || service.description;

  await service.save();
  res.json(service);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) return res.status(404).json({ message: "Service not found" });

  if (service.createdBy.toString() !== req.userId) {
    return res.status(403).json({ message: "Not authorized to delete this service" });
  }

  await service.remove();
  res.status(204).json({ message: "Service deleted" });
});

module.exports = router;
