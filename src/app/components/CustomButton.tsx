import { Button, ConfigProvider } from "antd";
import React, { MouseEvent, ReactNode } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { ExpandIconPosition } from "antd/es/collapse/Collapse";

type Props = {
  title: string;
  loading?: boolean;
  IconLeft?: string;
  textColor?: string;
  backgrounColor?: string;
  borderColor?: string;
  width?: string;
  height?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  radius?: string;
  iconRight?: string;
};

const CustomButton = ({
  title,
  loading,
  IconLeft,
  textColor,
  backgrounColor = "bg-buttonPrimary",
  borderColor = "border-none",
  width = "w-[640px]",
  height = "h-full",
  onClick,
  radius = "rounded-[10px]",
  iconRight,
}: Props) => {
  // bg-gradient-to-b from-[#FD32B2] to-[#F2D4E7]
  // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500

  return (
    <button
      // icon={icon && (icon as React.ReactNode)}
      // iconPosition={iconPosition}
      onClick={onClick}
      className={`
        ${backgrounColor} 
         ${width} ${height} border ${borderColor}  flex items-center justify-center p-4 ${radius}   text-center text-white font-mono cursor-pointer 
           `}>
      {IconLeft && <img src={IconLeft} className="mr-2" />}
      <p className={`${textColor ? textColor : "text-white"} `}>{title}</p>
      {iconRight && <img src={iconRight} className="ml-2" />}
    </button>
  );
};

export default CustomButton;
