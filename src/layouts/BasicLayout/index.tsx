/*
 * @Autor: lijie
 * @Date: 2022-03-29 18:18:05
 * @Description:
 * @LastEditors: lijie
 * @LastEditTime: 2022-04-07 14:59:09
 */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

export default (props) => {
  return (
    <ConfigProvider locale={zhCN}>
      {props.children}
    </ConfigProvider>
  );
};
