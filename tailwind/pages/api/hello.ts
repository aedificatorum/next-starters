import { NextApiRequest, NextApiResponse } from 'next';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NextApiRequest, res: NextApiResponse) => {
  // let's violate some rules
  const x = 0;

  res.statusCode = 200;
  res.json({ name: 'John Doe Typescript III' });
};
