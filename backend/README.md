# Get Totals
Get current totals from the DB.
GET https://us-west2-aggie-reuse-mlh-2023.cloudfunctions.net/backend-aws-dev-get-totals

# Interaction
https://us-west2-aggie-reuse-mlh-2023.cloudfunctions.net/backend-aws-dev-interaction

POST:
```json
{
    type: "DROP_OFF" | "PICK_UP" | "INVENTORY_CORRECTION",
    visitorId: "student id" | undefined,
    // fields
}
```

# Get Fields
https://us-west2-aggie-reuse-mlh-2023.cloudfunctions.net/backend-aws-dev-get-fields
