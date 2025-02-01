import React from "react";

type Props = {
  data: {};
};

const MobileCustomTable = (props: Props) => {
  const dataObject: any = props.data;
  return (
    <div className="block md:hidden w-full p-4 mx-h-[280px] border border-borderColor m-2">
      {Object.keys(dataObject).map((data) => {
        const CustomContent = dataObject?.[data].CustomContent;
        const value = dataObject?.[data].value;

        return (
          <div className="flex items-center justify-between my-2">
            <p className="font-mono font-medium text-[14px] leading-[22px] text-newPrimaryTextColor capitalize">
              {data}
            </p>
            {CustomContent ? (
              <CustomContent />
            ) : (
              <p className="font-mono font-semibold  text-[14px] leading-[22px] text-newPrimaryTextColor w-[180px] text-right">
                {value}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MobileCustomTable;
