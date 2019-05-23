import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import 'antd/dist/antd.css';
import './index.less';



const MenuHead = (props) => {
    return (
        <Menu className={props.className} theme={props.theme} mode={props.mode} defaultSelectedKeys={props.defaultSelectedKeys}>
            {

                props.MenuCfg.map((item) => {
                        return(
                            <Menu.Item key={item.id} onClick={props.handleClick}>
                                <span>{item.title}</span>
                            </Menu.Item>
                        )
                })
            }
        </Menu>
    )
}

// <Link
//     to={itemchild.path + "/" + itemchild.id}
// >



export default MenuHead;