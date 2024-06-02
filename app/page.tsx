import { Divider } from '@mantine/core';
import { HeroText } from '@/app/component/HeroText';
import { FeaturesCards } from '@/app/component/FeatureCards';

export default function HomePage() {
  return (
    <>
        <HeroText />
        <Divider />
        <FeaturesCards />
    </>
  );
}
