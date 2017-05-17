export default function TextInput(props) {

    return (
        <label
            className={`custom-label custom-label_required ${props.labelClass}`}
            htmlFor={props.id}>
            {props.label}
            <input
                className={`custom-input ${props.inputClass}`}
                type='text'
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                data-tid={props.tid}
                required={props.required}
                defaultValue={props.value ? props.value : ''}
                onBlur={props.blueValidation}
                onChange={props.changeValidation}/>
        </label>
    );
};

TextInput.propTypes = {
    labelClass: React.PropTypes.string,
    inputClass: React.PropTypes.string,
    label: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    tid: React.PropTypes.string,
    required: React.PropTypes.string,
    value: React.PropTypes.string,
    blueValidation: React.PropTypes.func,
    changeValidation: React.PropTypes.func
};
