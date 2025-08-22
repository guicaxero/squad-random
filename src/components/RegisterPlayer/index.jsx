import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../../store/Players";
import InputText from "../InputText"


const RegisterPlayer = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleAddPlayer = (e) => {
        e.preventDefault();
        if (name.trim() === "") return;
        dispatch(addPlayer(name));
        setName("");
    };

    return (
        <>
            <form onSubmit={handleAddPlayer} className="flex mb-4">
                <InputText
                    type="text"
                    placeholder="Nome do jogador"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded font-bold cursor-pointer">
                    Adicionar
                </button>
            </form>
        </>
    )
}

export default RegisterPlayer;
