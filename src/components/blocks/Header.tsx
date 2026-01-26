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
  {
    href: "/next-isr",
    label: "Next ISR",
  },
  {
    href: "/load-bulk-products",
    label: "Server Data & Search 20k Data",
  },
  {
    href: "/client-load-bulk-products",
    label: "Client Data & Search 20k Data",
  },
];

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 glass bg-amber-50 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
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
