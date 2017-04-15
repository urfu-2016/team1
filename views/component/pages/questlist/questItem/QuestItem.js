import React from 'react';
import { Link } from 'react-router';

import plug from '../../../../source/img/plug.jpg';
import spinner from '../../../../source/img/rolling.svg';

const SetSpinner = () => (
    <div className='spinner-container'>
        <img src={spinner} alt='loader spinner' className='spinner-container_spinner' />
    </div>
);

const SetError = () => (
    <div className='error'>Не удалось получить данные с сервера.</div>
);

export default class QuestItem extends React.Component {
    componentDidMount() {
        this.props.GetAllQuests([]);
    }

    render() {
        const { quests, isFetching, error } = this.props;

        let mapedQuestItem = quests.map(item => (
            <Link to='/question' key={item.id} className='questitem__item quest'>
                <div style={{backgroundImage: 'url('+plug+')'}}>
                    <div className='quest__info'>
                        <h2 className='quest__info_title'>{item.title}</h2>
                        <p className='quest__info_description'>{item.description}</p>
                    </div>
                </div>
            </Link>
        ));

        return (
            <div className='questitem'>
                <div className='questitem__row'>
                    { isFetching ? <SetSpinner/> : null }
                    { error ? <SetError/> : null }
                    {mapedQuestItem}
                </div>
            </div>
        );
    }
}

QuestItem.propTypes = {
    quests: React.PropTypes.array,
    GetAllQuests: React.PropTypes.func.isRequired,
    isFetching: React.PropTypes.bool.isRequired,
    error: React.PropTypes.bool.isRequired
};
