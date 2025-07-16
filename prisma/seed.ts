import prisma from "@/utils/db";
import products from "./products.json";

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .then(async () => {
    console.log("seed data successfully.");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("[SEED_ERROR]: ", error);
    await prisma.$disconnect();
    process.exit(1);
  });
