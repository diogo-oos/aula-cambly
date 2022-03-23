/**
 * Componente de cabeçalho para as páginas do app
 * -> utilizado no layout do app 
 * (outros componentes de header serão criados para as páginas de login e apresentação)
 */

import Logo from '../assets/imgs/cambly-logo.png'

export default function HeaderApp() {
    return (
        <>
            <nav id='nav-header'>
                <img src={Logo} alt="Logo Cambly" />
            </nav>
        </>
    )
} 