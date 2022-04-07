/*
 * @Author: jiE
 * @Date: 2022-03-03 14:43:34
 * @Description: routes
 * @LastEditors: lijie
 * @LastEditTime: 2022-04-07 14:55:19
 */
import { IRouterConfig } from 'ice';
import { renderNotFound, isInIcestark } from '@ice/stark-app';
import BasicLayout from '@/layouts/BasicLayout';
import Home from '@/pages/Home';
import WaitForManager from '@/pages/waitForManager'; // 待处理列表页
import NotFound from '@/components/NotFound';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        name: '首页',
        path: '/',
        exact: true,
        component: Home,
      },
      {
        name: '待处理列表',
        path: '/list',
        component: WaitForManager,
      },
      {
        // 微应用独立运行 404 路由渲染 NotFound 组件
        component: isInIcestark() ? () => renderNotFound() : NotFound,
      },
    ],
  },
];

export default routerConfig;
