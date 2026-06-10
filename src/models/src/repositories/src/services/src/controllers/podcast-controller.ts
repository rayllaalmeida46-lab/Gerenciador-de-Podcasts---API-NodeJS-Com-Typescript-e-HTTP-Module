import { IncomingMessage, ServerResponse } from "http";
import { getPodcasts } from "../services/podcast-service";

export const listPodcasts = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const podcasts = getPodcasts();

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(podcasts));
};
