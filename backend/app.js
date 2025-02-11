const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/routes");
app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
