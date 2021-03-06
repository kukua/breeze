/**
 * User object
 */
export default class User {
    constructor() {
        this.callbacks = []
        this.attributes = {}
    }

    set (key, value) {
        if (typeof key === 'object') {
            this.attributes = key
        } else {
            this.attributes[key] = value
        }
        this._change()
    }

    get (key) {
        if (typeof key === 'undefined') {
            return this.attributes
        }
        return this.attributes[key]
    }

    set id (val) { return this.set('id', val) }
    get id () { return this.get('id') }

    set token (val) { return this.set('token', val) }
    get token () { return this.get('token') }

    get isLoggedIn () { return !! this.token }
    get isActive () { return !! this.get('is_active') }
    get isAdmin () { return !! this.get('is_admin') }

    clear() {
        this.set({})
    }

    _change () {
        this.callbacks.forEach((cb) => {
            cb(this.attributes)
        })
    }
    onChange (cb) {
        this.callbacks.push(cb)
    }
}

export let instance = new User()
