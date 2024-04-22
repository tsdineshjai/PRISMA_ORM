import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser() {
	await prisma.user.create({
		data: {
			email: "belgumaCat@gmail.com",
			name: "European Cat",
			posts: {
				create: {
					title: "a cat that lives in hot European climate",
					content: "a fluffy cat that is popular",
				},
			},
			profile: {
				create: {
					bio: " Cat likes bread so much  ",
				},
			},
		},
	});
}

createUser()
	.then(async () => {
		console.log(`user was created succesffuly`);
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
