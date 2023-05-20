import fetchFields from "./data/fields.js";

const getFields = async (req, res) => {
  const fields = await fetchFields();
  res.send(
    fields.map((field) => {
      delete field.id;
      return field;
    })
  );
};

export default getFields;
