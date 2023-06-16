const prisma = require("@lib/db");

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query) {
        const { tripType, origin, destination, departureTime } = req.query;
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
