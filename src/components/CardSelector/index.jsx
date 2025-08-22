import TeamsList from "../Teams";
import PlayerList from "../Players";
import RegisterPlayer from "../RegisterPlayer";
import Randomizer from "../Randomizer";

const CardSelector = () => {
    return (
        <main className="min-h-screen bg-gray-800 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-white mb-6">Montar Times</h1>
            <RegisterPlayer />
            <PlayerList />
            <Randomizer />
            <TeamsList />
        </main>
    );
};

export default CardSelector;
