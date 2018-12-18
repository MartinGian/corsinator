const proxy = require("express-http-proxy");
const app = require("express")();
const argv = require("yargs").argv;
const cors = require("cors");

if (!argv.url) throw new Error("Must pass a url param");

const PORT = argv.port || 8080;

app.use(cors());

app.all("*", proxy(argv.url));

app.listen(PORT, () => {
  console.log("Proxy running at: " + PORT);
});
