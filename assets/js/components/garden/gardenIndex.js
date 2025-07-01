const snippetModules = import.meta.glob('./snippets/*.jsx', { eager: true });
const tutorialModules = import.meta.glob('./tutorials/*.jsx', { eager: true });

const snippets = Object.values(snippetModules).map((module) => module.default);
const tutorials = Object.values(tutorialModules).map(
  (module) => module.default
);

// export const gardenItems = [...snippets, ...tutorials].sort(
//   (a, b) => a.id - b.id
// );
export const gardenItems = [...snippets].sort((a, b) => a.id - b.id);
