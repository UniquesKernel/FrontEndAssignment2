import './ToggleButton.css';

export function ToggleButton({text, value, onChange}) {

    return (
        <label class="Switch">
            <input type="checkbox" value={value} onChange={onChange} />
            <span class="buttonToggle"> {text} </span>
        </label>
        )
}