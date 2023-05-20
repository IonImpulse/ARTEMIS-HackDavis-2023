import { ExchangeType, Gender } from "@prisma/client";
import prisma from "./services/prisma.js";
import { itemTypeFields } from "./data/fields.js";

const isNumberAndGteZero = (v) => typeof v === "number" && v >= 0;

const fields = {
  type: (v) => v === ExchangeType.DROP_OFF || v === ExchangeType.PICK_UP,
  ...itemTypeFields.reduce((prev, field) => {
    prev[field] = isNumberAndGteZero;
    return prev;
  }, {}),
  visitorId: (visitorId) =>
    !visitorId ||
    (typeof visitorId === "string" &&
      visitorId.length >= 8 &&
      visitorId.length <= 10),
};

const filterFields = (unsanitizedObject) => {
  return Object.keys(fields).reduce((prev, field) => {
    if (unsanitizedObject[field]) {
      const isValidValue = fields[field](unsanitizedObject[field]);
      if (isValidValue) {
        const updated = prev;
        updated[field] = unsanitizedObject[field];
        return updated;
      } else {
        throw new Error(
          `Invalid input on field ${field}. Value=${unsanitizedObject[field]}`
        );
      }
    } else {
      return prev;
    }
  }, {});
};

const interactionHandler = async (request, response) => {
  console.log(request.method);
  let input;
  try {
    input = filterFields(request.body);
  } catch (e) {
    console.log(e);
    response.send({ statusCode: 500, body: e.message });
  }

  if (input.type === ExchangeType.PICK_UP) {
    itemTypeFields.forEach((type) => {
      if (input[type]) input[type] = -input[type];
    });
  }

  if (input.visitorId) {
    input.visitor = {
      connectOrCreate: {
        where: { studentId: input.visitorId },
        create: {
          studentId: input.visitorId,
          gender: Gender.UNKNOWN,
          major: "Software Engineering",
          college: "College of Engineering",
          level: "Undergraduate",
          class: "Senior",
        },
      },
    };
    delete input.visitorId;
  }
  console.log(input);
  const createdRecord = await prisma.itemExchange.create({
    data: input,
  });

  response.send(createdRecord);
};

export default interactionHandler;
