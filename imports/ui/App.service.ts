import { Players, calculatePlayerPositions } from '../api/players';

class PlayerService {

    constructor() {
        console.log('new PlayerService()');
    }

    getPlayers(opts: any) {
        return calculatePlayerPositions(Players.find(opts).fetch());
    }
    
    addPlayer(player: any) {
        return Players.insert(player);
    }

    removePlayer({_id}) {
        return Players.remove({_id});
    }

    updatePlayer ({_id, score}) {
        return Players.update(_id, { $inc: {score}});
    }
}

export const playerService = new PlayerService();
