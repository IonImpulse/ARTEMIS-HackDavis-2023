import fetchFields from "./data/fields.js";

const getFields = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // Send response to OPTIONS requests
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
    return;
  }

  const fields = await fetchFields();
  res.send(
    fields.map((field) => {
      delete field.id;
      return field;
    })
  );
};

export default getFields;
