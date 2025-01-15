"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useHandleNavigation = () => {
  const router = useRouter();
  const locale = useLocale();

  const handleNavigation = useCallback(
    (path: string | undefined) => {
      if (!path) return;

      const targetPath = path.startsWith(`/${locale}`)
        ? path
        : `/${locale}${path}`;

      // Prevent unnecessary navigation if already on the target path
      router.push(targetPath);
    },
    [router, locale] // Dependencies
  );

  return handleNavigation;
};

export default useHandleNavigation;
