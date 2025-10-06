# Prisma Consulting Website

Sitio web corporativo de Prisma Consulting, desarrollado con HTML5, TailwindCSS y JavaScript.

## Requisitos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona este repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd prisma-consulting-web
```

2. Instala las dependencias:
```bash
npm install
```

3. Compila los estilos de TailwindCSS:
```bash
npm run build
```

## Desarrollo

Para trabajar en el proyecto con recarga automática de estilos:

```bash
npm run dev
```

## Despliegue

Para desplegar en GitHub Pages:

1. Compila los estilos para producción:
```bash
npm run build
```

2. Sube los cambios a GitHub:
```bash
git add .
git commit -m "Update website"
git push
```

3. Configura GitHub Pages para servir desde la rama principal.

## Estructura del Proyecto

```
prisma-consulting-web/
├── dist/
│   └── output.css      # CSS compilado
├── src/
│   └── input.css       # Estilos Tailwind
├── js/
│   └── main.js         # JavaScript
├── index.html          # Página principal
├── package.json        # Dependencias
└── tailwind.config.js  # Configuración de Tailwind
```

## Tecnologías Utilizadas

- HTML5
- TailwindCSS
- JavaScript
- Font Awesome (iconos)
- Google Fonts (tipografías)
