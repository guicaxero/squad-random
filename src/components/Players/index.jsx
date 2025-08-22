import { useDispatch, useSelector } from "react-redux";
import { removePlayer } from "../../store/Players";
import { FaRegTrashAlt } from "react-icons/fa";


const PlayerList = () => {
    const dispatch = useDispatch();
    const players = useSelector((state) => state.players.list);

      const handleRemovePlayer = (playerName) => {
        dispatch(removePlayer(playerName))
    }

    return (
        <>
            {players.length > 0 && (
            <div className="bg-emerald-800 text-white mb-4 p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                <h2 className="font-bold mb-4 text-3xl text-center">Jogadores</h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {players.map((p, index) => (
                    <li
                    key={index}
                    className="relative bg-emerald-700 p-3 rounded-2xl flex items-center justify-center font-semibold text-xl shadow-md hover:bg-emerald-600 transition-colors"
                    >
                    {p.name}
                        <button className="absolute right-3"
                            onClick={() => handleRemovePlayer(p.name)}
                        >
                            <FaRegTrashAlt />
                        </button>
                    </li>
                ))}
                </ul>
            </div>
            )}
        </>
    )
}

export default PlayerList;
