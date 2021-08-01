import express from "express";
import { Storage } from "./src/data/Storage.js";
import { cutURL } from "./src/cutURL.js";
import { redirect } from "./src/redirect.js";

const app = express();
const port = 3001;

app.use(express.json());

if (Storage.data.links === undefined) {
    Storage.data.links = [];
    Storage.write();
  }
 
//   app.get('/', (req, res)=> {
//       res.send('Hello world');

app.post("/cut", cutURL);
app.get("/[a-f0-9]{5}", redirect); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});