const test =  ["apple", "banana", "orange"].reduce(
  (res, item) => ({
    ...res,
    ...{
      [item]: Array(20)
        .fill(0)
        .map((_) => Math.floor(20 * Math.random())),
    },
  }),
  {}
);

export default {
  'apple' : [1,2,3,4,5,],
  'orange' : [5,6,7,4,8,],
  'banana' : [4,6,9,7,3,],
'penguin' : [4,6,8,7,2,]
}