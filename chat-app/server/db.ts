import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const pgp = pgPromise();
const db = pgp(process.env.DATABASE_URL as string);

db.connect()
  .then(() => console.log("✅ Database connected successfully!"))
  .catch((err) => console.error("❌ Database connection error:", err));

export default db;
