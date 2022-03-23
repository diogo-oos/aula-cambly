/**
 * Componente de botão simples
 * Recebe o conteúdo do botão e a classe desejada
 */

export const Botao = (props) => {
    return (
        <div className="area-btn">
            <button className={props.classe}>{props.children}</button>
        </div>
    )
}