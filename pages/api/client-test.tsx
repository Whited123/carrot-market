import { NextApiRequest } from "next";
import client from "../../libs/client";

export default async function handler(req:NextApiRequest, res:NextApiRequest){

  await  client.user.create({
        data: {
        email:"hi",
        name:"hi",
      },
    });

    res.json({
        ok:true,
        data:"xx"
    })
}