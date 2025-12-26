import "server-only";
import { createSupabaseServer } from "./supabase/server";

export const fetchProjects = async() => {
  try{
    const supabase = await createSupabaseServer();

    const { data, error } = await supabase.from("projects").select("id, title, description, image_url, owner, created_at").order("created_at", {ascending: false});

    if(error) throw new Error(error.message);

    return data; 
  }
  catch(err: any){
    console.log(err.message);
    return []; 
  }
}
