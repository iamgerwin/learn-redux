export const increment = (value) => {
    return {
        type: 'INCREMENT',
        payload: value
    }
}

export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        payload: value
    }
}

export const signIn = () => {
    return {
        type: 'SIGN_IN',
    }
}