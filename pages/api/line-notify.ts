import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const apiUrl = "https://notify-api.line.me/api/notify";
  const { method, headers, body } = req;

  if (method === "POST") {
    const response = await fetch(apiUrl, {
      method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ENV_LINE_TOKEN}`,
      },
      body,
    });

    const data = await response.json();

    res.status(response.status).json(data);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
