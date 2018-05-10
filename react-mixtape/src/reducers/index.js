import * as actions from '../actionTypes';

const initialState = {
    playlist: null,
    tracks: [],
    searchResults: [],
    playlists: [],
    token: null,
    userId: null,
    isAuthenticated: false,
    shouldRedirect: false
};

export function reducer(state = initialState, action) {

    switch (action.type) {
        case actions.LOGIN_REDIRECT:
            return {
                ...state,
                shouldRedirect: true
            };
        case actions.LOGIN_NO_TOKEN:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                userId: null,
                shouldRedirect: false
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userId: 'test.user',
                token: action.token,
                shouldRedirect: false
            };
        case actions.FETCH_PLAYLISTS_SUCCESS:
            return {
                ...state,
               playlists: action.playlists
            };
        case actions.FETCH_PLAYLIST_SUCCESS:
            return {
                ...state,
                playlist: action.playlist
            }
        default:
            return state;
    }
}
