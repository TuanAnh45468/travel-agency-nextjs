const prisma = require("@lib/db");
const { createJWT, hashPassword } = require("@lib/auth");
const { serialize } = require("cookie");

export default async function register(req, res) {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method is not allowed" });
    }

    const { email, password, firstName, lastName, phoneNumber } = req.body;
    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
      },
    });

    const jwt = await createJWT(user);

    res.setHeader(
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );

    res.status(201).end();
  } catch (error) {
    console.error("Error in register API: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
