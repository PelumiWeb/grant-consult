"use client";
import React from "react";
import GeneralDashboardHome from "../components/GeneralDashboard/GeneralDashboardHome";
import { useApiQuery } from "../../utils/useApi";
import endpoints from "../../../../../lib/endpoints";
import { useAppSelector } from "../../../../../lib/hooks";

type Props = {};

const page = (props: Props) => {
  const user = useAppSelector((state) => state.user.user);

  // const user =
  const { data, isPending } = useApiQuery(["users"], `${endpoints.getMe}`);
  return <GeneralDashboardHome />;
};

export default page;
