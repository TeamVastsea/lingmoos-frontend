import { Divider } from '@mantine/core';
import { HeroText } from '@/src/app/[locale]/component/HeroText';
import { FeaturesCards } from '@/src/app/[locale]/component/FeatureCards';

export default function HomePage() {
    return (
        <>
            <HeroText />
            <Divider />
            <FeaturesCards />
        </>
    );
}
