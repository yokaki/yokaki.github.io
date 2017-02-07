new Vue({
  el: '#demo',
  data: {
    CHNtitle: '中国响应式网站分享平台',
    ENGtitle: 'Responsive',
    navLeftLogo: '',
    state: '中国',
    menuList: [],
    bzzcn: [],
    sass: [],
    imgName1: '派点互动',
    imgName2: 'HA市集 - 读你喜欢的',
    aboutUs: [],
    aboutInfo:'',
    linkInfo:'',
    friendLink: []
  },
  mounted: function () {
    this.$nextTick(() => this.getTitleInfomation());
  },
  methods: {
    getTitleInfomation: function () {
      this.$http.get('./data/information.json').then(res => {
        this.menuList = res.body.result.menuList;
        this.navLeftLogo = res.body.result.navLeftLogo;
        this.bzzcn = res.body.result.imgList.bzzcn;
        this.sass = res.body.result.imgList.sass;
        this.aboutInfo = res.body.result.footerInformation.aboutInfo;
        this.linkInfo = res.body.result.footerInformation.linkInfo;
        this.aboutUs = res.body.result.footerInformation.aboutUs;
        this.friendLink = res.body.result.footerInformation.friendLink;
      });
    }
  }
});