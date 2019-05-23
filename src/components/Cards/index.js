import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import styles from "./index.less";

const Cards = (props) => {
    return (
        <Card className={styles.card_box} title="今日简报" >
            <table className={styles.card_table} >
            <tbody>
                <tr >
                    <td rowSpan="4">全院总收入（元）</td>
                    <td rowSpan="4">{props.card.qyzsr}</td>
                    <td>门诊收入（元）</td>
                        <td>{props.card.mzsr}</td>
                    <td>住院收入（元）</td>
                        <td>{props.card.zysr}</td>
                </tr>
                <tr>
                    <td>占比（%）</td>
                        <td>{props.card.mzsr}</td>
                    <td>占比（%）</td>
                        <td>{props.card.mzsr}</td>
                </tr>
                <tr>
                    <td>非药品收入（元）</td>
                        <td>{props.card.fypsr}</td>
                    <td>药品收入（元）</td>
                        <td>{props.card.ypsr}</td>
                </tr>
                <tr>
                    <td>占比（%）</td>
                        <td>{props.card.mzsr}</td>
                    <td>占比（%）</td>
                        <td>{props.card.mzsr}</td>
                </tr>
                <tr>
                    <td>门诊人次(含急诊)</td>
                        <td>{props.card.mzrc}</td>
                    <td>急诊人次</td>
                        <td>{props.card.jzrc}</td>
                    <td>专家门诊人次</td>
                        <td>{props.card.zjmzrc}</td>
                </tr>
                <tr>
                    <td>传染病例数</td>
                        <td>{props.card.crbls}</td>
                    <td>已取处方总金额（元）</td>
                        <td>{props.card.yqcfzje}</td>
                    <td>未取处方数量(张)</td>
                        <td>{props.card.wqcfsl}</td>
                </tr>
                <tr>
                    <td>已取处方数量(张)</td>
                        <td>{props.card.yqcfsl}</td>
                    <td>已取处方总金额（元）</td>
                        <td>{props.card.yqcfzje}</td>
                    <td>未取处方数量(张)</td>
                        <td>{props.card.wqcfsl}</td>
                </tr>
                <tr>
                    <td>未取处方总金额(元)</td>
                        <td>{props.card.wqcfzje}</td>
                    <td>最大处方金额（元）</td>
                        <td>{props.card.zdcfje}</td>
                    <td>最小处方金额（元）</td>
                        <td>{props.card.zxcfje}</td>
                </tr>
                <tr>
                    <td>入院人数</td>
                        <td>{props.card.ryrs}</td>
                    <td>出院人数</td>
                        <td>{props.card.cyrs}</td>
                    <td>在院人数</td>
                        <td>{props.card.zyrs}</td>
                </tr>
                <tr>
                    <td>治愈出院</td>
                        <td>{props.card.zycy}</td>
                    <td>转院</td>
                        <td>{props.card.zy}</td>
                    <td>死亡</td>
                        <td>{props.card.sw}</td>
                </tr>
                <tr>
                    <td>在编床位</td>
                        <td>{props.card.zbcw}</td>
                    <td>编外床位</td>
                        <td>{props.card.bwcw}</td>
                    <td>加床</td>
                        <td>{props.card.jc}</td>
                </tr>
                <tr>
                    <td>床位使用率%</td>
                        <td>{props.card.cwsyl}</td>
                    <td>床位周转率</td>
                        <td>{props.card.cwzzl}</td>
                    <td>手术台数</td>
                        <td>{props.card.ssts}</td>
                </tr>
                </tbody>
            </table>
        </Card>
    );
}


export default Cards;
