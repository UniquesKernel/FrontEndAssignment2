export function InputField({value,type, name, onChange}) {
    return (
        <div>
        <label className="InputField">
                <p1 className="TextField" > {name} </p1>
                <input type={type} value={value} onChange={onChange}/>
            </label>
        </div>
        )
}