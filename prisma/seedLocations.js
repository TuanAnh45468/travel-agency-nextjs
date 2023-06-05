const prisma = require("../lib/db");

const locations = [
  { code: "AUS", name: "Austin" },
  { code: "NYC", name: "New York City" },
  { code: "LAX", name: "Los Angeles" },
  { code: "SFO", name: "San Francisco" },
  { code: "LON", name: "London" },
  { code: "PAR", name: "Paris" },
  { code: "TOK", name: "Tokyo" },
  { code: "SYD", name: "Sydney" },
];

const seedLocations = async () => {
  try {
    const createdLocations = await prisma.location.createMany({
      data: locations,
    });
  } catch (e) {
    console.error("Seed locations error: ", e);
  }
};

seedLocations()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
