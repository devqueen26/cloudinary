import { Button } from "@/components/ui/button";
import { Logo } from "@/components/header/logo";
import { NavMenu } from "@/components/header/nav-menu";
import { NavigationSheet } from "@/components/header/navigation-sheet";

const Header = () => {
  return (
    <header className="h-16 bg-background">
      <nav className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button className="hidden sm:inline-flex" variant="outline">
            Sign In
          </Button>
          <Button>Get Started</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
