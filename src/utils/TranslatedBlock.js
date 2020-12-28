import React from "react";
import get from "lodash.get";

import Markdown from "./Markdown";

const TranslatedBlock = ({ translations, path, entities }) => {
  const markdown =
    get(translations, path) || `No translation for this path: "${path}"`;
  return <Markdown source={markdown} entities={entities} />;
};

export default TranslatedBlock;
