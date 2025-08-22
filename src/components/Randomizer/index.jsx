import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPlayers, generateTeams } from "../../store/Players";


const Randomizer = () => {
    const dispatch = useDispatch();

    const [numTeams, setNumTeams] = useState(4);
    const players = useSelector((state) => state.players.list);

    const handleGenerateTeams = () => {
        if (players.length < 2) return alert("Adicione mais jogadores!");
        dispatch(generateTeams(numTeams));
    };

    const handleClear = () => {
        dispatch(clearPlayers());
    };
    return (
        <div className="flex gap-2 mb-6">
            <input
                type="number"
                min="2"
                max={4}
                value={numTeams}
                onChange={(e) => setNumTeams(Number(e.target.value))}
                className="p-2 rounded border border-gray-400 w-20 text-center text-white font-bold"
            />
            <button
                onClick={handleGenerateTeams}
                className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
            >
                Gerar Times
            </button>
            <button
                onClick={handleClear}
                className="bg-red-800 text-white px-4 py-2 rounded cursor-pointer"
            >
                Limpar
            </button>
        </div>
    )
}

export default Randomizer;
