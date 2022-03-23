export const Layout = ({ children }) => {
    return (
        <>
            <header>Menu</header>
            <main className="container">{children}</main>
            <footer>rodapé</footer>
        </>

    )
}