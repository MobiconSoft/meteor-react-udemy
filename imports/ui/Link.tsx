import * as React from 'react';
import { Accounts } from 'meteor/accounts-base';
// import { withRouter } from 'react-router-dom';

export interface LinkProps {
  history: any;
}

export default class Link extends React.Component<LinkProps, any> {
  onLogout = () => {
    Accounts.logout();
    this.props.history.push('/');
  }

  public render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}

// export default withRouter(Link);
