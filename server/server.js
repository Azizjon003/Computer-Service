const app = require("./middlewares/app");
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
