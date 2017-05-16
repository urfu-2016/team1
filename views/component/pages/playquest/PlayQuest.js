import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../../redux/action/index';

const mapStateToProps = state => ({questInfo: state.GetQuestInfo});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)

export default class PlayQuest extends React.Component {
    componentDidMount() {
        const { GetTasks } = this.props.pageActions;
        GetTasks(this.props.params.id, true);
    }

    render() {
        const { questTask } = this.props.questInfo;
        const { checkCoordinates } = this.props.pageActions;
        const questID = this.props.params.id;

        let tasks = questTask.map((task) => {
            return (
                <div key={task.id} className={task.success ? 'tasks__item tasks__item_passed--true' : 'tasks__item'}>
                    <div className='tasks__item-image' style={{backgroundImage: `url(${task.path})`}} />

                    {
                        !task.success ? (
                            <div className='tasks__item-check' onClick={() => {
                                if (navigator.geolocation) {
                                    navigator.geolocation.getCurrentPosition(function(position) {
                                        let newCoordinates = {
                                            lat: position.coords.latitude,
                                            lng: position.coords.longitude
                                        }
                                        let trueCoordinates = {
                                            lat: parseFloat(task.lat),
                                            lng: parseFloat(task.lng)
                                        }
                                        checkCoordinates(task.id, questID, newCoordinates, trueCoordinates);
                                    });
                                } else {
                                    console.log('Sorry bro! But your browser doesn\'t support Geolocation')
                                }
                            }}>GO!</div>
                        ) : <div className='tasks__item-success'>Done!</div>
                    }
                </div>
            )
        });

        return (
            <div className='playquest'>
                <h2>Играем!</h2>

                <div className='tasks'>
                    {
                        tasks
                    }
                </div>
            </div>
        );
    }
}

PlayQuest.propTypes = {
    questInfo: React.PropTypes.object,
    pageActions: React.PropTypes.object,
    params: React.PropTypes.object.isRequired,
};
