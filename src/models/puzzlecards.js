export default {
    namespace: 'puzzlecards',
    state: {
      data: [
        { id: 1,
          setup: 'Did you hear about the two silk worms in a race?',
          punchline: 'It ended in a tie',
        },
        {
          id: 2,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
        {
          id: 3,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
        {
          id: 4,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
        {
          id: 5,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
        {
          id: 6,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
        {
          id: 7,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
      ],
      counter: 100
    },
    reducers: {
      addNewCard(state,{ payload: newCard }){
        const nextCounter = state.counter + 1
        const newCardWithId = {...newCard, id: nextCounter}
        const nextData = state.data.concat(newCardWithId)
        return{
          data: nextData,
          counter: nextCounter
        }
      }
    }
}