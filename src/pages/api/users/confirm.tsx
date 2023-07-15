import { NextApiRequest, NextApiResponse } from 'next';

import { withApiSession } from '@libs/server/withSession';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { token } = req.body;
  console.log(token);
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!foundToken) return res.status(404).end();
  req.session.user = {
    id: foundToken.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });
  return res.json({ ok: true });
}

export default withApiSession(withHandler({ methods: ['POST'], handler, isPrivate: false }));
