import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://johinnerMC:5721@registro-porcentaje.rw9rlko.mongodb.net/?retryWrites=true&w=majority";
