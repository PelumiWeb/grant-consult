import React from 'react'

type Props = {
    message: any
}

const ErrorMessage = (props: Props) => {
  return (
    <div className="flex items-center my-1">
      <div className="w-[15px] h-[15px]">
        <img
          src="/errorIcon.svg"
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
      <p className="text-errorColor text-[12px]  font-medium leading-[17px] ml-2">
        {props.message}
      </p>
    </div>
  );
}

export default ErrorMessage