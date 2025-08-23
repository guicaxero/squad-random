import { useSelector } from "react-redux";


const TeamsList = ({title}) => {
    const teams = useSelector((state) => state.players.teams);
    return (
    <>
        {teams.length > 0 && (
            <div className="w-full max-w-xl text-white">
                <h2 className="font-bold text-xl mb-2 text-center">{title}</h2>
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
    </>
    )
}

export default TeamsList;