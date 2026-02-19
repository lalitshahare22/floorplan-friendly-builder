import { Home, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-heading text-foreground">
            Brick<span className="text-primary">&</span>Bolt
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <MapPin className="h-4 w-4" />
            Other Cities
          </a>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Phone className="h-4 w-4" />
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
