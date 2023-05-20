import { itemTypeFields } from "./data/fields.js";
import prisma from "./services/prisma.js";

const getTotalsHandler = async (req, res) => {
  const result = await prisma.itemExchange.aggregate({
    _sum: itemTypeFields.reduce((prev, field) => {
      prev[field] = true;
      return prev;
    }, {}),
  });

  res.send(result._sum);
};

export default getTotalsHandler;
