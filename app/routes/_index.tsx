import type { MetaFunction } from "@remix-run/cloudflare";

import { LayoutPublic } from "@/components/layout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <LayoutPublic>
      <header className="w-full max-w-5xl px-4 mx-auto grid gap-4 grid-cols-4">
        <div className="col-span-2 col-start-2 py-10">
          <h1 className="text-5xl font-semibold text-balance text-left w-1/2">
            No pares hasta que estes orgulloso
          </h1>
        </div>
        <div className="row-start-2 text-center">sa</div>
        <div className="row-start-2 text-center">sa</div>
        <div className="row-start-2 text-center">sa</div>
      </header>
    </LayoutPublic>
  );
}
