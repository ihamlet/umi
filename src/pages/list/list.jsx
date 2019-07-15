import { Card, Button } from 'antd'
import { connect } from 'dva'

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
    add = () =>{
        this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit add',
            punchline: 'here we use dva'
        })
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
                    <Button onClick={this.add}>
                        添加卡片
                    </Button>
                </div>
            </>
        )
    }
}

export default PuzzleCardPage