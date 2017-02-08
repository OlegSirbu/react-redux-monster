

const initialState = [
    'home playlist',
    'work playlist'
];

export default function playList(state = initialState, action) {
    if(action.type === 'ADD_PLAYLIST'){
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}


