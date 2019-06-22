import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import styles from "./index.less";



const Bfb=(val1,val2)=>{
    let val3 = parseFloat(((val1 / val2)*100).toPrecision(12));
    return val3.toFixed(2)+ "%";
}
const Cards = (props) => {
    const {card}=props;
    return (
        <Card className={styles.card_box} title="今日简报" >
            <table className={styles.card_table} >
            <tbody>
                <tr >
                    <td rowSpan="4">全院总收入（元）</td>
                         <td rowSpan="4">{card.qyzsr}</td>
                    <td>门诊收入（元）</td>
                        <td>{card.mzsr}</td>

                    <td>住院收入（元）</td>
                        <td>{card.zysr}</td>
                </tr>
                <tr>
                    <td>占比（%）</td>
                        <td>{Bfb(card.mzsr, card.qyzsr)}</td>
                    <td>占比（%）</td>
                        <td>{Bfb(card.zysr, card.qyzsr)}</td>
                </tr>
                <tr>
                    <td>非药品收入（元）</td>
                        <td>{card.fypsr}</td>
                    <td>药品收入（元）</td>
                        <td>{card.ypsr}</td>
                </tr>
                <tr>
                    <td>占比（%）</td>
                        <td>{Bfb(card.fypsr, card.qyzsr)}</td>
                    <td>占比（%）</td>
                        <td>{Bfb(card.ypsr, card.qyzsr)}</td>
                </tr>
                <tr>
                    <td>门诊人次(含急诊)</td>
                        <td>{card.mzrc}</td>
                    <td>急诊人次</td>
                        <td>{card.jzrc}</td>
                    <td>专家门诊人次</td>
                        <td>{card.zjmzrc}</td>
                </tr>
                <tr>
                    <td>传染病例数</td>
                        <td>{card.crbls}</td>
                    <td>已取处方总金额（元）</td>
                        <td>{card.yqcfzje}</td>
                    <td>未取处方数量(张)</td>
                        <td>{card.wqcfsl}</td>
                </tr>
                <tr>
                    <td>已取处方数量(张)</td>
                        <td>{card.yqcfsl}</td>
                    <td>已取处方总金额（元）</td>
                        <td>{card.yqcfzje}</td>
                    <td>未取处方数量(张)</td>
                        <td>{card.wqcfsl}</td>
                </tr>
                <tr>
                    <td>未取处方总金额(元)</td>
                        <td>{card.wqcfzje}</td>
                    <td>最大处方金额（元）</td>
                        <td>{card.zdcfje}</td>
                    <td>最小处方金额（元）</td>
                        <td>{card.zxcfje}</td>
                </tr>
                <tr>
                    <td>入院人数</td>
                        <td>{card.ryrs}</td>
                    <td>出院人数</td>
                        <td>{card.cyrs}</td>
                    <td>在院人数</td>
                        <td>{card.zyrs}</td>
                </tr>
                <tr>
                    <td>治愈出院</td>
                        <td>{card.zycy}</td>
                    <td>转院</td>
                        <td>{card.zy}</td>
                    <td>死亡</td>
                        <td>{card.sw}</td>
                </tr>
                <tr>
                    <td>在编床位</td>
                        <td>{card.zbcw}</td>
                    <td>编外床位</td>
                        <td>{card.bwcw}</td>
                    <td>加床</td>
                        <td>{card.jc}</td>
                </tr>
                <tr>
                    <td>床位使用率%</td>
                        <td>{card.cwsyl}</td>
                    <td>床位周转率</td>
                        <td>{card.cwzzl}</td>
                    <td>手术台数</td>
                        <td>{card.ssts}</td>
                </tr>
                </tbody>
            </table>
        </Card>
    );
}


export default Cards;
