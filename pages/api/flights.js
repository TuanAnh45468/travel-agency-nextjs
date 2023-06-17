const prisma = require("@lib/db");

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const id = Number(req.query.id);
        const flight = await prisma.flight.findUnique({
          where: {
            id: id,
          },
        });
        res.status(200).json(flight);
      } else if (req.query) {
        const { tripType, origin, destination } = req.query;
        let isReturnTrip = tripType !== "One Way";
        const flights = await prisma.flight.findMany({
          where: {
            originCode: origin,
            destinationCode: destination,
            isReturnTrip,
          },
        });

        res.status(200).json(flights);
      } else {
        const flights = await prisma.flight.findMany({});
        res.status(200).json(flights);
      }
    }
  } catch (error) {
    console.error("Error retrieving flights: ", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving flights" });
  }
}
