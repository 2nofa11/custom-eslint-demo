"use strict";

// eslint-disable-next-line no-undef
module.exports = {
  create: function (context) {
    return {
      Literal: function (node) {
        if (
          typeof node.value == "string" &&
          // eslint-disable-next-line rulesdir/kimahri-not-pass
          node.value.indexOf("キマリ") !== -1
        ) {
          // eslint-disable-next-line rulesdir/kimahri-not-pass
          context.report({ node: node, message: "キマリは通さない" });
        }
      },
    };
  },
};
