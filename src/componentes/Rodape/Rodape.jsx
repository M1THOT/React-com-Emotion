import styled from '@emotion/styled'

const FooterStilizado = styled.footer`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.xl};
    color: ${props => props.theme.cores.branco};
`

export const Rodape = ({children}) => {
    return(
        <FooterStilizado>
            {children}
        </FooterStilizado>
    )
}
