"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

const useHandleNavigation = () => {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const handleNavigation = (path: string | undefined) => {
    const targetPath = path?.startsWith(`/${locale}`)
      ? path
      : `/${locale}${path}`;
    startTransition(() => {
      router.push(targetPath);
    });
  };
  return handleNavigation;
};

export default useHandleNavigation;
