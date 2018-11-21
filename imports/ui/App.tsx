import * as React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import { playerService } from './App.service';

interface AppProps {
  players: any;
  loading: boolean;
}

class App extends React.Component<AppProps, any> {
  isLoading() {
    const { players, loading } = this.props;
    if (loading) {
      return <div>loading...</div>
    } else {
      return (
        <React.Fragment>
          <PlayerList players={players} />
          <AddPlayer />
        </React.Fragment>
      )
    }
  }
  render() {
    return (
      <React.Fragment>
        <TitleBar title={'Score Board'} subtitle={'by dowon'}/>
        <div className="wrapper">
        {this.isLoading()}
        </div>
      </React.Fragment>
    );
  }
}

export default withTracker(props => {
  const handle = Meteor.subscribe('players'); 
  return {
    players: playerService.getPlayers({}),
    loading: !handle.ready()
  }
})(App);
