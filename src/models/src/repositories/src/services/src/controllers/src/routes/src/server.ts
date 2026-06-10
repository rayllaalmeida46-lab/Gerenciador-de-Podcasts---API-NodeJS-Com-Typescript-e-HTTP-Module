import { createServer } from "http";
import { routes } from "./routes/routes";

const server = createServer((req, res) => {
  routes(req, res);
});

server.listen(3333, () => {
  console.log("Servidor rodando");
});
