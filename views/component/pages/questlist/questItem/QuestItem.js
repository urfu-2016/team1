import React from 'react';
import { Link } from 'react-router';

import plug from '../../../../source/img/plug.jpg';

export default class QuestItem extends React.Component {
    componentDidMount() {
        this.props.GetAllQuests([]);
    }

    componentDidUpdate() {
        console.info('update');
    }

    render() {
        const { quests } = this.props;

        let mapedQuestItem = quests.map((item, index) => {
            return (
                <Link to='/question' key={item.id} className='questitem__item quest'>
                    <div style={{backgroundImage: 'url('+plug+')'}}>
                        <div className='quest__info'>
                            <h2 className='quest__info_title'>{item.title}</h2>
                            <p className='quest__info_description'>{item.description}</p>
                        </div>
                    </div>
                </Link>
            )
        });

        return (
            <div className='questitem'>
                <div className='questitem__row'>
                    {mapedQuestItem}
                </div>
            </div>
        );
    }
}

QuestItem.propTypes = {
    quests: React.PropTypes.array,
    GetAllQuests: React.PropTypes.func.isRequired,
};
