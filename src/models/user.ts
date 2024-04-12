import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    type: {
      type: String,
      required: true,
      enum: ["client", "provider", "admin"],
    },
    managedClients: [{ type: Schema.Types.ObjectId, ref: "User" }],
    managedProviders: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
