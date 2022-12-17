import React, { useContext } from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceList.css";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams } from "react-router-dom";

const PlaceList = (props) => {
  const auth = useContext(AuthContext);
  const userId = useParams().userId;
  if (auth.userId !== userId && props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2> This user does not have any places</h2>
          <Button to="/allusers">Back to All Users</Button>
        </Card>
      </div>
    );
  }

  if (auth.userId === userId && props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2> No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
