// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { SocialsType } from "../../types"
import { socials } from "./data"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SocialsType[]>
) {
  res.status(200).json(socials)
}
