// Use runtime require to avoid ESM/CJS/type-definition mismatches
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const createUser = await prisma.user.create({
    data: {
      name: "Shamiul islam",
      email: "shamiul@gmail.com",
      password: "123456",
    },
  });

  console.log(createUser, "create user response")
}

main()
