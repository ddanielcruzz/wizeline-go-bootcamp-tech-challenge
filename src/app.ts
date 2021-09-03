import express from "express";
import fetch from "node-fetch";
import { HELLO_WORLD, HELPER_MESSAGE } from "./constants";

type ChuckNorrisApiResponse = {
  categories: any[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  return res.send(HELLO_WORLD);
});

app.get("/joke", async (_req, res) => {
  const response: ChuckNorrisApiResponse = await fetch(
    "https://api.chucknorris.io/jokes/random"
  ).then((apiRes) => apiRes.json());

  return res.send(response.value);
});

app.get("*", (_req, res) => {
  res.status(404).send(HELPER_MESSAGE);
});

export default app;
