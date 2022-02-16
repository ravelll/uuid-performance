- 100000 records

```
$ yarn benchmark
yarn run v1.22.11
$ ts-node benchmark.ts
Insert UserUuid x 294 ops/sec ±46.05% (70 runs sampled)
Insert UserCuid x 531 ops/sec ±3.00% (78 runs sampled)
complete
✨  Done in 13.46s.
```

- 1000000 records

```
$ yarn benchmark
yarn run v1.22.11
$ ts-node benchmark.ts
Insert UserUuid x 412 ops/sec ±53.97% (77 runs sampled)
Insert UserCuid x 593 ops/sec ±2.45% (77 runs sampled)
complete
✨  Done in 13.25s.
```

- 10000000 records

```
$ yarn benchmark
yarn run v1.22.11
$ ts-node benchmark.ts
insert useruuid x 405 ops/sec ±51.05% (77 runs sampled)
insert usercuid x 622 ops/sec ±3.29% (77 runs sampled)
complete
✨  done in 13.40s.
```

- 30000000 records

```
$ yarn benchmark
yarn run v1.22.11
$ ts-node benchmark.ts
Insert UserUuid x 298 ops/sec ±66.94% (73 runs sampled)
Insert UserCuid x 608 ops/sec ±3.49% (76 runs sampled)
complete
✨  Done in 14.50s.
```

- 60000000 records

```
$ yarn benchmark
yarn run v1.22.11
$ ts-node benchmark.ts
Insert UserUuid x 210 ops/sec ±51.31% (73 runs sampled)
Insert UserCuid x 612 ops/sec ±2.03% (80 runs sampled)
complete
✨  Done in 13.70s.
```

- 80000000 records

```
$ yarn benchmark
yarn run v1.22.11
$ ts-node benchmark.ts
Insert UserUuid x 124 ops/sec ±36.80% (73 runs sampled)
Insert UserCuid x 583 ops/sec ±3.08% (74 runs sampled)
complete
✨  Done in 13.65s.
```

- 100000000 records

```
$ yarn benchmark
yarn run v1.22.11
$ ts-node benchmark.ts
Insert UserUuid x 84.34 ops/sec ±39.69% (78 runs sampled)
Insert UserCuid x 508 ops/sec ±2.93% (75 runs sampled)
complete
✨  Done in 13.97s.
```
