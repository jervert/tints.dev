import { PortableText } from "@portabletext/react";

export function Prose() {
  return (
    <div className="prose prose-a:text-first-500 prose-headings:tracking-tight prose-headings:text-pretty">
      <h1>Palette Generator and API for Tailwind CSS</h1>
      <p>
        Read the{" "}
        <a href="https://www.simeongriggs.dev/using-the-tailwind-css-palette-generator-and-api">
          launch blog post for full details
        </a>{" "}
        on how this works.
      </p>
      <h2>Palette Creator</h2>
      <p>
        Set the initial <strong>Value</strong> as a valid hexadecimal colour. By
        default this is stop 500, but it can be changed to any stop from 50-950.
      </p>
      <p>
        For colours that have 100% <strong>Saturation</strong>, make the Palette
        more interesting by shifting the <strong>Hue</strong> up or down.
      </p>
      <p>
        Palettes starting from a Base colour with little{" "}
        <strong>Saturation</strong> get more interesting by increasing{" "}
        <strong>Saturation</strong> at the extremes.
      </p>
      <p>
        Shift the <strong>Minimum/Maximum</strong>&nbsp;
        <strong>Lightness/Luminance</strong> to spread out the rest of the
        colours to the extremes of white and black. Switch between Lightness and
        Luminance to produce a different spread of colours at the extremes.
      </p>
      <p>
        These principles are inspired by the excellent{" "}
        <a href="https://refactoringui.com/book/">Refactoring UI</a> book by
        Adam Wathan &amp; Steve Schoger. The same book recommends against
        automated tools, just like this one!
      </p>
      <p>This tool exists to fast-track the creation of new palettes.</p>
      <h2>Palette API</h2>
      <p>
        Any set of Palettes can be fetched via an API. You may find this useful
        for design tools that need to generate a 50-950 Palette from just a
        single Hex value.
      </p>
      <p>
        Currently, the API will only return a Palette using the base hex value,
        with no options to have HSL tweaks.
      </p>
      <h2>Credits</h2>
      <p>
        Made by <a href="https://simeongriggs.dev/">Simeon Griggs</a>, modified
        by arr2019
      </p>
      <ul>
        <li>
          Designed with <a href="https://tailwindcss.com/">Tailwind CSS</a>{" "}
          (obvs){" "}
          <ul>
            <li>
              with a sprinkling of{" "}
              <a href="https://headlessui.dev/">Headless UI</a>
            </li>
            <li>
              and a dash of <a href="https://heroicons.com/">HeroIcons</a>
            </li>
          </ul>
        </li>
        <li>
          Built with <a href="https://reactrouter.com">React Router</a>
        </li>
      </ul>
    </div>
  );
}
