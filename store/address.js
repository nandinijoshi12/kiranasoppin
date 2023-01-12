export const strict = false
export const state = () => ({
    allAdresses:[]
});

export const mutations = {
    SET_ADDRESSES(state, data){
        state.allAdresses=data
    },
    ADD_ADDRESS(state, data){
        console.log("add wala commit pan hotay");
        state.allAdresses.data.unshift(data)
    },
    EDIT_ADDRESS(state, data){
        // console.log(response.data);
        console.log('ok1',data);
        console.log('ok1',state.allAdresses);
        var index =state.allAdresses.data.findIndex(item => item.id == data.data.id); 
        Object.assign(state.allAdresses.data[index], data.data);
        console.log(index);
        // state.first.second[action.someId].fourth = action.someValue  
    },
    REMOVE_ADDRESS(state, data){
        console.log("mutateee dellll", data);        
        var index =state.allAdresses.data.findIndex(item => item.id == data.data.id);
        console.log(index);
        state.allAdresses.data.splice(index, 1);
    }
}

export const getters = {
    
}

export const actions = {
    getAll(context, data){
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.get(`${process.env.BASE_URL}user/address`,  
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                context.commit("SET_ADDRESSES", response.data);
                resolve(response);
            })
            .catch(err =>{
                reject(err);
            })
        })       
    },
    add(context, formMadhunAalelaData){
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.post(`${process.env.BASE_URL}user/address/add`, 
            formMadhunAalelaData, 
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                context.commit("ADD_ADDRESS", response.data.data);
                resolve(response);
            })
            .catch(err =>{
                reject(err);
            })
        })       
    },
    updateAddress(context, alelaMothadata){
        console.log('Ala ');
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.put(`${process.env.BASE_URL}user/address/update?id=${alelaMothadata.id}`,  
            alelaMothadata.formChaPurnaData,
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                context.commit("EDIT_ADDRESS", response.data);
                resolve(response);
            })
            .catch(err =>{
                reject(err);
            })
        })    
    },
    remove(context, ithlaId){
        console.log('Ala address cha id');
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.post(`${process.env.BASE_URL}user/address/remove`,
            {id:ithlaId}, 
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                console.log(response.data);
                context.commit("REMOVE_ADDRESS", response.data);
                resolve(response);
            })
            .catch(err =>{
                reject(err);
            })
        })    
    },
}