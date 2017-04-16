import React from 'react';
import { Link } from 'react-router';

import plug from '../../../../source/img/plug.jpg';
import spinner from '../../../../source/img/rolling.svg';

const Spinner = () => (
    <div className='spinner-container'>
        <img src={spinner} alt='loader spinner' className='spinner-container_spinner' />
    </div>
);

const Error = () => (
    <div className='error'>Не удалось получить данные с сервера.</div>
);

export default class QuestItem extends React.Component {
    static propTypes = {
        quests: PropTypes.array,
        GetAllQuests: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired
    };

    componentDidMount() {
        this.props.GetAllQuests([]);
    }

    render() {
        const { quests, isFetching, error } = this.props;

        let mappedQuestItem = quests.map((item, index) => (
            <Link to={'/question/' + item.id} key={item.id} className='questitem__item quest' data-tid={`quest-${index}-link`}>
                <div style={{backgroundImage: 'url('+plug+')'}}>
                    <div className='quest__info'>
                        <h2 className='quest__info_title' data-tid={`quest-${index}-title`}>{item.title}</h2>
                        <p className='quest__info_description' data-tid={`quest-${index}-description`}>{item.description}</p>
                    </div>
                </div>
            </Link>
        ));

        return (
            <div className='questitem'>
                <div className='questitem__wrap'>
                    {isFetching ? <Spinner/> : null}
                    {error ? <Error/> : null}
                    {mappedQuestItem}
                </div>
            </div>
        );
    }
}
