import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function udpateUser(name: string, email: string) {
	await prisma.user.update({
		where: {
			email,
		},
		data: {
			name,
		},
	});
}

udpateUser("a beautiful cat", "mkbtCat@gmail.com")
	.then(async () => {
		await prisma.$disconnect();
		console.log(`user was updated successfully`);
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
