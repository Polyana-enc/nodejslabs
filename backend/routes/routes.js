const express = require("express");
const {get_student} = require("../data/user_repository.js");

const router = express.Router();
router.get("/student", (req, res) => {

    const id = parseInt(req.query.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "Некорректный ID" });
    }

    const student = get_student(id)

    if (!student) {
        return res.status(404).json({ error: "Студент не найден" });
    }

    console.log(student);

    res.render("student", { student });
});

module.exports = router;
