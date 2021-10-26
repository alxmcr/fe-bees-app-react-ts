import { AddIconProps } from "../../../@types/appPropsTypes";

export const AddIcon = ({
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
        d="M7.5 0C3.36 0 0 3.36 0 7.5 0 11.64 3.36 15 7.5 15c4.14 0 7.5-3.36 7.5-7.5C15 3.36 11.64 0 7.5 0zm3 8.25H8.25v2.25c0 .412-.338.75-.75.75a.752.752 0 01-.75-.75V8.25H4.5a.752.752 0 01-.75-.75c0-.412.338-.75.75-.75h2.25V4.5c0-.412.338-.75.75-.75s.75.338.75.75v2.25h2.25c.412 0 .75.338.75.75s-.338.75-.75.75z"
      />
    </svg>
  );
};
