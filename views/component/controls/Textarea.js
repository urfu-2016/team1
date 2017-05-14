import { checkTextInput } from './utils';

export default function TextareaInput(props) {

    return (
        <label
            className={`custom-label ${props.labelClass}`}
            htmlFor={props.id}>
            {props.label}
            <textarea
                className={`custom-textarea ${props.textareaClass}`}
                type='text'
                name={props.name}
                id={props.id}
                rows={props.rows}
                cols={props.cols}
                placeholder={props.placeholder}
                data-tid={props.tid}
                required={props.required}
                onBlur={checkTextInput}
                defaultValue={props.value ? props.value : ''}/>
        </label>
    );
};

TextareaInput.propTypes = {
    labelClass: React.PropTypes.string,
    textareaClass: React.PropTypes.string,
    label: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    cols: React.PropTypes.number,
    rows: React.PropTypes.number,
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    tid: React.PropTypes.string,
    required: React.PropTypes.string,
    value: React.PropTypes.string
};
