const initial = {
    loading: false,
}

export default (state = initial, action) => {

    let obj = Object.assign({}, initial);

    switch(action.type) {
    case 'USER_LOGIN':
        obj.loading = true
        break;

    case 'USER_LOGIN_FAIL':
        obj.err = action.err;
        break;

    case 'USER_LOGIN_SUCCESS':
        obj.item = action.item
        break;

    case 'USER_LOGOUT':
        break;
    }

    return obj
}
