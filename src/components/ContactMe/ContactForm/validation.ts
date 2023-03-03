export const validateText = (value: string | number) => {
    if (typeof value === 'string') {
        return value.trim() !== ''
    }
    return false
}

export const validateEmail = (value: string | number) => {
    if (typeof value === 'string') {
        return value.trim() !== '' && value.includes('@')
    }
    return false
}