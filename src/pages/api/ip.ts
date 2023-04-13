import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientIp = req.headers["x-real-ip"] || req.socket.remoteAddress;
  res.status(200).json({ ip: clientIp });
}
