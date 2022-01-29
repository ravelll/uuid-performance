import { PrismaClient } from '@prisma/client'
import * as Benchmark from 'benchmark'

const prisma = new PrismaClient()

const insertUserUuid = async () => {
  const users = [...Array(10)].map((_, i) => {
    let randomString = (Math.random() + 1).toString(36).substring(2)
    return { name: `user_${randomString}`, email: `user_${randomString}@exampleemail.com` }
  })

  await prisma.userUuid.createMany({ data: users })
}

const insertUserCuid = async () => {
  const users = [...Array(10)].map((_, i) => {
    let randomString = (Math.random() + 1).toString(36).substring(2)
    return { name: `user_${randomString}`, email: `user_${randomString}@exampleemail.com` }
  })

  await prisma.userCuid.createMany({ data: users })
}

const suite = new Benchmark.Suite

suite.add('Insert UserUuid', {
  defer: true,
  fn: function(deferred: any) {
    insertUserUuid().then(() => deferred.resolve())
  }
}).add('Insert UserCuid', {
  defer: true,
  fn: function(deferred: any) {
    insertUserCuid().then(() => deferred.resolve())
  }
}).on('cycle', function(event: any) {
  console.log(String(event.target))
}).on('complete', function() {
  console.log('complete')
}).run({ async: true })
