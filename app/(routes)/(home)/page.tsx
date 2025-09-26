import { AdminSidebar } from "@/components/Shared/AdminSidebar";

export default function HomePage() {
  return (
    <div className="flex h-screen">
      {/* This is your sidebar component */}
      <AdminSidebar />

      {/* This is where the main content of your page will go */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}
