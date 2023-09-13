import Timestamp from './timestamp.tsx'

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Timestamp interval={1000/60}/>
            </div>
        )
    }
}

React.render(<App/>, document.getElementById('app')!)
