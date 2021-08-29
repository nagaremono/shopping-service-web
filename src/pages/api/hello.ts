// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.send('hello world');
}
