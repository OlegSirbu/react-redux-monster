

const initialState = [
        'smells',
        'jazz'
    ];

export default function playList(state = initialState, action) {
    if(action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ]
    }
    return state;
};


