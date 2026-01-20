import { Hono } from "hono";
import { whatsappStatuses } from "../whatsapp";

export const createHealthController = () => {
  const app = new Hono().basePath("/health").get("/", async (c) => {
    return c.json({ status: "ok", data: { sessions: whatsappStatuses.size } });
  });
  return app;
};
