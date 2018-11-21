import * as React from 'react';
import { playerService } from './App.service'; 

export interface IAddPlayProps {
}

export default class AddPlayer extends React.Component<IAddPlayProps, any> {
    handleSubmit = (e: any) => {
        e.preventDefault();
        let playerName = e.target.playerName.value;
        if (playerName) {
            e.target.playerName.value = '';
            playerService.addPlayer({ name: playerName, score: 0 });
        }
    }

    public render() {
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form__input" type="text" name="playerName" placeholder="player name" />
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}
