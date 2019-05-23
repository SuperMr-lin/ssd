import React from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.less';

const MenuListBtn = () => {
  return (
    <div className={styles.MenuListBox}>
        <Icon type="bar-chart" className={styles.MenuListIcon} />
        <p className={styles.MenuListTitle}>门诊</p>
    </div>
  );
};

export default MenuListBtn;