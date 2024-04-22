import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser() {
	await prisma.user.create({
		data: {
			email: "mkbtCat@gmail.com",
			name: "tropical Cat",
			posts: {
				create: {
					title: "a cat that lives in hot tropical climate",
					content: "a nice and skinny cat that is popular",
				},
			},
			profile: {
				create: {
					bio: " Cat likes chicken so much  ",
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
