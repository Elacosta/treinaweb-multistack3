import { HeaderContainer, Logo, SwitchPageContainer } from "./HeaderAdminStyle";
import { Link, Box } from "@mui/material";
import NextLink from 'next/link';

export default function HeaderAdmin() {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/image/logo.svg" alt="Adote um Pet"/>
                <SwitchPageContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>Cadastrar pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'}>
                        <a>
                        Relatorio 
                        <Box
                            component={'span'}
                            sx={{display: { sm: 'initial', sx: 'none'}}}
                        >de Adoções</Box>
                        </a>
                    </Link>
                </SwitchPageContainer>
            </div>
            <NextLink href={'/umlink'}>
                <a>

                </a>
            </NextLink>
        </HeaderContainer> 
    )
}