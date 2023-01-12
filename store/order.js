export const strict = false;
export const state = () => ({
  allOrders: [],
  allOrders2: [],
});

export const mutations = {
  SET_CART(state, data) {
    console.log("commit honar");
    state.allOrders = data;
    console.log(state.allOrders, "ha data");
  },
  ADD_ORDER_ADDRESS(state, data) {
    console.log("add Committed", data.data);   
    state.allOrders.unshift(data.data);
    
  },
  ADD_SAME(state, data) {
    console.log("addSame committed", data.data);
    var index = state.allOrders.findIndex(
      (item) => item.id == data.data.id
    );
    Object.assign(state.allOrders[index], data.data);
    
  },
  EDIT_CART(state, data){
      console.log('ok1 edit',data.data);
      console.log('ok1',state.allOrders);
      var index = state.allOrders.findIndex(
        (item) => item.id == data.data.id
      );
      console.log("find index zala", index);
      console.log("condition quantity", data.data.prod_quantity);
      if(data.data.prod_quantity==0)
      {
        console.log("if madhe aalat");
        console.log("sagla", data);
        state.allOrders.splice(index, 1);
      }
      else{
        console.log("else madhe aalat");
        console.log("cart cha product",state.allOrders[index]);
        Object.assign(state.allOrders[index], data.data);
      }
    },
  REMOVE_CART(state, data) {
    console.log("mutateee dellll", data);
    var index = state.allOrders.findIndex(
      (item) => item.id == data.data.id
    );
    console.log(index);
    state.allOrders.splice(index, 1);
  },
};

export const getters = {
  GET_CART_COUNT(state) {
    console.log("ok getter", state.allOrders.length);
    return state.allOrders.length;
  },
};

export const actions = {
  getAll(context, data) {
    var token = JSON.parse(localStorage.getItem("shToken"));
    return new Promise((resolve, reject) => {
      // axios
      this.$axios
        .get(`${process.env.BASE_URL}user/cart/allorders`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log("getalllllcarttt", response.data);
          context.commit("SET_CART", response.data);
          // console.log(response.data);
          resolve(response);
        })
        .catch((err) => {
          reject(err, "nonono");
        });
    });
  },
  add(context, addressId) {
    console.log("add address having id", addressId.id);
    var token = JSON.parse(localStorage.getItem("shToken"));
    return new Promise((resolve, reject) => {
      // axios
      this.$axios
        .post(`${process.env.BASE_URL}user/cart/order?address_id=${addressId.id}`, null, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log(response.data);
          console.log("hi");
          context.commit("ADD_ORDER_ADDRESS", response.data);
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
          context.commit("ADD_SAME", response.data);
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
