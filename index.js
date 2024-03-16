const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const movieRoutes = require("./routes/movieRoutes.js");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

mongoose
  .connect(
    "mongodb+srv://neerurani1307:%40Neeru1307@neerucluster.z4krrc9.mongodb.net/movieBackendApp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
