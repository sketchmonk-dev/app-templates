// we will take the template in src/templates folder and compile it to templates.json file
import templates from "../src/templates";

await Bun.write("templates.json", JSON.stringify(templates, null, 2));