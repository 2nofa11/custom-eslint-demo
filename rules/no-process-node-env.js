module.exports = {
  meta: {
    type: "problem",
    hasSuggestions: true,
    docs: {
      description: "許可されていない",
      suggestion: true,
    },
    messages: {
      unexpectedProcessEnvNodeEnv:
        "process.env.NODE_ENVは許可されていません。myNodeEnv() を利用してください。",
      replaceToNodeEnv: "myNodeEnv() に置き換える。",
    },
  },
  create: function (context) {
    return {
      MemberExpression: function (node) {
        var sourceNode = node.object;
        if (sourceNode.type !== "MemberExpression") return;
        var sourceObject = sourceNode.object;
        var sourceProperty = sourceNode.property;
        var targetProperty = node.property;
        if (sourceObject.type !== "ThisExpression") return;
        if (sourceProperty.type !== "Identifier") return;
        if (targetProperty.type !== "Identifier") return;
        if (
          sourceProperty.name === "$route" &&
          targetProperty.name === "params"
        ) {
          context.report({
            node: node,
            messageId: "unexpectedProcessEnvNodeEnv",
          });
        }
      },
    };
  },
};
