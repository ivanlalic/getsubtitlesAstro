/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SUPABASE_URL: string;
    readonly SUPABASE_ANON_KE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}