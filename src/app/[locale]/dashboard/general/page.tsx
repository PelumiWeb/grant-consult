"use client";
import React from "react";
import GeneralDashboardHome from "../components/GeneralDashboard/GeneralDashboardHome";
import { useApiQuery } from "../../utils/useApi";
import endpoints from "../../../../../lib/endpoints";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setUser } from "../../../../../lib/features/User/userSlice";

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  // const user =
  const { data, isPending } = useApiQuery<any>(["users"], `${endpoints.getMe}`);

  console.log(data && data.data, "data");

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     //  data && dispatch(setUser({user: data.data}))
  //   };

  //   fetchData();
  // }, []);

  console.log(data?.data, "from General Home");
  return <GeneralDashboardHome />;
};

export default page;
