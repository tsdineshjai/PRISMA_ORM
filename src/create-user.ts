import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser() {
	await prisma.user.create({
		data: {
			email: "egyptCat@gmail.com",
			name: "fluffyCat",
			posts: {
				create: {
					title: "a cat that lives in the neighbourhood of cairo",
					content:
						"a nice and fluffy cat that is popular among egyptian people",
				},
			},
			profile: {
				create: {
					bio: "read the book further to know about me ",
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
