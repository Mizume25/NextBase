"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoApp from "./core/LogoApp";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/main`,
        },
      });
      if (error) throw error;
      router.push("/auth/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        {/* Logo de la app aquí*/} 
        <CardHeader className="pb-2 pt-4">
          <LogoApp className="w-24 h-24 mx-auto mb-1 object-contain" />
          <CardTitle className="text-2xl">Registro</CardTitle>
          <CardDescription>Date de alta a NextBase</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[#1E3A5F] bg-[#0A0F1E] text-white placeholder:text-[#64748B] focus-visible:ring-[#3B82F6]"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white">Contraseña</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-[#1E3A5F] bg-[#0A0F1E] text-white placeholder:text-[#64748B] focus-visible:ring-[#3B82F6]"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="repeat-password" className="text-white">Confirma Contraseña</Label>
                </div>
                <Input
                  id="repeat-password"
                  type="password"
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  className="border-[#1E3A5F] bg-[#0A0F1E] text-white placeholder:text-[#64748B] focus-visible:ring-[#3B82F6]"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full hover:bg-blue-900 hover:text-white cursor-pointer" disabled={isLoading}>
                {isLoading ? "Creating an account..." : "Registrate"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿Ya tienes una cuenta creada?{" "}
              <Link href="/auth/login" className="text-[#3B82F6] underline underline-offset-4 ">
                Iniciar Session
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
