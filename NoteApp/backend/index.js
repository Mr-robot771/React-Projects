import app from "./app.js";
import { connectDB } from "./src/config/db.js";

const PORT = 4000;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
})();
