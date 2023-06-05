const prisma = require("../lib/db");

const bookings = [
  {
    flightId: 1,
    passengerId: 1,
    bookingDate: new Date(),
  },
  {
    flightId: 2,
    passengerId: 2,
    bookingDate: new Date(),
  },
  // Add more bookings as needed
];

const seedBooking = async () => {
  try {
    await prisma.booking.createMany({ data: bookings });
  } catch (e) {
    console.error("Seed bookings error: ", e);
  }
};
seedBooking()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
