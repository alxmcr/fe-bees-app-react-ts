import { AppOverlayProps } from "../../../@types/appPropsTypes";
import "./AppOverlay.scss"

export const AppOverlay = ({ showOverlay, children }: AppOverlayProps) => {
  const classContainer = showOverlay ? `overlay overlay--show` : `overlay`;

  return <section className={classContainer}>{children}</section>;
};
