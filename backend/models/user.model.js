

import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter valid email"],
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    mobile:{
      type: Number,
      required: true,
      minlength: 10,
      maxlength:10
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    balance: {
      type: Number,
      default: 100000, // virtual starting money
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("user", userSchema);