import request from './../util/request'

const delay = (millisecond) => {
  return new Promise(resolve => {
    setTimeout(resolve, millisecond)
  })
}

export default {
    namespace: 'puzzlecards',
    state: {
      data: [],
      counter: 100
    },
    effects: {
      *queryInitCards(_ , { call, put }) {
        const endPointURI = 'http://localhost:8000/api/list'
  
        const puzzle = yield call(request, endPointURI)

        yield put({ type: 'addNewCard', payload: puzzle })
  
        yield call(delay, 3000)
  
        const puzzle2 = yield call(request, endPointURI)
        yield put({ type: 'addNewCard', payload: puzzle2 })
      }
    },
    reducers: {
      addNewCard(state,{ payload: newCard }){
        const nextCounter = state.counter + 1
        
        const nextData = state.data.concat(newCard)

        nextData.map((e,i)=>{
          return {
            ...e,
            id: i
          }
        })

        return {
          data: nextData,
          counter: nextCounter
        }
      }
    }
}