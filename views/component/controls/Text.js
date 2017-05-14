import { checkTextInput } from './utils';

export default function TextInput(props) {

    return (
        <label
            className={`custom-label custom-label_required ${props.labelClass}`}
            htmlFor={props.id}>
            {props.label}
            <input
                className={`custom-textarea ${props.inputClass}`}
                type='text'
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                data-tid={props.tid}
                required={props.required}
                onBlur={checkTextInput}
                defaultValue={props.value ? props.value : ''}/>
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
    value: React.PropTypes.string
};
