import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

function PokemonCard({ title, image }) {
  return (
    <Card
      title={title}
      extra={<StarOutlined style={{ color: "#08c" }} />}
      cover={<img src={image} alt={title} />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
}

export default PokemonCard;
