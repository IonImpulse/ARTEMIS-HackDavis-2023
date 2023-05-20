import getFields from "./fields.js";
import interactionHandler from "./interaction.js";
import getTotalsHandler from "./totals.js";
const interaction = async () => {
  await interactionHandler(
    { body: { type: "DROP_OFF", bags: 3, visitorId: "123456789" } },
    { send: console.log }
  );
};

const totals = async () => {
  await getTotalsHandler(
    { body: { type: "DROP_OFF", bags: 3, visitorId: "123456789" } },
    { send: console.log }
  );
};

const fields = async () => {
  await getFields({}, { send: console.log });
};

if (process.argv[2] === "interaction") interaction();
if (process.argv[2] === "totals") totals();
if (process.argv[2] === "fields") fields();
