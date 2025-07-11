import TutorialViewer from './TutorialViewer';
import UXPostViewer from './UXPostViewer';

// Auto-import all snippets and tutorials
const snippetModules = import.meta.glob('./snippets/*.js', { eager: true });
const graphicModules = import.meta.glob('./graphics/*.js', { eager: true });
const uxModules = import.meta.glob('./ux/*.js', { eager: true });

// Helper function to generate stable IDs from title
const generateId = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

const snippets = Object.values(snippetModules).map((module) => ({
  ...module.default,
  id: generateId(module.default.title),
}));

const graphics = Object.values(graphicModules).map((module) => ({
  ...module.default,
  id: generateId(module.default.title),
  liveComponent: TutorialViewer,
}));

const uxPosts = Object.values(uxModules).map((module) => ({
  ...module.default,
  id: generateId(module.default.title),
  liveComponent: UXPostViewer,
}));

// Combine and sort by date
const allItems = [...snippets, ...graphics, ...uxPosts];
export const gardenItems = allItems.sort((a, b) => {
  const dateA = new Date(a.dateAdded || '2025-01-01');
  const dateB = new Date(b.dateAdded || '2025-01-01');
  return dateB - dateA;
});
