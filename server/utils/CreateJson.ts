import { existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";


// Cria um JSON novo, se o json já existir ele não cria.
export default function CreateJson(filePath: string) {
   const dir = dirname(filePath);

   // Verifica se o arquivo já existe
   if (!existsSync(dir)) {
      // Cria o diretório se ele não existir
      mkdirSync(dir, { recursive: true });

      // Cria o arquivo JSON vazio
      writeFileSync(filePath, JSON.stringify([], null, 2), 'utf8');
   };
};