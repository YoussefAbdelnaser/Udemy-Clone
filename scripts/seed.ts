const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Languages" },
        { name: "Graphic Design" },
        { name: "Engineering" },
        { name: "Finance" },
        { name: "Economics" },
        { name: "Working Out" },
      ],
    });

    console.log("Seeding finished.");
  } catch (error) {
    console.log(`[SEED ERROR]: ${error}`);
  } finally {
    await database.$disconnect();
  }
}

main();
