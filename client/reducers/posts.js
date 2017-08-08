/*reducer takes in two things:
* 1: action(information about what happened;
* 2: copy of current state*/

export default function posts(state = [], action) {
    const i = action.index;
    switch(action.type){
        case 'INCREMENT_LIKES': return[
            ...state.slice(0, i), // before the one we are updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1) // after one we are updating
        ];
        default: return state;
    }
}