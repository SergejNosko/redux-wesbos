/*reducer takes in two things:
* 1: action(information about what happened;
* 2: copy of current state*/

function postComments(state = [], action) {
    switch(action.type){
        case 'ADD_COMMENT':
            //return the existing state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            //we need to return the new state without the deleted comment
            console.log('removing the comment');
            return [
                //from the start to the one we want to delete
                ...state.slice(0, action.i),
                //after deleted one to the end
                ...state.slice(action.i + 1)
            ];
            return state;
        default: return state;
    }
}

export default function comments(state = [], action) {
    if(typeof action.postId !== 'undefined'){
        return{
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}