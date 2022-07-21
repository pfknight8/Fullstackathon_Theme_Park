const { Schema } = require("mongoose");

const User = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    review: { type: String, required: true },
    //tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
  },
  { timestamps: true }
);
