import React from "react";
import LayOut from "../components/Layout/layout";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import TwittHash from "./../pages/twitByHashTag/twittHash";
import TwittByUser from "./../pages/twittByUser/twittUser";
import MainSide from "./../components/mainSide/MainSide";
import Auth from "./../pages/auth/Auth";
import { TwittProvider } from "../context/twittContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublickRoute path={"/login"} component={Auth} />
          <PrivateRoute
            path={"/"}
            render={() => {
              return (
                <TwittProvider>
                  <LayOut>
                    <Switch>
                      <Route path="/hashtags" component={TwittHash} />
                      <Route path="/usertwitt" component={TwittByUser} />
                      <Route exact path="/" component={MainSide} />
                    </Switch>
                    ;
                  </LayOut>
                </TwittProvider>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

const isLogin = () => !!localStorage.getItem("x-auth-token");

const PublickRoute = ({ component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) {
          return <Redirect to={"/"} />;
        } else {
          return React.createElement(component, props);
        }
      }}
    />
  );
};

const PrivateRoute = ({ render, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) {
          return render(props);
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
};
export default App;
