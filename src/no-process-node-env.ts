import { Rule } from "eslint";
import { MemberExpression } from "estree";

const rule: Rule.RuleModule = {
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
  create(context: Rule.RuleContext) {
    return {
      MemberExpression(node: MemberExpression & Rule.NodeParentExtension) {
        const sourceNode = node.object;
        if (sourceNode.type !== "MemberExpression") return;

        const sourceObject = sourceNode.object;
        const sourceProperty = sourceNode.property;
        const targetProperty = node.property;

        if (sourceObject.type !== "Identifier") return;
        if (sourceProperty.type !== "Identifier") return;
        if (targetProperty.type !== "Identifier") return;

        if (
          sourceObject.name === "process" &&
          sourceProperty.name === "env" &&
          targetProperty.name === "NODE_ENV"
        ) {
          context.report({
            node,
            messageId: "unexpectedProcessEnvNodeEnv",
          });
        }
      },
    };
  },
};

module.exports = rule;
