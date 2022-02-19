- 100000 records

```
yarn run v1.22.17
$ ts-node benchmark.ts
Insert UserUuid x 437 ops/sec ±66.38% (70 runs sampled)
Insert UserCuid x 719 ops/sec ±2.68% (72 runs sampled)
complete
Done in 14.53s.
```

- 1000000 records

```
yarn run v1.22.17
$ ts-node benchmark.ts
Insert UserUuid x 400 ops/sec ±68.39% (71 runs sampled)
Insert UserCuid x 723 ops/sec ±2.98% (71 runs sampled)
complete
Done in 14.22s.
```

- 10000000 records

```
yarn run v1.22.17
$ ts-node benchmark.ts
Insert UserUuid x 300 ops/sec ±75.89% (62 runs sampled)
Insert UserCuid x 606 ops/sec ±2.20% (63 runs sampled)
complete
Done in 14.59s.
```

- 30000000 records

```
yarn run v1.22.17
$ ts-node benchmark.ts
Insert UserUuid x 310 ops/sec ±84.57% (63 runs sampled)
Insert UserCuid x 681 ops/sec ±2.99% (63 runs sampled)
complete
Done in 15.70s.
```

- 60000000 records

```
yarn run v1.22.17
$ ts-node benchmark.ts
Insert UserUuid x 246 ops/sec ±49.09% (64 runs sampled)
Insert UserCuid x 616 ops/sec ±2.97% (64 runs sampled)
complete
Done in 15.04s.
```

- 80000000 records

```
yarn run v1.22.17
$ ts-node benchmark.ts
Insert UserUuid x 111 ops/sec ±26.80% (64 runs sampled)
Insert UserCuid x 571 ops/sec ±2.97% (69 runs sampled)
complete
Done in 14.78s.
```

- 100000000 records

```
yarn run v1.22.17
$ ts-node benchmark.ts
Insert UserUuid x 85.66 ops/sec ±17.55% (59 runs sampled)
Insert UserCuid x 584 ops/sec ±3.82% (65 runs sampled)
complete
Done in 14.89s.
```
