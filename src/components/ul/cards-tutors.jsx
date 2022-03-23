import { CardArea } from "../../assets/styledComponents/cardStyles"
import { Image } from "../../assets/styledComponents/cardStyles"
import { FavoriteArea } from "../../assets/styledComponents/cardStyles"
import { Heart } from 'react-bootstrap-icons';
import { Botao } from './botao';
import { useState } from "react";

export const CardTutors = (props) => {

    let controlFavorite = true;
    const { name, image, country, rating} = props

    const [favorite, setFavorite] = useState(null);

    function changeFavorite() {
        if(controlFavorite){
            setFavorite(true);
            controlFavorite = false;
        }
        else{
            setFavorite(false);
            controlFavorite = true;
        }
        
    }

    return (
        <CardArea className="card mb-3 col-12 col-sm-6 col-md-4 mb-3" >

            <div className="row g-0">

                <div className="col-md-4">
                    <Image src={image} className="img-fluid rounded-start" alt={name} />
                </div>

                <div className="col-md-8">

                    <div className="card-body">

                        <div className="info">

                            <h3 className="card-title name">{name}</h3>

                            <div className="ratings">
                                {rating}
                            </div>

                            <div className="place">
                                {country.address}
                            </div>

                        </div>
                        
                        <FavoriteArea>
                            <button onClick={() => changeFavorite()} className="btn" ><Heart/>{favorite? 'sim': 'não'}</button>
                        </FavoriteArea>
                        
                        <div className="speaks">
                            Speaks: {props.speaks.map(speak => speak.title).join(', ')}
                        </div>

                    </div>

                </div>

            </div>

            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae eaque minus cum saepe sed modi tempore.
                </p>
            </div><br />

            <Botao classe={"btn perfil"} >Perfil</Botao>
            <Botao classe={"btn ligar"} >Ligar</Botao>

        </CardArea>
    )

}