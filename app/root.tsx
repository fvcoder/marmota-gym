import { NextUIProvider } from "@nextui-org/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useNavigate,
} from "@remix-run/react";

import styles from "./tailwind.css";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{ rel: "stylesheet", href: styles },
];

export default function App() {
	const navigate = useNavigate();

	return (
		<html lang="es">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<NextUIProvider locale="es" navigate={navigate}>
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</NextUIProvider>
			</body>
		</html>
	);
}
