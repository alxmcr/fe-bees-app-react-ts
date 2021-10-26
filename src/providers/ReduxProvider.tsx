import { Provider } from "react-redux";
import { ReduxProviderProps } from "../@types/appReduxTypes";
import { reduxStore } from "../redux/store";

export const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};
