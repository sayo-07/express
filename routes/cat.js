const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res) => {
  request(
    "https://api.thecatapi.com/v1/images/search",
    (error, response, body) => {
      if (error) {
        res.json({ error: true });
        return;
      } 
      
      if (response.statusCode !== 200) {
        res.json({ error: true });
        return;
      }

      const data = JSON.parse(body);
      res.json(data);
    },
  );
});

module.exports = router;
