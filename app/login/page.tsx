import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-6">
      <AuthCard
        title="Welcome Back"
        description="Sign in to continue to AutoFlow AI."
      >
        <LoginForm />
      </AuthCard>
    </main>
  );
}