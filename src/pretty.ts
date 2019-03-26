import express from "express";

export default function ok(
  req: express.Request,
  res: express.Response,
  results: { [x: string]: any }
) {
  const body = { status: "okay", results };

  res.status(200);

  // Specific property access
  if (typeof req.query.property == "string") {
    res.end(results[req.query.property] + "");
  } else {
    res.json(body);
  }

  return body;
}
