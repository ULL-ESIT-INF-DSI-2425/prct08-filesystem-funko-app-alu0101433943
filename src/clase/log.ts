import yargs from "yargs";
import path from "path";
import { fileURLToPath } from "url";
import {spawn} from 'child_process';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const argv = yargs(process.argv.slice(1)).options({
  n: { demandOption: true, type: "string" }
}).parseSync();

function log(filename: string) {
  let directorio = "~/prct08-filesystem-funko-app-alu0101433943/src/clase/.versions/";
  const ls = spawn('ls', ["-d", (directorio + filename + "*")]);
  ls.stdout.on('data', (data) => {
    console.log(`${data}`);
  });
}

log(argv.n);