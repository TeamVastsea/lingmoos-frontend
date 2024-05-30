import {HeroText} from "@/app/component/HeroText";
import {ColorSchemeToggle} from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import {Divider} from "@mantine/core";


export default function HomePage() {
  return (
    <>
        <HeroText />
        <Divider />
        <ColorSchemeToggle />
    </>
  );
}
