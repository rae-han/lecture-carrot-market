import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = `${Math.floor(100000 + Math.random() * 900000)}`;
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  // const payload = phone ? { phone: +phone } : { email };
  // const user = await client.user.upsert({
  //   where: {
  //     ...payload,
  //   },
  //   create: {
  //     name: "Anonymous",
  //     ...payload,
  //   },
  //   update: {},
  // });

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `Your login token is ${payload}.`,
    // });
    // console.log(message);
  }
  if (email) {
    // console.log(token);
  }
  /* if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("found it.");
    if (!user) {
      console.log("Did not find. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
    console.log(user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("found it.");
    if (!user) {
      console.log("Did not find. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
    console.log(user);
  } */
  // return res.status(200).end();
  return res.json({
    ok: true,
    token: payload,
  });
}

export default withHandler({ methods: ['POST'], handler, isPrivate: false });
