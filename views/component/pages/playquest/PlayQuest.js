import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import * as pageActions from '../../../redux/action/index';

const mapStateToProps = state => ({questInfo: state.GetQuestInfo});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)

export default class PlayQuest extends React.Component {
    componentDidMount() {
        const { GetTasks } = this.props.pageActions;
        GetTasks(this.props.params.id);
    }

    render() {
        const { questTask } = this.props.questInfo;
        const { checkCoordinates } = this.props.pageActions;

        let tasks = questTask.map((task) => {
            return (
                <div key={task.id}>
                    <div style={{backgroundImage: `url(${task.path})`, width: '400px', height: '300px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} />
                    <div onClick={() => {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(function(position) {
                                let lat = position.coords.latitude;
                                let lng = position.coords.longitude;
                                checkCoordinates(task.id, lat, lng);
                            });
                        } else {
                            console.log('Sorry bro! But your browser doesn\'t support Geolocation')
                        }
                    }}>Проверить координаты</div>
                </div>
            )
        });

        return (
            <div>
                <h2>Play Quest</h2>

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
