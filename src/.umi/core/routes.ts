import { ApplyPluginsType } from 'F:/dome/template/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
