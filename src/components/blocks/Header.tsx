import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/data-fetching",
    label: "Data Fetching",
  },
];

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 glass bg-amber-50 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* <a href="#" className="text-2xl font-bold text-primary">
            A.I.M
          </a> */}
          {/* Desktop Menu */}
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-bold text-xs text-stone-500 text-muted-foreground hover:text-foreground transition-smooth"
              >
                {item.label}
              </Link>
            ))}
          </div>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Header;
