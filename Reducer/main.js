export function languageReducer (state = 'English', action) {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return action.payload;
            break;
    }
    return state;
}


export function userReducer (state = null, action) {
    switch (action.type) {
        case 'USER_INFO':
        console.log('USER_INFO  ',action.payload);
            return action.payload;
            break;
    }
    return state;
}

 