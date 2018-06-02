import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Switch, Spin } from 'antd';
import { Link, Route, } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { action, toJS } from 'mobx';
import App from '../app';
import RouteData from '../../store/RouteData';
import './admin.css';
import logo from '../../assets/logo.png';

const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

@inject("store")
@observer
class Admin extends React.Component {

  state = {
    collapsed: false,
    theme: true,
    name: "",
  };


  componentWillMount() {
    let path = window.location.hash.replace('#', '');
    RouteData.forEach(function (x, i) {
      if (x.children.length <= 0) {
        if (x.path == path) {
          this.props.store.menuName.addKey(null, x, { ...this.props });
        }
      } else {
        x.children.forEach(item => {
          if (item.path == path) {
            this.props.store.menuName.addKey(item, x, { ...this.props });
          }
        })
      }
    }, this);
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  @action
  onChangeSelect = (data) => {
    this.props.store.menuName.selectedKeys = data.key;
  }

  render() {
    // 随主题颜色变化
    const color = this.state.theme ? "rgba(255, 255, 255, 0.67)" : "rgba(0,0,0,0.67)";

    const img = !this.state.collapsed ?
      {
        width: "40px",
        marginRight: 8,
      }
      :
      {
        width: " 28px",
        margin: "6px 7px",
      }
    return (
      <Layout className="home" >
        <div>

        </div>
        <Sider
          collapsed={this.state.collapsed}
          style={{ backgroundColor: this.state.theme ? "#2B3245" : "#fff" }}
        >
          {/* logo */}
          <div className="homeLogo">
            <img src={logo} alt="logo" style={img} />
            <span style={{ color: color }}>manage</span>
          </div>
          <Menu
            theme={this.state.theme ? "dark" : "light"}
            selectedKeys={[this.props.store.menuName.selectedKeys]}
            defaultSelectedKeys={[this.props.store.menuName.selectedKeys]}
            openKeys={toJS(this.props.store.menuName.openKeys)}
            mode="inline"
            onSelect={this.onChangeSelect}
            style={{ backgroundColor: this.state.theme ? "#2B3245" : "#fff" }}
          >
            {RouteData.map((item, index) => {
              if (item.children && item.children.length > 0) {
                return (
                  <SubMenu
                    key={item.key}
                    title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
                    onTitleClick={this.props.store.menuName.onTitleClick}
                  >
                    {item.children.map(x => {
                      return (
                        <Menu.Item key={x.key}>
                          <div
                            style={{ color: color }}
                            onClick={() => {
                              this.props.store.menuName.addKey(x, item, { ...this.props });
                            }}
                          >
                            {x.name}
                          </div>
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={item.key}>
                    <div style={{ color: color }} onClick={() => {
                      this.props.store.menuName.addKey(null, item, { ...this.props });
                    }}>
                      {item.name}
                    </div>
                  </Menu.Item>
                )
              }
            })}
            <SubMenu className="close_after"></SubMenu>
          </Menu>

          {/* 底部菜单主题修改 */}
          <div className="SilderEdit" style={{ display: this.state.collapsed ? "none" : "" }}>
            <Icon type="bulb" style={{ color: color }} />
            <span style={{ color: color, marginLeft: 5 }}>选择主题</span>
            <Switch
              style={{ marginLeft: 10 }}
              defaultChecked={true}
              checkedChildren="dark"
              unCheckedChildren="light"
              onChange={(value) => {
                this.setState({
                  theme: value
                });
              }} />
          </div>

        </Sider>
        <Layout >
          <Spin spinning={this.props.store.menuName.loading} delay={200} >
            <div className="homeContentTitle">
              <div
                className="_3sSwc"
                onClick={() => {
                  let collapsed = this.state.collapsed;
                  this.onCollapse(!collapsed);
                }}
              >
                <Icon type={!this.state.collapsed ? "menu-fold" : "menu-unfold"} />
              </div>
              <Breadcrumb className="menuBread">
                {this.props.store.menuName.parent.map((x, i) => {
                  return (
                    <Breadcrumb.Item key={i}>
                      <Link to={x.path || x.key} onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (i == 0) {
                          return
                        }
                        this.props.store.menuName.addKey(this.props.store.menuName.parent[1], this.props.store.menuName.parent[0], { ...this.props });
                      }}>{x.name}</Link>
                    </Breadcrumb.Item>
                  )
                })}
              </Breadcrumb>
            </div>
            <Content style={{ margin: '16px', maxHeight: 'calc(100vh - 47px)' }}>
              <div style={{ background: '#fff', minHeight: 360 }}>
                <Route path="/app" component={App} />
              </div>
            </Content>
          </Spin>
        </Layout>
      </Layout >
    );
  }
}

export default Admin;