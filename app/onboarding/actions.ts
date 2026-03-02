"use server";

import { createClient } from "@/supabase/server";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";

export const completeOnboarding = async (formData: FormData) => {
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated) {
    return { message: "No signed-in user" };
  }

  const clerk = await clerkClient();
  const supabase = await createClient();
  const user = await currentUser();

  if (!user) {
    return { message: "No signed-in user" };
  }
  const firstName = formData.get("first_name") as string;
  const lastName = formData.get("last_name") as string;
  const role = formData.get("role") as string;

  try {
    console.log(user);
    await clerk.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        firstName: firstName,
        lastName: lastName,
        role: role,
      },
    });

    if (role === "student") {
      const { data, error } = await supabase.from("students").insert([
        {
          clerk_user_id: userId,
          first_name: firstName,
          last_name: lastName,
          role: role,
          email: user.emailAddresses[0].emailAddress,
        },
      ]);
      if (error) {
        console.error(error);
        return { error: "There was an error inserting the teacher data." };
      }
      return { message: "Onboarding complete", data };
    } else if (role === "teacher") {
      const { data, error } = await supabase.from("teachers").insert([
        {
          clerk_user_id: userId,
          first_name: firstName,
          last_name: lastName,
          role: role,
          email: user.emailAddresses[0].emailAddress,
        },
      ]);
      if (error) {
        console.error(error);
        return { error: "There was an error inserting the teacher data." };
      }
      return { message: "Onboarding complete", data };
    } else {
      return { message: "Invalid role selected" };
    }
  } catch (err) {
    console.error(err);
    return { error: "There was an error updating the user metadata." };
  }
};
