import { checkFileInput } from './utils';

export default function FileInput(props) {

    return (
        <label
            className={`custom-label ${props.labelClass}`}
            htmlFor={props.id}>
            {props.label}
            <input
                className={`custom-file ${props.inputClass}`}
                type='file'
                accept='image/*'
                name={props.name}
                id={props.id}
                data-tid={props.tid}
                onChange={checkFileInput}
                value={props.value}/>
        </label>
    );
};

FileInput.propTypes = {
    labelClass: React.PropTypes.string,
    inputClass: React.PropTypes.string,
    label: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    tid: React.PropTypes.string,
    value: React.PropTypes.string
};
