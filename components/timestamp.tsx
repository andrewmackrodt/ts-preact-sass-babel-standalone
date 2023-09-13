interface TimestampProps {
    interval: number
}

interface TimestampState {
    timestamp?: string
}

export default class Timestamp extends React.Component<TimestampProps, TimestampState> {
    private timerId?: number

    render() {
        return (
            <div className="timestamp">
                <span>{this.state.timestamp}</span>
            </div>
        )
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => {
                this.setState({ timestamp: new Date().toISOString() })
            },
            this.props.interval)
    }

    componentWillUnmount() {
        if (this.timerId) {
            clearInterval(this.timerId)
            delete this.timerId
        }
    }
}
