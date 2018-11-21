import * as React from 'react';
import { playerService } from './App.service';

export interface PlayerProps {
    player: any;
}

export default class Player extends React.Component<PlayerProps, any> {
  public render() {
      const { player } = this.props;
      let itemClassName = `item item--position-${player.rank}`;
      return (<div key={player._id} className={itemClassName}>
          <div className="player">
            <div>
                <h3 className="player__name">{player.name}</h3>
                <p className="player__stats">
                {player.rank} {player.position} {player.score} point(s),
                </p>
            </div>
            <div className="player__actions">
                <button className="button button--round" onClick={() => playerService.updatePlayer({ _id: player._id, score: -1 })}> -1 </button>
                <button className="button button--round" onClick={() => playerService.updatePlayer({ _id: player._id, score: 1 })}> +1 </button>
                <button className="button button--round" onClick={() => playerService.removePlayer({ _id: player._id })}> x </button>
            </div>
          </div>
      </div>);
  }
}