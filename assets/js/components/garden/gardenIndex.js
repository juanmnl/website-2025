const snippetModules = import.meta.glob('./snippets/*.jsx', { eager: true });
const graphicModules = import.meta.glob('./graphics/*.jsx', { eager: true });

const snippets = Object.values(snippetModules).map((module) => module.default);
const graphics = Object.values(graphicModules).map((module) => module.default);

// export const gardenItems = [...snippets, ...graphics].sort(
//   (a, b) => a.id - b.id
// );
export const gardenItems = [...snippets].sort((a, b) => a.id - b.id);
