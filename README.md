# Funko Pop Collection Manager

Aplicación CLI para gestionar colecciones de Funko Pops, con persistencia en archivos JSON y documentación completa.

## Características principales

- Añadir nuevos Funkos a colecciones de usuarios
- Modificar Funkos existentes
- Eliminar Funkos de colecciones
- Buscar y mostrar Funkos específicos
- Listar toda una colección
- Persistencia en sistema de archivos
- Validación de tipos y géneros de Funko
- Salida en consola con colores (usando Chalk)

## Tecnologías utilizadas

| Tecnología       | Uso                          |
|------------------|------------------------------|
| TypeScript       | Lenguaje principal           |
| Node.js          | Entorno de ejecución         |
| Yargs            | Parseo de comandos CLI       |
| Chalk            | Estilizado de consola        |
| TypeDoc          | Documentación automática     |
| ESLint           | Linting y estándares de código |
| Prettier         | Formateo de código           |

## Instalación

1. Clona el repositorio:
```
git clone git@github.com:ULL-ESIT-INF-DSI-2425/prct08-filesystem-funko-app-alu0101433943.git

cd funko-collection-manager
```
2. Instala las dependencias:
```
npm install
```
3. Compila el proyecto:
```
npm run build
```

## Uso
```
# Añadir nuevo Funko
node dist/funko-app.js add --user Alice --id 1 --name "Batman" --description "The Dark Knight" --type "Pop!" --genre "Movies" --franchise "DC Comics" --number 42 --exclusive true --marketValue 75

# Listar colección
node dist/funko-app.js list --user Alice

# Mostrar Funko específico
node dist/funko-app.js read --user Alice --id 1

# Modificar Funko
node dist/funko-app.js modify --user Alice --id 1 --name "Batman (Gold Edition)"

# Eliminar Funko
node dist/funko-app.js remove --user Alice --id 1
```

## Estructura del proyecto
```
funko-collection-manager/
├── data/               # Datos de usuarios (auto-generado)
├── dist/               # Código compilado (JavaScript)
├── docs/               # Documentación TypeDoc
├── src/
│   ├── commands/       # Implementación de comandos
│   ├── models/         # Modelos de datos
│   ├── utils/          # Utilidades
│   └── funko-app.ts    # Punto de entrada
├── tests/              # Pruebas unitarias
├── typedoc.json        # Config TypeDoc
└── tsconfig.json       # Config TypeScript
```

## Documentación
La documentación del proyecto se genera automáticamente con TypeDoc. Para generarla, ejecuta:
```
npm run docs           # Genera documentación en /docs

npm run documentation  # Accede a la documentación generada
```

## Pruebas
Ejecuta las pruebas unitarias con:
```
npm test
```
Genera reporte de cobertura con:
```
npm run coverage
```
