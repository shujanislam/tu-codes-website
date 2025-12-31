"use client"
import { useEffect, useState } from "react";
import { createSupabaseBrowser } from "../../lib/supabase/client";
import Unauthorized from "@/components/unauthorized";

const supabase = createSupabaseBrowser();

export default function Authorization() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) setOpen(true);
    };
    check();
  }, []);

  return <Unauthorized open={open} onOpenChange={setOpen} />;
}
