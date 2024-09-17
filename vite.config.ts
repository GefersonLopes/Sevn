import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const handlebars = await import('vite-plugin-handlebars');

  return {
    plugins: [
      handlebars.default({
        partialDirectory: './src/templates',
      }),
    ],
    assetsInclude: ['**/*.hbs'],
  };
});
