module.exports = {
  meta: {
    messages: {
      unexpectedProcessEnvNodeEnv: "params",
      unexpectedProcessEnvNodeQuery: "Query",
    },
  },
  create: function (context) {
    return {
      MemberExpression: function (node) {
        const sourceNode = node.object;
        if (sourceNode.type !== "MemberExpression") return;
        const sourceObject = sourceNode.object;
        const sourceProperty = sourceNode.property;
        const targetProperty = node.property;
        // 1文字目がThis以外は早期リターン
        if (sourceObject.type !== "ThisExpression") return;
        // 2文字目が$route以外は早期リターン
        if (sourceProperty.type !== "Identifier") return;
        if (sourceProperty.name !== "$route") return;
        // 3文字目がエラーを出す文字かを判定
        if (targetProperty.type !== "Identifier") return;
        if (targetProperty.name === "params") {
          context.report({
            node: node,
            messageId: "unexpectedProcessEnvNodeEnv",
          });
        }
        if (targetProperty.name === "query") {
          context.report({
            node: node,
            messageId: "unexpectedProcessEnvNodeQuery",
          });
        }
      },
    };
  },
};
