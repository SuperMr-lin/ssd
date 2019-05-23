import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import 'antd/dist/antd.css';
import './index.less';

const { SubMenu } = Menu;

{/* <Link to={item.path}>{item.title}</Link> */ }

const MenuLeft = (props) => {
    return (
        <Menu onClick={props.handleClick} className={props.className} theme={props.theme} mode={props.mode} defaultSelectedKeys={props.defaultSelectedKeys}>
            {
                
                props.MenuCfg.map((item) => {
                    if (item.list === undefined) {
                        const data = { 
                            type: item.type, 
                            id: item.id,
                            picker:(item.picker===undefined?"":item.picker)
                        };
                        const path = {
                            pathname: item.path + "/" + item.id,
                            query: { name: item.title },
                            state: data,
                        } 
                        return (
                            <Menu.Item key={item.id}>
                                <Icon type="bar-chart" />
                                <span>{item.title}</span>
                                <Link to={path}>
                                </Link>
                            </Menu.Item>
                        )
                    }else{
                        return (
                            <SubMenu key={"sub" + item.id} title={<span><Icon type="appstore" /><span>{item.title}</span></span>}>
                                {
                                    item.list.map((itemchild) => {
                                        const data = { type: itemchild.type, id: itemchild.id,picker:(itemchild.picker===undefined?"":itemchild.picker)};
                                        const path = {
                                            pathname: itemchild.path + "/" + itemchild.id ,
                                            query: { name: itemchild.title },
                                            state: data,
                                        }
                                        if (itemchild.list === undefined) {
                                            return (
                                                <Menu.Item key={itemchild.id}>
                                                    <Icon type="bar-chart" />
                                                    <span>{itemchild.title}</span>
                                                    <Link
                                                        to={path}
                                                    >
                                                    </Link>
                                                </Menu.Item>
                                            )
                                        }else{
                                            return (
                                            <SubMenu key={"subtwo" + itemchild.id} title={<span><Icon type="appstore" /><span>{itemchild.title}</span></span>}>
                                            {   
                                                    itemchild.list.map((itemchildtwo) => {
                                                        const data = { type: itemchildtwo.type, id: itemchildtwo.id,picker:(itemchildtwo.picker===undefined?"":itemchildtwo.picker) };
                                                        const path = {
                                                            pathname: itemchildtwo.path + "/" + itemchildtwo.id,
                                                            query: { name: itemchildtwo.title },
                                                            state: data,
                                                        }
                                                        return (
                                                            <Menu.Item key={itemchildtwo.id}>
                                                                <Icon type="bar-chart" />
                                                                <span>{itemchildtwo.title}</span>
                                                                <Link
                                                                    to={path}
                                                                >
                                                                </Link>
                                                            </Menu.Item>
                                                        )
                                                    })

                                            }
                                            </SubMenu>
                                            )
                                            
                                        }
                                    })
                                }
                            </SubMenu>
                        )
                    }
                   
                })
            }
        </Menu>
    )
}

// <Link
//     to={itemchild.path + "/" + itemchild.id}
// >



export default MenuLeft;