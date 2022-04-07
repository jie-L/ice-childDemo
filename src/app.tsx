/*
 * @Author: jiE
 * @Date: 2022-03-16 10:56:43
 * @Description: app config
 * @LastEditors: lijie
 * @LastEditTime: 2022-04-07 14:56:22
 */
import { runApp, IAppConfig } from 'ice';


const appConfig: IAppConfig = {
  router: {
    type: 'hash',
    // type: 'browser',
  },
};

runApp(appConfig);
