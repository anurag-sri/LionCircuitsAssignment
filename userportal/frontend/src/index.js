// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UploadPage from './components/UploadPage';
import FileListPage from './components/FileListPage';
import PortalDetailsPage from './components/PortalDetailsPage';
import UserProfilePage from './components/UserProfilePage';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/upload" component={UploadPage} />
    <Route exact path="/files" component={FileListPage} />
    <Route exact path="/portal-details" component={PortalDetailsPage} />
    <Route exact path="/user-profile" component={UserProfilePage} />
  </Router>,
  document.getElementById('root')
);
