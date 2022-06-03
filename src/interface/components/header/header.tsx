import {
    ContainerHeader,
    Logo
} from './headerStyle';

export function Header() {
    return (
        <ContainerHeader>
            <Logo src='/image/logo.svg' alt='Adote um Pet'/>
        </ContainerHeader>
    )
}