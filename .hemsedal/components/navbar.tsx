"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Om", href: "/" },
    { name: "Overnatting", href: "/overnatting" },
    { name: "Campingplassen", href: "/campingplassen" },
    { name: "Aktivitetar", href: "/aktivitetar" },
    { name: "Kontakt oss", href: "/kontakt" }
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Uždarome mobilų meniu paspaudus nuorodą
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">
          Hemsedal Fjellcamp</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Om
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/overnatting" aria-current="page">
          Overnatting
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/campingplassen">
          Campingplassen
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/aktivitetar">
          Aktivitetar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/kontakt-oss">
          Kontakt oss
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" >
        <ThemeSwitch />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
          Bestill nå
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
              onClick={handleMenuItemClick} // Pridedame click event handler
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}