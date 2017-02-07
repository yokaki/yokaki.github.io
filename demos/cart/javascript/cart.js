new Vue({
  el: '#cart',
  data: {
    title: '购物车',
    totlePrice: 0,
    productList: [],
    selectAllFlag: false,
  },
  filters: {
    money: function (value) {
      return "￥ " + value.toFixed(2) + ' 元';
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.getProductInformation();
    });
  },
  methods: {
    getProductInformation: function () {
      this.$http.get('data/productInformation.json').then(res => {
        this.productList = res.body.result.productList;
      });
    },
    changeQuantity: function (product, way) {
      if (way > 0) {
        product.Quantity++;
      } else {
        product.Quantity--;
        if (product.Quantity < 1) {
          product.Quantity = 1;
        }
      }
      this.getTotlePrice();

    },
    changeSelect: function (product) {
      product.checked = !product.checked;
      this.getTotlePrice();
    },
    selectAll: function (flag) {
      this.selectAllFlag = flag;
      this.productList.forEach((product) => {
        product.checked = this.selectAllFlag;
      });
      this.getTotlePrice();
    },
    getTotlePrice: function () {
      this.totlePrice = 0;
      this.productList.forEach((product) => {
        if (product.checked) {
          this.totlePrice += product.Quantity * product.Price;
        }
      });
    }
  }
});