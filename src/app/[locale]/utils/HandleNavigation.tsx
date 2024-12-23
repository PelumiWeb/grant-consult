import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useHandleNavigation = () => {
  const router = useRouter();
  const locale = useLocale();
  
  const handleNavigation = (path: string) => {
    const targetPath = path.startsWith(`/${locale}`)
      ? path
      : `/${locale}${path}`;
    router.push(targetPath);
  };
  return handleNavigation;
};

export default useHandleNavigation;
