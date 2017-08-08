/*reducer takes in two things:
* 1: action(information about what happened;
* 2: copy of current state*/

export default function comments(state = [], action) {
    console.log(state, action);
    return state;
}