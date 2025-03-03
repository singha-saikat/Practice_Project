/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { initialTravelPlan } from "../assets/data/updatedPlaces";

const PlacesTree = ({
  placeId,
  placesById,
  parentId,
  handleChangeComplete,
}) => {
  const place = placesById[placeId];
  const childIds = place.childIds;
  return (
    <li className="my-2">
      <span className="font-medium text-gray-800">{place.title}</span>
      <button
        onClick={() => handleChangeComplete(placeId, parentId)}
        className="border border-spacing-1 border-red-400 rounded-md m-1 p-1"
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol className="ml-6 mt-2 list-decimal space-y-2 pl-4">
          {childIds?.map((id) => (
            <PlacesTree
              key={id}
              placeId={id}
              placesById={placesById}
              handleChangeComplete={handleChangeComplete}
              parentId={placeId} 
            />
          ))}
        </ol>
      )}
    </li>
  );
};

const TravelPlan = () => {
  const [places, setPlaces] = useState(initialTravelPlan);
  const root = places[0];
  const planetsIds = root.childIds;
  const handleChangeComplete = (childId, parentId) => {
    const parent = places[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlaces({
      ...places,
      [parentId]: nextParent,
    });
  };
  return (
    <div className="max-w-2xl mx-auto p-6  shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Places to visit</h2>
      <ol className="list-decimal space-y-2 pl-6">
        {planetsIds.map((id) => (
          <PlacesTree
            key={id}
            placeId={id}
            placesById={places}
            handleChangeComplete={handleChangeComplete}
            parentId={0}
          />
        ))}
      </ol>
    </div>
  );
};

export default TravelPlan;
