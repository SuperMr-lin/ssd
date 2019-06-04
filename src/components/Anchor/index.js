import React from 'react';
import { Anchor } from 'antd';
import 'antd/dist/antd.css';

const { Link } = Anchor;




const AnchorRight = (props) => {
    console.log(props);
    const { AnchorList, getContainer } = props;
    return (
        <Anchor getContainer={() => { document.getElementById(getContainer)}}>
            {
                AnchorList.map((item) => {
                    const { href, title } = item;
                    return (
                        <Link href={href} title={title} />
                    )
                })
            }
        </Anchor>
    )
}





export default AnchorRight;