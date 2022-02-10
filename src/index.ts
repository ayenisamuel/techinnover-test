import { Environments } from "./config/environment";
import * as express from "express";
const router = express.Router();
const app = express.default();
import cors from "cors";
import AllApi from "./routes/apis";
import Log from "./middleware/logger";
const options: cors.CorsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: "*",
  credentials: true,
};
if (Environments.NODE_ENV === "development") {
  console.log("mode development");
}
app.use(cors());
app.use(new Log().logger);
app.use(express.json());
app.use(new AllApi().apis());

const port = Environments.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

export const route = router;
