import { Divider } from '@mantine/core';
import { HeroText } from '@/src/app/[locale]/component/HeroText';
import { FeaturesCards } from '@/src/app/[locale]/component/FeatureCards';
import CopyRightAlert from "@/src/app/[locale]/component/CopyRightAlert";
import React from 'react';

export default function HomePage() {
    return (
        <>
            <HeroText />
            <Divider />
            <FeaturesCards />
            <Divider />
            <CopyRightAlert />
        </>
    );
}
