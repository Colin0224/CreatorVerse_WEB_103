import { createClient } from "@supabase/supabase-js";
const URL = "https://ubugskkokpyqssvvsnbn.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVidWdza2tva3B5cXNzdnZzbmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxODMzMjcsImV4cCI6MjAzOTc1OTMyN30.l2bKa8o8cC3OfbMSfM3Nb0dq8LAgS-YGC_fuUDvQZyU";
export const supabase = createClient(URL, API_KEY);

