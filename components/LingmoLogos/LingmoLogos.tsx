import Image from "next/image";

export default class LingmoLogos {
    public static Icon = (props: IconProps) => (
        <Image src={"/icon/LingmoLogos.svg"} height={props.height} width={props.width} alt={"Lingmo Logo"} />
    );

    public static Title = (props: IconProps) => (
        <Image src={"/icon/Title.svg"} height={props.height} width={props.width} alt={"Lingmo Title"} />
    );

    public static TitleWIthIcon = (props: IconProps) => (
        <Image src={"/icon/TitleWithIcon.svg"} height={props.height} width={props.width} alt={"Lingmo Title with LingmoLogos"} />

    )
}

export interface IconProps {
    width: number;
    height: number;
}
