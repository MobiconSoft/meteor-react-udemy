import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import * as numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
    let rank = 1;

    return players.map((player, index) => {
        if (index !== 0 && players[index - 1].score > player.score) {
            rank++;
        }

        return {
            ...player,
            rank,
            position: numeral(rank).format('0o')
        };
    });
};

if (Meteor.isServer) {
    Meteor.publish('players', () => Players.find());
}