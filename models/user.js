const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    review: [
      {
        coasterID: { type: String, required: true },
        rating: { type: String, required: false },
        comment: { type: String, required: false },
      },
    ],
    //tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
  },
  { timestamps: true }
);

module.exports = UserSchema;
