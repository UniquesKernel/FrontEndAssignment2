export function InputField({value,type, name, onChange}) {
    return (
        <div>
        <label class="InputField">
                <p1 class="TextField" > {name} </p1>
                <input type={type} value={value} onChange={onChange}/>
            </label>
        </div>
        )
}