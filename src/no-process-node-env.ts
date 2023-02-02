import { Rule } from "eslint";
import {
  MemberExpression,
  Expression,
  Super,
  Identifier,
  PrivateIdentifier,
} from "estree";
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
    return {};
  },
};

module.exports = rule;
