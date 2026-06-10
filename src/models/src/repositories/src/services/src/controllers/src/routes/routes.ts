import { IncomingMessage, ServerResponse } from "http";
import { listPodcasts } from "../controllers/podcast-controller";

export const routes = (
  req: IncomingMessage,
  res: ServerResponse
) => {

  if (req.url === "/podcasts" && req.method === "GET") {
    return listPodcasts(req, res);
  }

  res.writeHead(404);
  res.end("Route not found");
};
