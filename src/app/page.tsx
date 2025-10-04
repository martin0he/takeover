import Typewriter from "./Typewriter";
import StyledButton from "./StyledButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center justify-center row-start-2">
        <h1 className="text-9xl font-bold text-center">Takeover </h1>
        <div className="text-center w-full">
          <Typewriter
            strings={[
              "Regain control of your life.",
              "Organize all your calendars and tasks in one centralized hub.",
            ]}
            loop={true}
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <StyledButton label="Get Started" navigateTo="/calendar" />
      </footer>
    </div>
  );
}
