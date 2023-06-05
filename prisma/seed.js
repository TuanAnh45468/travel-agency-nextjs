const prisma = require("../lib/db");
const { hashPassword } = require("../lib/auth");

const seedUsers = async () => {
  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
      password: await hashPassword("John097823"),
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phoneNumber: "0987654321",
      password: await hashPassword("Jane097823"),
    },
    // Add more user objects as needed
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }
};

seedUsers()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
