import { redirect } from "next/navigation";

export const metadata = {
  description: 'FOMO Tech - Register Page',
  title: 'FOMO Tech - Register Page',
}

export default function page() {
  redirect("/register/student");
}
