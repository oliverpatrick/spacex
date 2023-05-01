import React from "react";
import Slide from "../components/Slide/Slide";
import { useQuery } from "react-query";

type Props = {};

function RocketsPage({}: Props) {
  const {
    data: rockets,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rockets"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v4/rockets").then((res) => res.json()),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <pre>{JSON.stringify(isError)}</pre>;
  }

  return (
    <div>
      <h2>Rockets</h2>
      {rockets.map(({ id, name, flickr_images, description }: any) => (
        <Slide
          key={id}
          id={id}
          name={name}
          imageSrc={flickr_images[0]}
          description={description}
        />
      ))}
    </div>
  );
}

export default RocketsPage;
