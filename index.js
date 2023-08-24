import express from "express"
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

const port = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
const currentUrl = import.meta.url;
const currentPath = fileURLToPath(currentUrl);
const currentDir = path.dirname(currentPath);

app.use(cors());

// Define a route to serve static images
app.use("/images", express.static(path.join(currentDir, "images")));

app.use(InstallRouter);
app.use(CoreRouter);
app.use(AppRouter);

app.listen(port, () => {
	console.log(`Server kører på http://localhost:${port}`);
});
