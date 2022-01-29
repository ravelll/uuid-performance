import { PrismaClient } from  '@prisma/client'

const prisma = new PrismaClient()

const insertUser = async () => {
  Promise.all(
    [...Array(10000)].map(async (_, i) => {
      let array = [...Array(1000)]
      let randomString = (Math.random() + 1).toString(36).substring(2)
      let data = array.map((_, i) => {
        return { name: `user_${randomString}`, email: `user_${randomString}@exampleemail.com` }
      })
      await prisma.userUuid.createMany({ data })
      await prisma.userCuid.createMany({ data })
    })
  )
}

insertUser().finally(async () => prisma.$disconnect())
