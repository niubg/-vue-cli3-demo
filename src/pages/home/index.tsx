import React, { Component } from 'react';
import './index.less';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

class Two extends React.Component {  
  componentWillMount() {
    console.log("在渲染前调用")
  }
  componentDidMount() {
    console.log("在第一次渲染后调用")
  }
  componentWillReceiveProps(newProps) {
    console.log("在组件接收到一个新的 prop ")
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("在组件接收到新的props或者state但还没有render时被调用", nextProps, nextState)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("在组件完成更新后立即调用")
  }
  componentWillUnmount() {
    console.log("在组件从 DOM 中移除之前立刻被调用")
  }

  render() {
    return (
      <div className="title">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>
      </div>
    );
  }
}
export default Two;