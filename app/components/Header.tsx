import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "~/components/catalyst/button";

export default function Header() {
  const [, copy] = useCopyToClipboard();

  const handleCopyURL = () => {
    if (typeof document !== "undefined") {
      copy(window.location.href);
    }
  };

  const location = useLocation();
  const apiUrl = `/api` + location.pathname + location.search;

  return (
    <header className="fixed z-40 inset-0 bottom-auto bg-white/90 backdrop-blur-lg border-b border-first-100">
      <div className="container mx-auto px-4 flex items-center justify-between h-header">
        <Link
          to="/"
          className="flex flex-col lg:flex-row lg:items-center lg:gap-2"
        >
          <>
            <span className="font-bold text-first-600 text-sm md:text-lg font-mono">
              tints.dev
            </span>
            <span className="font-medium text-first-300 hidden md:block text-xs lg:text-sm">
              Palette Generator + API for Tailwind CSS
            </span>
          </>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button outline onClick={handleCopyURL}>
            <LinkIcon className="size-4" />
            <span className="sr-only">Copy URL</span>
          </Button>
          <Button outline href={apiUrl} target="_blank">
            <CodeBracketIcon className="size-4" />
            <span className="sr-only">API</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
