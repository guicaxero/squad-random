import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer, generateTeams, clearPlayers } from "../../store/Players";
import InputText from "../InputText"

const CardSelector = () => {
  const [name, setName] = useState("");
  const [numTeams, setNumTeams] = useState(4);
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players.list);
  const teams = useSelector((state) => state.players.teams);

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    dispatch(addPlayer(name));
    setName("");
  };

  const handleGenerateTeams = () => {
    if (players.length < 2) return alert("Adicione mais jogadores!");
    dispatch(generateTeams(numTeams));
  };

  const handleClear = () => {
    dispatch(clearPlayers());
  };

  return (
    <main className="min-h-screen bg-gray-800 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Montar Times</h1>

      <form onSubmit={handleAddPlayer} className="flex mb-4">
        <InputText
          type="text"
          placeholder="Nome do jogador"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded font-bold">
          Adicionar
        </button>
      </form>

    {players.length > 0 && (
    <div className="bg-emerald-800 text-white mb-4 p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
        <h2 className="font-bold mb-4 text-3xl text-center">Jogadores</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {players.map((p, index) => (
            <li
            key={index}
            className="bg-emerald-700 p-3 rounded-2xl flex items-center justify-center font-semibold text-xl shadow-md hover:bg-emerald-600 transition-colors"
            >
            {p.name}
            </li>
        ))}
        </ul>
    </div>
    )}


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
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Gerar Times
        </button>
        <button
          onClick={handleClear}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Limpar
        </button>
      </div>

      {teams.length > 0 && (
        <div className="w-full max-w-xl text-white">
          <h2 className="font-bold text-xl mb-2">Times:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teams.map((team, i) => (
              <div key={i} className="bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Time {i + 1}</h3>
                <ul className="flex flex-col gap-1">
                  {team.map((player, index) => (
                    <li key={index}>{player.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default CardSelector;
