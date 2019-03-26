import express from "express";

export default function ok(res: express.Response, results: object) {
  res.statusCode = 200;
  const body = { status: "okay", results };

  res.json(body);

  return body;
}
