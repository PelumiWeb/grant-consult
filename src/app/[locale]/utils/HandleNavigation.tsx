"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

const useHandleNavigation = () => {
  const router = useRouter();
  const locale = useLocale();
  const lastNavigatedPath = useRef<string | null>(null);

  const handleNavigation = useCallback(
    (path: string | undefined, redirect?: (path: string) => void) => {
      if (!path) return;

      const targetPath = path.startsWith(`/${locale}`)
        ? path
        : `/${locale}${path}`;

      // Check if already on the target path
      const currentPath = window.location.pathname; // Get current path
      if (
        lastNavigatedPath.current === targetPath ||
        currentPath === targetPath
      ) {
        return;
      }

      // Cache the current path to prevent redundant navigations
      lastNavigatedPath.current = targetPath;

      // Perform routing
      if (redirect) {
        redirect(targetPath);
      } else {
        router.push(targetPath);
      }
    },
    [locale, router] // Dependencies
  );

  return handleNavigation;
};

export default useHandleNavigation;
