import { AddIconProps } from "../../../@types/appPropsTypes";

export const ArrowRightIcon = ({
  className = "",
  width = 40,
  height = 40,
}: AddIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 7.5A7.5 7.5 0 107.5 15 7.509 7.509 0 0015 7.5zm-8.03 3.53a.75.75 0 010-1.06l1.72-1.72H4.5a.75.75 0 010-1.5h4.19L6.97 5.03a.75.75 0 011.06-1.06l3 3a.753.753 0 010 1.06l-3 3a.75.75 0 01-1.06 0z"
      />
    </svg>
  );
};
