export const strict = false
export const state = () => ({
    count: 5,
});

export const mutations = {
    CHANGE_COUNT(state, changedData){
        state.count= changedData
    }
}

export const getters = {
    MALA_DATA_DE(state){
        return state.count
    }
}

export const actions = {

    //
}