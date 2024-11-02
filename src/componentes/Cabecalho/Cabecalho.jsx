import styled from '@emotion/styled'

const HeaderStilizado = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
`

export const Cabecalho = ({children}) => {
    return(
        <HeaderStilizado>
            {children}
        </HeaderStilizado>
    )
}
