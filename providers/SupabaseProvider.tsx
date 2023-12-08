"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "@/types_db";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  // Use environment variables for Supabase URL and anonymous key
  const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );

  // Use createClientComponentClient to create the component client
  const componentClient = createClientComponentClient(supabaseClient);

  return (
    <SessionContextProvider supabaseClient={componentClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
