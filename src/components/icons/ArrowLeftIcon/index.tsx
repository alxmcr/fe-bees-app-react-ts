import { AddIconProps } from "../../../@types/appPropsTypes";

export const ArrowLeftIcon = ({
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
      <path d="M0 7.5A7.5 7.5 0 107.5 0 7.508 7.508 0 000 7.5zm8.03-3.53a.75.75 0 010 1.06L6.31 6.75h4.19a.75.75 0 110 1.5H6.31l1.72 1.72a.75.75 0 01-1.06 1.06l-3-3a.753.753 0 010-1.06l3-3a.75.75 0 011.06 0z" />
    </svg>
  );
};
