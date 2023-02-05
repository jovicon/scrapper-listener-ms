import { CoreModule } from './core/core.module';
import { FormulaOneModule } from './api/api.module';

const routes = [
  {
    path: '/',
    module: CoreModule,
    children: [
      {
        path: '/f1',
        module: FormulaOneModule,
      },
    ],
  },
];

export default routes;
