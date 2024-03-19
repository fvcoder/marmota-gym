import {
  Button,
  Link as LinkUI,
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "@remix-run/react";

const menuItems = [
  { name: "Instructores", link: "/instructor" },
  { name: "Cursos", link: "/course" },
  { name: "Blog", link: "/blog" },
];

export function Navbar() {
  return (
    <NavbarUI shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Marmota Gym</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((x, i) => (
          <NavbarItem key={`navbar-public-${i}`}>
            <LinkUI as={Link} color="foreground" href={x.link}>
              {x.name}
            </LinkUI>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} to="" color="primary" variant="flat">
            Iniciar Sesion
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NavbarUI>
  );
}
