

const InputText = ({label, placeholder, onChange, value}) => {
    return (
        <label className="flex flex-col box-border font-bold">
            {label}
            <input className="block box-border bg-gray-200 mx-5 my-2 rounded-2xl pl-2 py-1.5"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type="text"
            />
        </label>

    )
}

export default InputText