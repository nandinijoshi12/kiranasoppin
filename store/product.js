export const strict = false
export const state = () => ({
    allProducts:[]
});

export const mutations = {
    SET_PRODUCTS(state, data){
        console.log(data);
        state.allProducts=data
    },
    GET_PRODUCTS_ID(state, data){
        OA
    }
}

export const getters = {
    
}

export const actions = {
    getAll(context, data){
        console.log("getall madhe aalat");
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.get(`${process.env.BASE_URL}user/products/all`,  
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                console.log(response.data);
                context.commit("SET_PRODUCTS", response.data);
                resolve(response.data);
            })
            .catch(err =>{
                reject(err);
            })
        })       
    },
    getProdByid(id){
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.get(`/${process.env.BASE_URL}/user/products/${id}`,  
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                context.commit("GET_PRODUCTS_ID", response);
                resolve(response);
            })
            .catch(err =>{
                reject(err);
            })
        })
    }
}
