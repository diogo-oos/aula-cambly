import { useEffect, useState } from "react"
import { CardTutors } from "../components/ul/cards-tutors"

export default function TutorsList() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function carregarConteudo() {
            const promisse = await fetch('http://localhost:9002/tutors')
            const dados = await promisse.json()
            setData(dados)
        }
        carregarConteudo()
    }, [])

    return (
        <>
            {/*<header>
                <nav>
                </nav>

                <h3>Encontre um professor</h3>
                <p>Online</p>
                <p>Favoritos</p>

                <input type="text" placeholder="Nome, idioma, hobby" />
                <Botao>Escolha um currículo</Botao>
                <Botao>Nível de aula</Botao>
                <Botao>Sotaque do professor</Botao>
                <Botao>Personalidade do professor</Botao>
                <Botao>Disponibilidade</Botao>
            </header>*/}

            <div>
                <h3>Tutores</h3>
                <div className="row">
                    {data.map((tutor) =>
                        <CardTutors key={tutor.id} {...tutor} />
                    )}
                </div>
            </div>
        </>
    )
}