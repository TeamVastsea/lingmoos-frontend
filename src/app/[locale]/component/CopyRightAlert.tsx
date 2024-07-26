import {IconInfoCircle} from "@tabler/icons-react";
import {Alert} from "@mantine/core";
import React from "react";

export default function CopyRightAlert() {

    return (
        <div style={{
            maxWidth: '50%',
            margin: 'auto',
            marginTop: '30px',
            height: 'auto',
        }}>
            <Alert variant="filled" color="red" radius="lg" title="版权声明" icon={<IconInfoCircle/>}>
                本项目由
                <a style={{color: 'yellow'}} href="https://github.com/LingmoOS" target="_blank" rel="noreferrer">
                    Lingmo OS
                </a>
                团队独立开发，从未授权至任何个人或集体，请注意甄别互联网信息真伪。
                <br/>
                如若发现侵权行为，请及时与我们
                <a style={{color: 'yellow'}} href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2422586862"
                   target="_blank" rel="noreferrer">
                    联系(QQ: 2422586862)
                </a>。
            </Alert>
        </div>

    );
}
