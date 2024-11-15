import { Button } from "antd";
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
  icon?: ReactNode | Icon | null;
  iconPosition?: "start" | "end" | undefined;
};

const CustomButton = ({
  title,
  loading,
  IconLeft,
  textColor,
  backgrounColor,
  borderColor,
  width,
  height,
  onClick,
  radius,
  iconRight,
  icon,
  iconPosition="start"
}: Props) => {
  // bg-gradient-to-b from-[#FD32B2] to-[#F2D4E7]
  // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500

  return (
    <Button
      icon={icon && (icon as React.ReactNode)}
      iconPosition={iconPosition}
      onClick={onClick}
      className={`
        ${backgrounColor ? backgrounColor : "bg-buttonPrimary"} 
         ${width ? width : "w-[640px]"} ${height ? height : "h-full"} border ${
        borderColor ? borderColor : "border-none"
      }  flex items-center justify-center p-4 ${
        radius ? radius : "rounded-[10px]"
      }   text-center text-white font-mono cursor-pointer `}>
      {IconLeft && <img src={IconLeft} className="mr-2" />}
      <p className={`${textColor ? textColor : "text-white"} `}>{title}</p>
      {iconRight && iconRight}
    </Button>
  );
};

export default CustomButton;
