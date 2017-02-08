let mockData = [
    {
        id:1,
        name:'name 1'
    },
    {
        id:2,
        name:'name 2'
    },
    {
        id:3,
        name:'name 3'
    },
    {
        id:4,
        name:'name 4'
    },
    {
        id:6,
        name:'name 5'
    }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('Got tracks from server');
        dispatch({type: 'FETCH_TRACKS', payload: mockData})
    }, 2000);
};