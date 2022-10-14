const express = require("express");

const ctrl = require("../../controllers/books");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.add);

router.put("/:id", ctrl.updateById);

router.delete("/:id", ctrl.removeById);

module.exports = router;
