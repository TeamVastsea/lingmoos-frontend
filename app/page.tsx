import {HeroText} from "@/app/component/HeroText";
import {ColorSchemeToggle} from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import {Divider} from "@mantine/core";
import {FeaturesCards} from "@/app/component/FeatureCards";


export default function HomePage() {
  return (
    <>
        <HeroText />
        <Divider />
        <FeaturesCards />
        <ColorSchemeToggle />
    </>
  );
}
