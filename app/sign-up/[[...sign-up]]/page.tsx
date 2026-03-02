import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <SignUp />
    </div>
  );
}
