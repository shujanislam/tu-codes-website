"use server";

import { createSupabaseServer } from "./supabase/server";

export async function createProject(
  title: string,
  description: string,
  image_url: string
) {
  const supabase = await createSupabaseServer();

  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("projects")
    .insert([
      {
        title,
        description,
        image_url,
        owner: userData.user.user_metadata.display_name, 
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}
