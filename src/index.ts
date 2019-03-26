import express from "express";
import http from "http";

// Routes
import { ap_summary } from "./endpoints";

export const app = express();
export const server = http.createServer(app);

export const router = express.Router();

// Connect routes
router.get("/ap_summary", ap_summary);

app.use("/api/", router);

server.listen(3000, () => console.log("Server started"));
