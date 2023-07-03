import React from "react";
import { NEWS } from "../../components/HomeComponents/homeLinks";
import EventTile from "@/components/HomeComponents/EventTile";
const NewsDetails = () => {
  return NEWS.map((tile, index) => {
    return (
      <div key={index}>
        {tile.title}
        {tile.image}
        {tile.date}
        {tile.desc}
        {tile.time}
        {tile.topic}
        {tile.location}
      </div>
    );
  });
};

export default NewsDetails;
