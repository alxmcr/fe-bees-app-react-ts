import { Route, Switch } from "react-router";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";

export const AppRouting = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contacts/:id" component={ContactPage} />
    </Switch>
  );
};
