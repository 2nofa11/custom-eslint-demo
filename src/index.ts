module.exports = {
  a: "キマリは通さない",
  method: function () {
    if (process.env.NODE_ENV === "development") {
      console.log("env is development!");
    } else {
      console.log("env is production!");
    }
    if (this.$route.params) {
      console.log("hoge");
    }
  },
};
