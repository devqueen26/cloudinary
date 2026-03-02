import { Logo } from "@/components/header/logo";
import { NavMenu } from "@/components/header/nav-menu";
import { NavigationSheet } from "@/components/header/navigation-sheet";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="h-16 bg-background">
      <nav className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {/* Show the sign-in and sign-up buttons when the user is signed out */}
          <SignedOut>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal">
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          {/* Show the user button when the user is signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>

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
