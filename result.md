- 100000 records

```
$ yarn benchmark
yarn run v1.22.11
$ ts-node benchmark.ts
Insert UserUuid x 479 ops/sec ±6.85% (77 runs sampled)
Insert UserCuid x 513 ops/sec ±4.68% (76 runs sampled)
complete
✨  Done in 13.61s.

```

- 1000000 records

```
$ yarn benchmark
yarn run v1.22.11
$ ts-node benchmark.ts
Insert UserUuid x 350 ops/sec ±47.29% (72 runs sampled)
Insert UserCuid x 483 ops/sec ±3.86% (74 runs sampled)
complete
✨  Done in 13.68s.
```
