module.exports = {
  method: function () {
    const a = "キマリは通さない";
    if (process.env.NODE_ENV === "development") {
      console.log("env is development!");
    } else {
      console.log("env is production!");
    }
    if (this.$route.params) {
      console.log("hoge");
    }
    if (this.$route.query) {
      console.log("hoge");
    }
  },
};
