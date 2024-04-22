import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findAUserByName(username: string) {
	const user = await prisma.user.findFirst({
		where: {
			name: username,
		},
	});

	console.log(`email: ${user?.email}  , name : ${user?.name}`);
}

findAUserByName("fluffyCat")
	.then(async () => {
		await prisma.$disconnect();
		console.log(`users were fetched from the database successfully`);
	})

	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
