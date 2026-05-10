import { SignUpForm } from "@/components/sign-up-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[url('/img/Fondo-Login.jpg')] bg-no-repeat bg-cover bg-center bg-fixed backdrop-blur-sm bg-black/90">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
