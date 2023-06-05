const prisma = require("../lib/db");
const airlines = [
  {
    name: "Emirates",
    logo: "/images/icons/airplanes/emirates.svg",
  },
  {
    name: "Etihad",
    logo: "/images/icons/airplanes/etihad.svg",
  },
  { name: "Flydubai", logo: "/images/icons/airplanes/flydubai.svg" },
  { name: "Qatar", logo: "/images/icons/airplanes/qatar.svg" },
];

const seedAirlines = async () => {
  try {
    const createdAirlines = await prisma.airline.createMany({ data: airlines });
  } catch (e) {
    console.error("Seed airlines error: ", e);
  }
};

seedAirlines()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
