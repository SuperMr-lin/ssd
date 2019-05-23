import React, { Component } from 'react';
// import { connect } from 'dva';
import { Route } from 'dva/router';
import { Layout, Icon } from 'antd';
import { MenuList } from '../utils/menuCfg';
import MenuLeft from '../components/MenuLeft';
import MenuHead from '../components/MenuHead';
import styles from './MainLayout.less';
import log from '../assets/logo.png';


const {
    Header, Content, Footer, Sider
} = Layout;
// <MenuHead
//     defaultSelectedKeys={['1']}
//     defaultType="0"
//     MenuCfg={MenuList}
//     theme="dark"
//     mode="horizontal"
//     className={styles.lh65}
// />
const LeftMenu=(date,key)=>{
    return(
        <Sider width={300} style={{ overflow: 'auto', height: '100%' }}>
            <MenuLeft
                defaultSelectedKeys={key}
                MenuCfg={date}
                theme="dark"
                mode="inline"
            />
        </Sider>
    )
}

class MainPageLayout extends Component {
    constructor(props) {
        super(props);
        this.state={
            menuList:[],
            Keys:[]
        }

    }
    componentDidMount(){
        this.getMenuList(1)
    }
    handleClick=(e)=>{
        this.getMenuList(e.key)
    }
    getMenuList=(id)=>{
        const NewMenuList = this.SetMenuList(id);
        const NewKeys = NewMenuList[0].list[0].id;
        if (NewMenuList[0].list === undefined) {
            this.setState(() => ({
                menuList: []
            }))
        } else {
            this.setState(() => ({
                menuList: NewMenuList[0].list,
                Keys: [NewKeys]
            }))
        }
    }
    //提取对应子菜单
    SetMenuList=(key)=>{
        return MenuList.filter((e)=>{
            return e.id == key;
        })
    }
    render() {
        const { menuList, Keys } = this.state;
        return (
            <Layout style={{ height: '100%' }}>
                <Header style={{ padding: 0 ,height:'115px'}}>
                    <div className={styles.main_page_top}>
                    </div>
                    <div className={styles.main_logo} >
                    {
                    /* 集成后隐藏
                    <img src={log} className={styles.main_logo_img} alt="" />
                    <span className={styles.main_logo_title} >
                            决策支持信息系统
                        </span>
                    */
                    }
                        
                        
                    </div>
                    <MenuHead
                        defaultSelectedKeys={['1']}
                        handleClick={this.handleClick}
                        defaultType="0"
                        MenuCfg={MenuList}
                        theme="dark"
                        mode="horizontal"
                        className={styles.lh65}
                    />
                </Header>
                <Layout>
                    {menuList.length > 0 && LeftMenu(menuList,Keys)}
                    <Content>
                        <Layout style={{height: '100%' }}>
                            <Content style={{ padding: '3px', height: '100%', overflow: 'auto' }}>
                                {this.props.children}
                            </Content>
                            <Footer style={{ textAlign: 'center', padding: "2px" }}>
                                <span>Copyright <Icon type="copyright" /> 2019 互慧软件技术部出品</span>
                            </Footer>
                        </Layout>

                    </Content>
                </Layout>

            </Layout>
        );
    }

}






export default MainPageLayout;
