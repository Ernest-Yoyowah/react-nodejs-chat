/* ID: ea6bdafa-e39c-4af4-a06c-0a794a0e2637
  Key: 44d85401-b759-410b-9181-f5542bd1bcc1

*/
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "44d85401-b759-410b-9181-f5542bd1bcc1"}}
    )
    return res.status(r.status).json(r.data);
  }catch(e) {
    return res.status(e.response.status).json(e.response.data);
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);