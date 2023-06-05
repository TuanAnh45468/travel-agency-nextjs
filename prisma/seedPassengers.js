const prisma = require("../lib/db");
const passengers = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];

const seedPassengers = async () => {
  try {
    const createdPassengers = await prisma.passenger.createMany({
      data: passengers,
    });
  } catch (e) {
    console.error("Seed passengers error: ", e);
  }
};

seedPassengers()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
