import fs from "fs";
import { generateSnakeAnimation } from "generate-snake-animation";

const outputs = [
  {
    format: "svg",
  },
];

const results = await generateSnakeAnimation(
  {
    platform: "github",
    username: "caanqt-jpg",
  },
  outputs
);

fs.writeFileSync("snake.svg", results[0]);
console.log("✨ snake.svg");