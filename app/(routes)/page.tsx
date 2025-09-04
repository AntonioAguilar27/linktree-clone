import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Button>Hello perplex</Button>
      <Navbar />
    </div>
  );
}
