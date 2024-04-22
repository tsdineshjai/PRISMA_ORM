import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUsers() {
	const users = await prisma.user.findMany({ take: 10 });

	for (let user of users) {
		console.log(`username: ${user.name} and email :${user.email}`);
	}
}

getUsers()
	.then(async () => {
		await prisma.$disconnect();
		console.log(`users were fetched from the database successfully`);
	})

	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
