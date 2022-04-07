/*
 * @Descripttion: WaitForPage
 * @Author: Shanna
 * @Date: 2022-03-22 14:10:19
 * @LastEditors: lijie
 * @LastEditTime: 2022-04-07 15:02:28
 */
/* eslint-disable @iceworks/best-practices/recommend-functional-component */
import React, { Component } from 'react';
import { Tabs } from 'antd';
import './index.scss';

const { TabPane } = Tabs;

class WaitForHandle extends Component {
  state = {
    personalNumber: 1,
    fullNumber: 22,
  };

  componentDidMount() {
  }

  render() {
    const {
      personalNumber,
      fullNumber,
    } = this.state;

    return (
      <div className="waitForPage">
        <div className="personal"><span>{personalNumber}</span></div>
        <div className="fullNumber"><span>{fullNumber}</span></div>
        <Tabs className="tab-list" defaultActiveKey="1" >
          <TabPane className="tab1" tab="个人待处理" key="1">
            <div>个人待处理</div>
            <input type="text" />
          </TabPane>
          <TabPane className="tab2" tab="全量待处理" key="2">
            <div>全量待处理</div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default WaitForHandle;

