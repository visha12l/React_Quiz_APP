import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

const CodeEditor = ({ parentKey, code, handleCodeChange }) => {
  return (
    <Editor
      value={code}
      onValueChange={code => handleCodeChange(code, parentKey)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14,
        color: "red"
      }}
    />
  );
};
export default CodeEditor;
