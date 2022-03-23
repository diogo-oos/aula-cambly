/**
 * Componente para controlar o layout das páginas do app
 * (outros componentes de layout serão criados para as páginas de login e apresentação)
 * Recebe os headers e footers dos layouts (app, login e apresentalção)
 */

import '../assets/style-header-footer.css'
import HeaderApp from './header-app'

export const LayoutApp = ({ children }) => {
    return (
        <>
            <header className="container">
                <HeaderApp />
            </header>

            <main className="container">{children}</main>

            <footer>rodapé</footer>
        </>

    )
}