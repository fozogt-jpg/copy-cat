/**
 * copy-cat: Copyright SquidDev 2026
 *
 * - @squid-dev/cc-web-term: Copyright SquidDev (BSD-3-Clause)
 * - jsx-runtime: Copyright  (MIT)
 * - preact: Copyright  (MIT)
 * - setimmediate: Copyright YuzuJS (MIT)
 * - style-inject: Copyright EGOIST (MIT)
 * - tslib: Copyright Microsoft Corp. (0BSD)
 * - wasm-feature-detect: Copyright Surma (Apache-2.0)
 *
 * @license
 */

define(['exports', 'vs/editor/editor.main', './persist-u9lROri2'], (function (exports, monacoEditor, persist) { 'use strict';

    function _interopNamespaceDefault(e) {
        const n = Object.create(null);
        if (e) {
            for (const k in e) {
                if (k !== 'default') {
                    const d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: () => e[k]
                    });
                }
            }
        }
        n.default = e;
        return Object.freeze(n);
    }

    const monacoEditor__namespace = /*#__PURE__*/_interopNamespaceDefault(monacoEditor);

    /*
     * MIT License
     *
     * Copyright (c) 2015 - present Microsoft Corporation
     *
     * All rights reserved.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
    // Adapated from https://github.com/Microsoft/vscode/tree/master/extensions/lua
    // and Monaco's Lua grammar. Mostly a mish-mash of the two in order to get
    // auto-indents.
    const configuration = {
        comments: {
            lineComment: "--",
            blockComment: ["--[[", "]]"],
        },
        brackets: [
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
        ],
        autoClosingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: "'", close: "'" },
            { open: "\"", close: "\"" },
        ],
        surroundingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: "\"", close: "\"" },
            { open: "\"", close: "\"" },
        ],
        indentationRules: {
            increaseIndentPattern: /((\b(else|function|then|do|repeat)\b((?!\b(end|until)\b).)*)|(\{\s*))$/,
            decreaseIndentPattern: /^\s*((\b(elseif|else|end|until)\b)|(\})|(\)))/,
        },
    };
    const tokens = {
        defaultToken: "",
        tokenPostfix: ".lua",
        keywords: [
            "and", "break", "do", "else", "elseif",
            "end", "false", "for", "function", "goto", "if",
            "in", "local", "nil", "not", "or",
            "repeat", "return", "then", "true", "until",
            "while",
        ],
        brackets: [
            { token: "delimiter.bracket", open: "{", close: "}" },
            { token: "delimiter.array", open: "[", close: "]" },
            { token: "delimiter.parenthesis", open: "(", close: ")" },
        ],
        operators: [
            "+", "-", "*", "/", "%", "^", "#", "==", "~=", "<=", ">=", "<", ">", "=",
            ";", ":", ",", ".", "..", "...",
        ],
        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*/^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-zA-Z_]\w*/, {
                        cases: {
                            "@keywords": { token: "keyword.$0" },
                            "@default": "identifier",
                        },
                    }],
                // whitespace
                { include: "@whitespace" },
                // keys
                [/(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ["delimiter", "", "key", "", "delimiter"]],
                [/({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ["@brackets", "", "key", "", "delimiter"]],
                // delimiters and operators
                [/[{}()[\]]/, "@brackets"],
                [/@symbols/, {
                        cases: {
                            "@operators": "delimiter",
                            "@default": "",
                        },
                    }],
                // numbers
                [/\d*\.\d+([eE][-+]?\d+)?/, "number.float"],
                [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],
                [/\d+?/, "number"],
                // delimiter: after number because of .\d floats
                [/[;,.]/, "delimiter"],
                // strings: recover on non-terminated strings
                [/"([^"\\]|\\.)*$/, "string.invalid"],
                [/"([^"\\]|\\.)*$/, "string.invalid"],
                [/'/, "string2", "@string.'"],
                [/"/, "string", "@string.\""],
            ],
            whitespace: [
                [/[ \t\r\n]+/, ""],
                [/--\[([=]*)\[/, "comment", "@comment.$1"],
                [/--.*$/, "comment"],
            ],
            comment: [
                [/[^\]]+/, "comment"],
                [/\]([=]*)\]/, {
                        cases: {
                            "$1==$S2": { token: "comment", next: "@pop" },
                            "@default": "comment",
                        },
                    }],
                [/./, "comment"],
            ],
            string: [
                [/[^\\"']+/, "string"],
                [/@escapes/, "string.escape"],
                [/\\./, "string.escape.invalid"],
                [/["']/, {
                        cases: {
                            "$#==$S2": { token: "string", next: "@pop" },
                            "@default": "string",
                        },
                    }],
            ],
        },
    };
    monacoEditor.languages.register({
        id: "luax",
        aliases: ["LuaX", "LuaX", "luax"],
        extensions: [".lua"],
    });
    monacoEditor.languages.setLanguageConfiguration("luax", configuration);
    monacoEditor.languages.setMonarchTokensProvider("luax", tokens);

    let index;
    /**
     * Fetch CC:T's documentation index.
     * @returns The documentation index, or {@code null} if downloading it failed.
     */
    const getDocumentationIndex = () => index !== null && index !== void 0 ? index : (index = fetch("https://tweaked.cc/index.json")
        .then(x => x.json())
        .catch(x => {
        console.error("Failed to fetch index", x);
        return null;
    }));
    /**
     * Attempt to find a documented term.
     *
     * @param name The name to look up in the documentation.
     * @returns The documented term, or {@code null} if it could not be found.
     */
    const findDocumentedTerm = (name) => persist.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (name.match(/\.[A-Z]/))
            return null;
        const index = yield getDocumentationIndex();
        if (!index)
            return null;
        return (_a = index[name]) !== null && _a !== void 0 ? _a : index[`_G.${name}`];
    });
    const wordBefore = /[A-za-z_][\w.]*$/;
    const wordAfter = /^[\w.]*/;
    monacoEditor.languages.registerHoverProvider("luax", {
        provideHover: (model, position) => persist.__awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const line = model.getLineContent(position.lineNumber);
            const before = (_b = (_a = line.substring(0, position.column).match(wordBefore)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "";
            const after = (_d = (_c = line.substring(position.column).match(wordAfter)) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : "";
            const definitionName = before + after;
            if (!definitionName)
                return;
            const item = yield findDocumentedTerm(definitionName);
            if (!item || item["module-kind"] != "module")
                return null;
            const contents = [
                { value: `\`${item.name}\`` }
            ];
            if (item.summary)
                contents.push({ value: item.summary });
            contents.push({ value: `[View full documentation](https://tweaked.cc/${item.url})` });
            return {
                range: new monacoEditor.Range(position.lineNumber, position.column - before.length, position.lineNumber, position.column + after.length),
                contents,
            };
        }),
    });
    const makeColour = (x) => ({
        red: ((x >> 16) & 0xFF) / 255,
        green: ((x >> 8) & 0xFF) / 255,
        blue: (x & 0xFF) / 255,
        alpha: 1
    });
    const colourLookup = {
        "colors.white": makeColour(0xF0F0F0),
        "colors.orange": makeColour(0xF2B233),
        "colors.magenta": makeColour(0xE57FD8),
        "colors.lightBlue": makeColour(0x99B2F2),
        "colors.yellow": makeColour(0xDEDE6C),
        "colors.lime": makeColour(0x7FCC19),
        "colors.pink": makeColour(0xF2B2CC),
        "colors.gray": makeColour(0x4C4C4C),
        "colors.lightGray": makeColour(0x999999),
        "colors.cyan": makeColour(0x4C99B2),
        "colors.purple": makeColour(0xB266E5),
        "colors.blue": makeColour(0x3366CC),
        "colors.brown": makeColour(0x7F664C),
        "colors.green": makeColour(0x57A64E),
        "colors.red": makeColour(0xCC4C4C),
        "colors.black": makeColour(0x111111),
        "colours.white": makeColour(0xF0F0F0),
        "colours.orange": makeColour(0xF2B233),
        "colours.magenta": makeColour(0xE57FD8),
        "colours.lightBlue": makeColour(0x99B2F2),
        "colours.yellow": makeColour(0xDEDE6C),
        "colours.lime": makeColour(0x7FCC19),
        "colours.pink": makeColour(0xF2B2CC),
        "colours.grey": makeColour(0x4C4C4C),
        "colours.lightGrey": makeColour(0x999999),
        "colours.cyan": makeColour(0x4C99B2),
        "colours.purple": makeColour(0xB266E5),
        "colours.blue": makeColour(0x3366CC),
        "colours.brown": makeColour(0x7F664C),
        "colours.green": makeColour(0x57A64E),
        "colours.red": makeColour(0xCC4C4C),
        "colours.black": makeColour(0x111111),
    };
    monacoEditor.languages.registerColorProvider("luax", {
        provideColorPresentations: () => [],
        provideDocumentColors: model => {
            const colours = [];
            for (const { range } of model.findMatches("colou?rs\\.\\w+", false, true, true, "()[]{}<>`'\"-/;:,.?!", false)) {
                const color = colourLookup[model.getValueInRange(range)];
                if (color)
                    colours.push({ color, range });
            }
            return colours;
        },
    });

    Object.keys(monacoEditor).forEach(k => {
        if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: () => monacoEditor[k]
        });
    });

}));
