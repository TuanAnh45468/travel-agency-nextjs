const bcrypt = require("bcrypt");
const { SignJWT, JwtVerify, jwtVerify } = require("jose");
const prisma = require("@lib/db");

const hashPassword = (password) => {
  bcrypt.hash(password, 10);
};

const comparePassword = (plainTextPassword, hashedPassword) => {
  bcrypt.compare(plainTextPassword, hashedPassword);
};

const createJWT = (user) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7;

  return new SignJWT({
    payload: { id: user.id, email: user.email },
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
};

const validateJWT = async (jwt) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload.payload;
};

export const getUserFromCookie = async (cookies) => {
  const jwt = cookies.get(process.env.COOKIE_NAME);

  const { id } = await validateJWT(jwt.value);

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};
