const prisma = require("@lib/db")

const seedUsers = async () => {
    const users = [
        {
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            phoneNumber: "1234567890",
            password: "password1",
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane@example.com",
            phoneNumber: "0987654321",
            password: "password2",
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
