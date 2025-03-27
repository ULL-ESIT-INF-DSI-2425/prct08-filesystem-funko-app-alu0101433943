import { watch, writeFile, readFile } from "fs";
import yargs from "yargs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const argv = yargs(process.argv.slice(2)).options({
  c: { demandOption: true, type: "string" },
  s: {demandOption: true, type: "string" },
}).parseSync();

function commit(filename: string, directorioSeguridad: string) {
  let archivo = path.join(__dirname, filename);
  archivo = archivo.replace("dist", "src");
  readFile(archivo, "utf-8", (err, data) => {
    if (err) {
      console.log(`Error with ${filename}`);
    } else {
      let archivoCopia = path.join(directorioSeguridad, filename + `.${new Date().toISOString()}.bak`);
      writeFile(archivoCopia, data, "utf-8", (err) => {
        if (err) {
          console.log(`ERROR: ${archivoCopia}`);
        } else {
          console.log(`File ${archivoCopia} has just been created`);
        }
      });     
    }
  })
}

function watchMonitor(directorioCambios: string, directorioSeguridad: string) {
  watch(directorioCambios, (eventType, filename) => {
    let seguridad = path.join(__dirname, directorioSeguridad);
    seguridad = seguridad.replace("dist", "src");
    commit(filename, seguridad);
  })
}

watchMonitor(argv.c, argv.s); 