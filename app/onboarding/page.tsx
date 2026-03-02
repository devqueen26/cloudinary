"use client";

import * as React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./actions";

export default function OnboardingComponent() {
  const [error, setError] = React.useState("");
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const res = await completeOnboarding(formData);
    if (res?.message) {
      // Forces a token refresh and refreshes the `User` object
      await user?.reload();
      router.push("/dashboard");
    }
    if (res?.error) {
      setError(res?.error);
    }
  };
  return (
    <div>
      <h1>Welcome</h1>
      <form action={handleSubmit}>
        <div>
          <label>First Name</label>
          <p>Enter your first name.</p>
          <input type="text" name="first_name" required />
        </div>

        <div>
          <label>Last Name</label>
          <p>Enter your last name.</p>
          <input type="text" name="last_name" required />
        </div>
        <div>
          <h2>Account Type</h2>
          <p>Are you a teacher or a student?</p>
          <input type="radio" name="role" value="teacher" required />
          <label>Teacher</label>
          <input type="radio" name="role" value="student" required />
          <label>Student</label>
        </div>
        {error && <p className="text-red-600">Error: {error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
