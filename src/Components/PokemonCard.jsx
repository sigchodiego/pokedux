import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";
import { useDispatch } from "react-redux";

function PokemonCard({ title, image, types, id, favorite }) {
  const dispatch = useDispatch();
  const typesString = types.map((el) => el.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={title}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
      cover={<img src={image} alt={title} />}
    >
      <Meta description={typesString} />
    </Card>
  );
}

export default PokemonCard;
