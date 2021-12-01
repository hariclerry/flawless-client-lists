// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users } from "../../mock-data/mockData";

export default function handler(req, res) {
  res.status(200).json(users)
}
