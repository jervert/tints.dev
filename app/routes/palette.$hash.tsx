import { useLoaderData } from "react-router";

import Generator from "~/components/Generator";
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

  return {
    palettes,
  };
};

export default function PaletteHash() {
  const { palettes } = useLoaderData<typeof loader>();

  if (!palettes?.length) {
    return null;
  }

  return <Generator palettes={palettes} />;
}
