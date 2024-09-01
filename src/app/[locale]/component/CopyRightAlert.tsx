import {IconInfoCircle} from "@tabler/icons-react";
import {Alert} from "@mantine/core";
import { useTranslations } from 'next-intl';
import React from "react";

export default function CopyRightAlert() {
    const t = useTranslations('Copyright');
    return (
        <div style={{
            maxWidth: '50%',
            margin: 'auto',
            marginTop: '30px',
            height: 'auto',
        }}>
            <Alert variant="filled" color="#35a2f3" radius="lg" title={t('title')} icon={<IconInfoCircle/>}>
                {t('part1')}&nbsp;
                <a style={{color: 'yellow'}} href="https://github.com/LingmoOS" target="_blank" rel="noreferrer">
                    Lingmo OS
                </a>&nbsp;
                {t('part2')}
                <br/>
                {t('part3')}(QQ:&nbsp;
                <a style={{color: 'yellow'}} href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2422586862"
                   target="_blank" rel="noreferrer">
                    2422586862
                </a>&nbsp;Email:&nbsp;
                <a style={{color: 'yellow'}} href="mailto:lingmo@lingmo.org"
                   target="_blank" rel="noreferrer">
                    lingmo@lingmo.org
                </a>
                )
            </Alert>
        </div>

    );
}
