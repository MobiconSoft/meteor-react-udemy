import * as React from 'react';
import Player from './Player';
import * as FlipMove from 'react-flip-move';

export interface PlayerListProps {
    players: any[]
}

export default class PlayerList extends React.Component<PlayerListProps, any> {
    renderPlayers() {
        const { players } = this.props;
        if (players.length === 0) {
            return (<div className="item"><p className="item__message">Add your first player</p></div>);
        } else {
            return players.map((player) => <Player key={player._id} player={player} />);
        }
    }

    render() {
        return (
            <FlipMove>
                {this.renderPlayers()}
            </FlipMove>
        ); 
    }
}
