import prisma from "../services/prisma.js";

const fetchFields = () => {
  return prisma.field.findMany({});
};

export const itemTypeFields = [
  "bags",
  "belts",
  "books",
  "dresses",
  "hats",
  "household",
  "jacket",
  "longSleeve",
  "pants",
  "jewelry",
  "schoolSupplies",
  "shirts",
  "shoes",
  "shorts",
  "skirt",
  "sunglasses",
  "sweater",
  "tankTop",
  "tie",
  "misc",
];

export default fetchFields;
