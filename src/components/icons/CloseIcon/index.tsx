import { AddIconProps } from "../../../@types/appPropsTypes";

export const CloseIcon = ({
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
        d="M8.918 5.025L7.5 6.442 6.082 5.026a.747.747 0 10-1.057 1.057L6.442 7.5 5.026 8.918a.747.747 0 101.057 1.057L7.5 8.557l1.418 1.418a.747.747 0 101.057-1.057L8.557 7.5l1.418-1.418a.747.747 0 000-1.057.76.76 0 00-1.057 0zM7.5 0A7.493 7.493 0 000 7.5C0 11.648 3.353 15 7.5 15c4.148 0 7.5-3.352 7.5-7.5C15 3.353 11.648 0 7.5 0zm0 13.5c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6z"
      />
    </svg>
  );
};
