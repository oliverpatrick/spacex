import React from "react";
import { useQuery } from "react-query/react";
import Slide from "../components/Slide/Slide";
import { getRequest } from "../utils/axios";
import useGetReactQueryAndAxios from "../utils/hooks/useAPI";

type Props = {};

function LaunchesPage({}: Props) {
  const {
    data: launches,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["launches"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v4/launches").then((res) => res.json()),
  });

  // change to axios and make hook
  // const {
  //   data: launches,
  //   isLoading,
  //   isError,
  //   error,
  // } = useGetReactQueryAndAxios("launches", "/launches", true);

  console.log(launches);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!launches || isError) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (
    <div>
      <h2>Launches</h2>
      {launches.map(({ id, name, links, details }: any) => (
        <Slide
          key={id}
          id={id}
          name={name}
          imageSrc={
            links.patch.large ??
            "https://images2.imgbox.com/40/e3/GypSkayF_o.png"
          }
          description={details}
        />
      ))}
    </div>
  );
}

export default LaunchesPage;
