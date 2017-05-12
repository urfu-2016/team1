export default function TextareaInput(props) {

    return (
        <label
            className={`custom-label ${props.labelClass}`}
            htmlFor={props.id}
            >{props.label}
            <textarea
                className={`custom-input ${props.textareaClass}`}
                type='text'
                name={props.name}
                id={props.id}
                rows={props.rows}
                cols={props.cols}
                placeholder={props.placeholder}
                data-tid={props.tid}
                required={props.required}
                onBlur={(e) => {
                    e.target.value ? e.target.parentNode.classList.add('custom-label_validation--true')
                        : e.target.parentNode.classList.remove('custom-label_validation--true')}} />
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
    required: React.PropTypes.string
};
