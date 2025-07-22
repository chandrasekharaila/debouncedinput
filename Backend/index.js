const express = require("express");
const cors = require("cors");
app = express();

app.use(cors());
app.use(express.json());

app.get("/interest", (req, res) => {
  let p = parseInt(req.query.p);
  let r = parseInt(req.query.r);
  let t = parseInt(req.query.t);

  if (isNaN(p) || isNaN(r) || isNaN(t)) {
    return res.status(400).json({ error: "Invalid Inputs" });
  }

  let interest = (p * t * r) / 100;
  let total = interest + p;
  res.json({ interest: interest, total: total });
});

app.listen(3000, () => {
  console.log("server is live");
});
