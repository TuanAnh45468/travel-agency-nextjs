const prisma = require("../lib/db");

const flights = [
  {
    airlineId: 1,
    originCode: "AUS",
    destinationCode: "NYC",
    logo: "/images/icons/airplanes/emirates.svg",
    points: 4.5,
    reviews: 32,
    departureTime: new Date("2023-07-04T08:00:00"),
    arrivalTime: new Date("2023-07-04T11:00:00"),
    isReturnTrip: true,
    totalHours: 3,
  },
  {
    airlineId: 2,
    originCode: "LAX",
    destinationCode: "SFO",
    logo: "/images/icons/airplanes/etihad.svg",
    points: 4.2,
    reviews: 18,
    departureTime: new Date("2023-07-04T12:00:00"),
    arrivalTime: new Date("2023-07-04T18:00:00"),
    isReturnTrip: false,
    totalHours: 6,
  },

  {
    airlineId: 3,
    originCode: "LON",
    destinationCode: "PAR",
    logo: "/images/icons/airplanes/flydubai.svg",
    points: 4.0,
    reviews: 25,
    departureTime: new Date("2023-07-04T14:30:00"),
    arrivalTime: new Date("2023-07-04T18:45:00"),
    isReturnTrip: true,
    totalHours: 4,
  },
  {
    airlineId: 4,
    originCode: "TOK",
    destinationCode: "SYD",
    logo: "/images/icons/airplanes/qatar.svg",
    points: 4.7,
    reviews: 48,
    departureTime: new Date("2023-07-04T09:15:00"),
    arrivalTime: new Date("2023-07-04T15:30:00"),
    isReturnTrip: false,
    totalHours: 6,
  },
  // Add more flights here
  {
    airlineId: 1,
    originCode: "NYC",
    destinationCode: "SFO",
    logo: "/images/icons/airplanes/emirates.svg",
    points: 4.3,
    reviews: 37,
    departureTime: new Date("2023-07-04T16:00:00"),
    arrivalTime: new Date("2023-07-04T18:30:00"),
    isReturnTrip: true,
    totalHours: 2,
  },
  {
    airlineId: 2,
    originCode: "AUS",
    destinationCode: "LAX",
    logo: "/images/icons/airplanes/etihad.svg",
    points: 4.1,
    reviews: 21,
    departureTime: new Date("2023-07-04T10:30:00"),
    arrivalTime: new Date("2023-07-04T14:15:00"),
    isReturnTrip: true,
    totalHours: 3,
  },
  {
    airlineId: 3,
    originCode: "SFO",
    destinationCode: "NYC",
    logo: "/images/icons/airplanes/flydubai.svg",
    points: 4.5,
    reviews: 32,
    departureTime: new Date("2023-07-04T12:45:00"),
    arrivalTime: new Date("2023-07-04T16:30:00"),
    isReturnTrip: false,
    totalHours: 3,
  },
  {
    airlineId: 4,
    originCode: "PAR",
    destinationCode: "SYD",
    logo: "/images/icons/airplanes/qatar.svg",
    points: 4.8,
    reviews: 54,
    departureTime: new Date("2023-07-04T09:00:00"),
    arrivalTime: new Date("2023-07-04T15:30:00"),
    isReturnTrip: false,
    totalHours: 6,
  },
  {
    airlineId: 1,
    originCode: "LAX",
    destinationCode: "LON",
    logo: "/images/icons/airplanes/emirates.svg",
    points: 4.2,
    reviews: 29,
    departureTime: new Date("2023-07-04T14:15:00"),
    arrivalTime: new Date("2023-07-04T17:00:00"),
    isReturnTrip: true,
    totalHours: 2,
  },
  {
    airlineId: 2,
    originCode: "SYD",
    destinationCode: "TOK",
    logo: "/images/icons/airplanes/etihad.svg",
    points: 4.6,
    reviews: 42,
    departureTime: new Date("2023-07-04T16:30:00"),
    arrivalTime: new Date("2023-07-04T20:45:00"),
    isReturnTrip: false,
    totalHours: 4,
  },
];

const seedFlights = async () => {
  try {
    const createdFlights = await prisma.flight.createMany({ data: flights });
  } catch (e) {
    console.error("Seed flights error: ", e);
  }
};

seedFlights()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
