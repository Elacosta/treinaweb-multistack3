import { TitleStyle, Subtitle } from "./titleStyle";

interface TitleProps {
    title: string,
    subtitle?: string | JSX.Element
}

export default function Title(props:TitleProps) {
    return <>
    <TitleStyle>{props.title}</TitleStyle>
    <Subtitle>{props.subtitle}</Subtitle>
    </>

}