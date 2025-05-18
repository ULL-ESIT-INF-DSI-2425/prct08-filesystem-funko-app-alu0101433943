import {watch} from 'fs';
import path from 'path';


export function watchMonitor(directorioCambios: string, directorioCopias: string) {
  watch(directorioCambios, (eventType, filename) => {
    if (eventType !== 'change') return;
    if (filename === path.basename(directorioCambios)) return;
      console.log(`Evento: ${eventType}`);
      console.log(`Tipo: ${filename}`);
  });
}

watchMonitor('/workspaces/prct08-filesystem-funko-app-alu0101433943/src/probandocambios', '/workspaces/prct08-filesystem-funko-app-alu0101433943/src/probandocopias')