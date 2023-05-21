import { itemTypeFields } from "./data/fields.js";
import prisma from "./services/prisma.js";

const getTotalsHandler = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // Send response to OPTIONS requests
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
    return;
  }

  const result = await prisma.itemExchange.aggregate({
    _sum: itemTypeFields.reduce((prev, field) => {
      prev[field] = true;
      return prev;
    }, {}),
  });

  res.send(result._sum);
};

export default getTotalsHandler;
