import { useLoaderData } from "react-router";

import Generator from "~/components/Generator";
import { META } from "~/lib/constants";
import { isHex, isValidName } from "~/lib/helpers";
import {
  createCanonicalUrl,
  createPaletteFromNameValue,
  createPaletteMetaImageUrl,
  createRedirectResponse,
} from "~/lib/responses";

import type { Route } from "./+types/$name.$value";

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  // In production, the assets directory was running this loader
  const isServingFromAssets = params?.name === "assets";

  if (!isServingFromAssets) {
    if (!params?.name) {
      throw new Response(`No Color Name`, {
        status: 404,
        statusText: `Link structure must be ${META.origin}/:name/:value`,
      });
    } else if (!params?.value) {
      throw new Response(`No Hex Value`, {
        status: 404,
        statusText: `Link structure must be ${META.origin}/:name/:value`,
      });
    } else if (!isValidName(params?.name)) {
      throw new Response(`Invalid Color Name`, {
        status: 406,
        statusText:
          "Color names must only use lower and uppercase letters, between 3-24 characters",
      });
    } else if (!isHex(params?.value)) {
      throw new Response(`Invalid Hex Value`, {
        status: 406,
        statusText:
          "Color must be a valid hexadecimal value, six characters long, without a leading #",
      });
    }
  }

  const palette = createPaletteFromNameValue(params.name, params.value);

  if (palette) {
    // Redirect to the new hash-based URL
    return createRedirectResponse(request, palette);
  }

  return {
    palettes: palette ? [palette] : [],
  };
};

export default function Index() {
  const { palettes } = useLoaderData<typeof loader>();

  if (!palettes?.length) {
    return null;
  }

  const { url, width, height } = createPaletteMetaImageUrl(palettes[0]);
  const canonicalUrl = createCanonicalUrl(palettes);

  return (
    <>
      <meta name="og:url" content={canonicalUrl} />
      <meta name="og:image:width" content={String(width)} />
      <meta name="og:image:height" content={String(height)} />
      <meta name="og:image" content={url} />
      {palettes?.length ? <Generator palettes={palettes} /> : null}
    </>
  );
}
