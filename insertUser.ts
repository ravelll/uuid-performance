import { PrismaClient } from  '@prisma/client'

const prisma = new PrismaClient()

const deleteUser = async () => {
  await prisma.userUuid.deleteMany()
  await prisma.userCuid.deleteMany()
}

const insertUser = async () => {
  [...Array(2000)].map(async (_: any) => {
    let randomString = (Math.random() + 1).toString(36).substring(2)
    let data = [...Array(500)].map((_) => {
      return { name: `user_${randomString}`, email: `user_${randomString}@exampleemail.com` }
    })
    await prisma.userUuid.createMany({ data })
    await prisma.userCuid.createMany({ data })
  })
}

// deleteUser().then(async () => {
//   await insertUser()
insertUser().finally(async () => prisma.$disconnect())
