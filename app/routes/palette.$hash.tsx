import { useLoaderData } from "react-router";

import Generator from "~/components/Generator";
import { getSanityData } from "~/lib/getSanityData";
import { deserializePalettes } from "~/lib/paletteHash";

import type { Route } from "./+types/palette.$hash";

export const loader = async ({ params }: Route.LoaderArgs) => {
  if (!params?.hash) {
    throw new Response(`No Hash Provided`, {
      status: 404,
      statusText: `Link structure must be /palette/:hash`,
    });
  }

  const palettes = deserializePalettes(params.hash);

  if (!palettes) {
    throw new Response(`Invalid Hash`, {
      status: 404,
      statusText: `The provided hash is invalid or corrupted`,
    });
  }

  const [about] = await Promise.all([getSanityData()]);

  return {
    palettes,
    about
  };
};

export default function PaletteHash() {
  const { palettes, about } = useLoaderData<typeof loader>();

  if (!palettes?.length) {
    return null;
  }

  return <Generator palettes={palettes} about={about} />;
}
