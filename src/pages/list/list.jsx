import { Card, Button } from 'antd'
import { connect } from 'dva'

import MyInput from './../demo/input/MyInput'

const namespace = 'puzzlecards'

const mapStateToProps = (state) => {
    const cardList = state[namespace].data
    return {
        cardList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd(newCard){
            const action = {
                type: `${namespace}/addNewCard`,
                payload: newCard,
            }
            dispatch(action)
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)

class PuzzleCardPage extends React.Component {
    state = {
        value:''
    }


    add = () =>{
        this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit add',
            punchline: this.state.value
        })
    }

    inputChange = (event) => {
        this.setState({value: event.target.value})
    }

    render(){
        return (
            <>
                {
                    this.props.cardList.map(card => {
                        return <Card key={card.id}>
                            <div>Q: {card.setup}</div>
                            <div>
                                <strong>A: {card.punchline}</strong>
                            </div>
                        </Card>
                    })
                }
                <div>
                    <MyInput value={this.state.value} onChange={this.inputChange}/>
                </div>
                <div>
                    <Button onClick={this.add}>
                        添加卡片
                    </Button>
                </div>
            </>
        )
    }
}

export default PuzzleCardPage