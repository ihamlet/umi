import MyInput from './MyInput'

class Demo extends React.Component{
    state = {
        text: ''
    }

    onTextChange = (event) => {
        console.log(event.target.value)
        this.setState({text: event.target.value})
    }

    onTextReset = () => {
        console.log('重置')

        this.setState({
            text: ''
        })
    }

    render(){
        return(
            <>
                <MyInput value={this.state.text} onChange={this.onTextChange} />
                <button onClick={this.onTextReset} >
                    重置
                </button>
            </>
        )
    }
}

export default Demo