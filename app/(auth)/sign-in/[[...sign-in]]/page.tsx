import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div>
      <SignIn />
    </div>
  );
}
