"use client";
import React from "react";
import { useAppSelector } from "../../../../../lib/hooks";
import { userTypeName } from "../../utils/types/userTypes";
import FavouritesGeneral from "./components/FavouritesGeneral";
import FavouritesConsultant from "./components/FavouritesConsultant";
import FavouritesGrantor from "./components/FavouritesGrantor";

type Props = {};

const MyFavourites = (props: Props) => {
  const { user } = useAppSelector((data) => data.user);

  const renderScreens = (userType: string | undefined) => {
    switch (userType) {
      case userTypeName.general:
        return <FavouritesGeneral />;
        break;
      case userTypeName.consultant:
        return <FavouritesConsultant />;
        break;
      default:
        return <FavouritesGrantor />;
    }
  };
  return (
    <div className="w-full h-full">{renderScreens(user?.role)};</div>
  );
};

export default MyFavourites;
