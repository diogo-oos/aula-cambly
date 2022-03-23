export const Botao = (props) => {
    return (
        <div className="area-btn">
            <button className={props.classe}>{props.children}</button>
        </div>
    )
}