import { redirect } from "next/navigation";
import useHandleNavigation from "./[locale]/utils/HandleNavigation";

export default function RootPage() {
  const handleNavigation = useHandleNavigation();
  handleNavigation("/en");
}
