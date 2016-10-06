const initial = {
    loading: false
}

export default (state = initial, action) => {

    let obj = Object.assign({}, initial);

    switch(action.type) {
    case 'USER_CREATE':
        obj.loading = true
        break

    case 'USER_CREATE_FAIL':
        obj.err = action.err
        break

    case 'USER_CREATE_SUCCESS':
        obj.item = action.item
        break
    }

    return obj
}
