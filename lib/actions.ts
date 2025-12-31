"use server";

import { createSupabaseServer } from "./supabase/server";

export async function createProject(
  title: string,
  github_link: string,
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
        github_link,
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

export async function deleteProject(projectId: string | number) {
  const supabase = await createSupabaseServer();

  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error("User not authenticated");

  // First, get the project to check ownership
  const { data: project, error: fetchError } = await supabase
    .from("projects")
    .select("owner")
    .eq("id", projectId)
    .single();

  if (fetchError) throw new Error("Project not found");

  // Check if the current user is the owner
  if (project.owner !== userData.user.user_metadata.display_name) {
    throw new Error("You can only delete your own projects");
  }

  // Delete the project
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);

  if (error) throw new Error(error.message);

  return { success: true };
}

export const registerEvent = async(event_name: string) => {
  const supabase = await createSupabaseServer();

  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) throw new Error("User not authenticated");


  const { data: checkUserRegistered, error: err} = await supabase.from('rsvpEvents').select('name, event_name').eq('name', userData.user.user_metadata.display_name).eq('event_name', event_name).limit(1);

  if(err){
    throw err;
  } 

  if(checkUserRegistered.length > 0){
    return `User already registered for the event ${event_name}`;
  }

  const { data, error } = await supabase.from("rsvpEvents").insert([{ name: userData.user.user_metadata.display_name, event_name },]).select().single();

  if(error) throw new Error('Failed to register to the event');

  return `Registration done successfully!`;
}
