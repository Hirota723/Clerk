import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b">
      <div className="w-full px-4 h-16 flex items-center justify-end">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
