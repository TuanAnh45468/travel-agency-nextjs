const prisma = require("@lib/db");

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const airlineId = req.query.airlineId;
      const airline = await prisma.airline.findUnique({
        where: {
          id: parseInt(airlineId),
        },
      });

      res.status(200).json(airline);
    }
  } catch (e) {
    console.error("There is an error while fetching airline");
    res.status(500).json({ error: "There is an error while fetching airline" });
  }
}
