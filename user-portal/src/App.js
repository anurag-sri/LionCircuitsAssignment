import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UploadPage from './components/UploadPage';
import FileListPage from './components/FileListPage';
import UserProfilePage from './components/UserProfilePage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <LoginPage
              {...props}
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          )}
        />
        <PrivateRoute
          path="/upload"
          component={UploadPage}
          authenticated={authenticated}
        />
        <PrivateRoute
          path="/files"
          component={FileListPage}
          authenticated={authenticated}
        />
        <PrivateRoute
          path="/user-profile"
          component={UserProfilePage}
          authenticated={authenticated}
        />
      </Switch>
    </Router>
  );
};

export default App;
