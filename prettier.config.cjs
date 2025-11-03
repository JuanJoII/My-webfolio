// prettier.config.cjs
module.exports = {
  semi: true, // agrega punto y coma al final
  singleQuote: true, // usa comillas simples
  tabWidth: 2, // ancho de tabulación
  trailingComma: 'es5', // comas finales en arrays/objetos
  printWidth: 100, // ancho máximo de línea
  bracketSpacing: true, // espacio entre llaves
  plugins: ['prettier-plugin-astro'], // 👈 para archivos .astro
};
