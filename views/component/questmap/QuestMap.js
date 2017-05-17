import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapState = { center: [55.60981528748136, 37.69883602035578], zoom: 10 };

export default class QuestMap extends React.Component{
    constructor(props) {
        super(props);

        this.state = {marks: []};

        this.setMarks = this.setMarks.bind(this);
    }

    setMarks(e) {
        // console.log(e.get('target')._bounds[1]);
        // let coordinates = e.get('target')._bounds[1];
        // let lat = coordinates[0];
        // let lng = coordinates[1];
        //
        // let mark = (
        //     <Placemark
        //         geometry={{
        //             coordinates: [lat, lng]
        //         }}
        //         properties={{
        //             hintContent: 'Собственный значок метки',
        //             balloonContent: 'Это красивая метка'
        //         }}
        //     />
        // );
        //
        // this.setState(prevState => {
        //     let res = prevState.marks.push('hi');
        //     console.log(res);
        //     return {marks: res}
        // });
    }

    render() {
        return (
            <YMaps>
                <Map state={mapState} onClick={this.setMarks}>

                </Map>
            </YMaps>
        );
    }
}


