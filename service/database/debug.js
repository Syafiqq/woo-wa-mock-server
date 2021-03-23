const {firebase} = require('../../firebase');
const dateFormat = require('date-fns/format');

const insertRawS2S = async (s2s, now) => {
    try {
        const date = dateFormat(now, 'dd-MM-yyyy HH:mm:ss')
        const obj = {
            'db-date': date,
            ...s2s,
        }

        await firebase.database().ref(`/debug/woo-wa/web-hook/${now.getTime()}/`).set(obj)
    } catch (error) {
        console.error(error)
        return null
    }
}

module.exports = {
    insertRawS2S,
}
