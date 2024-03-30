// import { Card } from "antd";
// import { useDispatch } from "react-redux";
// import Meta from "antd/es/card/Meta";
// import StarButton from "./StarButton";
// import './PokemonList.css';
// import { setFavorite } from "../actions";

// const PokemonCard = ({ name, image, types, id, favorite }) => {
//     const dispatch = useDispatch();
//     const typesString = types.map((elem) => elem.type.name).join(', ');
    

// const handleOnFavorite = () => {
//     dispatch(setFavorite({ pokemonId: id }));
// };

//     return (
//         <Card
//          title={name}
//          cover={<img src={image} alt={name} />}
//          extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
//          >
//             <Meta description={typesString} />
//         </Card>
//     );
// };

// export default PokemonCard;

import { Card } from "antd";
import { useDispatch } from "react-redux";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import './PokemonList.css';
import { setFavorite } from "../actions";
import { useState } from "react";

const PokemonCard = ({ name, image, types, id, favorite }) => {
    const dispatch = useDispatch();
    const typesString = types.map((elem) => elem.type.name).join(', ');
    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleOnFavorite = () => {
        setIsFavorite(!isFavorite);
        dispatch(setFavorite({ pokemonId: id }));
    };

    return (
        <Card
         title={name}
         cover={<img src={image} alt={name} />}
         extra={<StarButton isFavorite={isFavorite} onClick={handleOnFavorite} />}
         >
            <Meta description={typesString} />
        </Card>
    );
};

export default PokemonCard;
