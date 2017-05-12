export default function FileInput(props) {

    return (
        <label
            className={`custom-label ${props.labelClass}`}
            htmlFor={props.id}
        >{props.label}
            <input
                className={`custom-file ${props.inputClass}`}
                type='file'
                accept='image/*'
                name={props.name}
                id={props.id}
                data-tid={props.tid}
                onChange={(e) => {e.target.files.length > 0 ? e.target.parentNode.classList.add('custom-label_validation--true')
                    : e.target.parentNode.classList.remove('custom-label_validation--true')}} />
        </label>
    );
};

FileInput.propTypes = {
    labelClass: React.PropTypes.string,
    inputClass: React.PropTypes.string,
    label: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    tid: React.PropTypes.string
};
