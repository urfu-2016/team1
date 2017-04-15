import React from 'react';
import { Link } from 'react-router';

import plug from '../../../../source/img/plug.jpg';
import spinner from '../../../../source/img/rolling.svg';

const Spinner = () => (
    <div className='spinner-container'>
        <img src={spinner} alt='loader spinner' className='spinner-container_spinner' />
    </div>
);

export default class QuestItem extends React.Component {
    componentDidMount() {
        this.props.GetAllQuests([]);
    }

    componentDidUpdate() {
        console.info('update');
    }

    render() {
        const { quests, isFetching } = this.props;

        let mappedQuestItem = quests.map(item => (
                <Link to='/question' key={item.id} className='questitem__item quest'>
                    <div style={{backgroundImage: 'url('+plug+')'}}>
                        <div className='quest__info'>
                            <h2 className='quest__info_title'>{item.title}</h2>
                            <p className='quest__info_description'>{item.description}</p>
                        </div>
                    </div>
                </Link>
            )
        );

        return (
            <div className='questitem'>
                <div className='questitem__row'>
                    {isFetching ? <Spinner/> : null}
                    {mappedQuestItem}
                </div>
            </div>
        );
    }
}

QuestItem.propTypes = {
    quests: React.PropTypes.array,
    GetAllQuests: React.PropTypes.func.isRequired,
    isFetching: React.PropTypes.bool.isRequired
};
