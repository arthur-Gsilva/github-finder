import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
    res.json({testado: true})
}

export default handler