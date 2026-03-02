import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <SignIn />
    </div>
  );
}
