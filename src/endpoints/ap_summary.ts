import * as vexdb from "vexdb";
import Express from "express";
import ok from "../pretty";

export default async (req: Express.Request, res: Express.Response) => {
  const { team } = req.query;

  // Get rankings
  let rankings = await vexdb.get("rankings", { team });

  // Relevant Statistics
  let totalAP = rankings.map(r => r.ap).reduce((a, b) => a + b);
  let availableAP = rankings
    .map(r => (r.wins + r.losses + r.ties) * 4)
    .reduce((a, b) => a + b);

  ok(req, res, {
    team,
    totalAP,
    availableAP
  });
};
