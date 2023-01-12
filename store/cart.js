export const strict = false;
export const state = () => ({
  allCartProducts: [],
  allCartProducts2: [],
  selectedAddress:[]
});

export const mutations = {
  SET_CART(state, data) {
    console.log("commit honar");
    state.allCartProducts = data;
    console.log(state.allCartProducts, "ha data");
  },
  ADD_CART(state, data) {
    console.log("add Committed", data.data);   
    state.allCartProducts.unshift(data.data);
  },
  ADD_CART_SAME(state, data) {
    console.log("addSame committed", data.data);
    var index = state.allCartProducts.findIndex(
      (item) => item.id == data.data.id
    );
    Object.assign(state.allCartProducts[index], data.data);
    
  },
  EDIT_CART(state, data){
      console.log('ok1 edit',data.data);
      console.log('ok1',state.allCartProducts);
      var index = state.allCartProducts.findIndex(
        (item) => item.id == data.data.id
      );
      console.log("find index zala", index);
      console.log("condition quantity", data.data.prod_quantity);
      if(data.data.prod_quantity==0)
      {
        console.log("if madhe aalat");
        console.log("sagla", data);
        state.allCartProducts.splice(index, 1);
      }
      else{
        console.log("else madhe aalat");
        console.log("cart cha product",state.allCartProducts[index]);
        Object.assign(state.allCartProducts[index], data.data);
      }
    },
  REMOVE_CART(state, data) {
    console.log("mutateee dellll", data);
    var index = state.allCartProducts.findIndex(
      (item) => item.id == data.data.id
    );
    console.log(index);
    state.allCartProducts.splice(index, 1);
  },
};

export const getters = {
  GET_CART_COUNT(state) {
    console.log("ok getter", state.allCartProducts.length);
    return state.allCartProducts.length;
  },
};

export const actions = {
  getAll(context, data) {
    var token = JSON.parse(localStorage.getItem("shToken"));
    return new Promise((resolve, reject) => {
      // axios
      this.$axios
        .get(`${process.env.BASE_URL}user/cart`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log("getallcart", response.data);
          context.commit("SET_CART", response.data);
          // console.log(response.data);
          resolve(response);
        })
        .catch((err) => {
          reject(err, "nonono");
        });
    });
  },
  add(context, mothaDataa) {
    console.log("add to cart actyion", mothaDataa);
    var token = JSON.parse(localStorage.getItem("shToken"));
    return new Promise((resolve, reject) => {
      // axios
      this.$axios
        .post(`${process.env.BASE_URL}user/cart/add`, mothaDataa, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log(response.data);
          console.log("hi");
          context.commit("ADD_CART", response.data);
          resolve(response);
        })
        .catch((err) => {
          console.log("hello");
          reject(err);
        });
    });
  },
  addSame(context, moData) {
    console.log("add to sameee cart action", moData);
    var token = JSON.parse(localStorage.getItem("shToken"));
    return new Promise((resolve, reject) => {
      // axios
      this.$axios
        .put(`${process.env.BASE_URL}user/cart/update?id=${moData.id}`, 
        { prod_quantity: moData.prod_quantity },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log(response.data);
          console.log("redirecting in same cart mutation");
          context.commit("ADD_CART_SAME", response.data);
          resolve(response);
        })
        .catch((err) => {
          console.log("hello same error");
          reject(err);
        });
    });
  },
  updateCart(context, aalelyadonfields) {
    console.log("Ala ", aalelyadonfields);
    var token = JSON.parse(localStorage.getItem("shToken"));
    return new Promise((resolve, reject) => {
      // axios
      this.$axios
        .put(
          `${process.env.BASE_URL}user/cart/update?id=${aalelyadonfields.id}`,
          { prod_quantity: aalelyadonfields.prod_quantity },
          // aalelyadonfields.prod_quantity,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((response) => {
          console.log(response.data, "response.data aahe");
          context.commit("EDIT_CART", response.data);
          resolve(response);
        })
        .catch((err) => {
          reject(err,"update action madhe error");
        });
    });
  },
  delete(context, ithlaId) {
    console.log("Ala cart cha id", ithlaId);
    var token = JSON.parse(localStorage.getItem("shToken"));
    console.log(token);
    return new Promise((resolve, reject) => {
      console.log("prod_id aahe ha ani", ithlaId);
      // axios
      this.$axios
        .post(
          `${process.env.BASE_URL}user/cart/remove`,
          {
            id: ithlaId,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((response) => {
          console.log("okkk");
          context.commit("REMOVE_CART", response.data);
          resolve(response);
        })
        .catch((err) => {
          // console.log(prod_id);
          console.log("not ok");
          reject(err);
        });
    });
  },
};
