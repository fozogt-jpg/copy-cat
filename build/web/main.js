/**
 * copy-cat: Copyright SquidDev 2026
 *
 *
 * @license
 */

define(['require', './persist-u9lROri2'], (function (require, persist) { 'use strict';

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

    const newZip = () => persist.__awaiter(void 0, void 0, void 0, function* () {
        return new (yield new Promise((resolve, reject) => require(['jszip'], m => resolve(/*#__PURE__*/_interopNamespaceDefault(m)), reject))).default();
    });

    const editorPlaceholder = "usgO5q_editorPlaceholder";
    const infoButtons = "usgO5q_infoButtons";
    const dialogueBox = "usgO5q_dialogueBox";
    const fileEntryHead = "usgO5q_fileEntryHead";
    const formGroup = "usgO5q_formGroup";
    const computerSplit = "usgO5q_computerSplit";
    const terminalView = "usgO5q_terminalView";
    const fileList = "usgO5q_fileList";
    const actionButton = "usgO5q_actionButton"+ " " + persist.actionButton;
    const fileEntryIcon = "usgO5q_fileEntryIcon";
    const iconFont = "usgO5q_iconFont"+ " " + persist.iconFont;
    const fileComputerControl = "usgO5q_fileComputerControl";
    const fileEntryName = "usgO5q_fileEntryName";
    const computerView = "usgO5q_computerView";
    const lightTheme = "usgO5q_lightTheme";
    const dialogueOverlay = "usgO5q_dialogueOverlay";
    const darkTheme = "usgO5q_darkTheme";
    const editorView = "usgO5q_editorView";
    const tinyText = "usgO5q_tinyText";
    const infoDescription = "usgO5q_infoDescription";
    const fileTree = "usgO5q_fileTree";
    const active = "usgO5q_active";
    const dragging = "usgO5q_dragging";
    const fileComputerActions = "usgO5q_fileComputerActions";
    const fileComputer = "usgO5q_fileComputer";
    const fileDropMarker = "usgO5q_fileDropMarker";
    persist.styleInject("html {\n  --color-dark-1: #1e1e1e;\n  --color-dark-2: #202020;\n  --color-dark-3: #292929;\n  --color-dark-4: #3b3b3b;\n  --color-dark-5: #555;\n  --color-light-1: #fff;\n  --color-light-2: #eee;\n  --color-light-3: #e7e7e7;\n  --color-light-4: #ddd;\n  --color-light-5: #ccc;\n  --color-yellow-1: #dede6c;\n}\n\n.usgO5q_lightTheme {\n  --text-color: var(--color-dark-2);\n  --text-accent: var(--color-dark-4);\n  --bg-color: var(--color-light-1);\n  --bg-file-tree: var(--color-light-2);\n  --bg-file-tree-item: var(--color-light-3);\n  --bg-file-tree-item-highlight: var(--color-light-4);\n  --bg-file-tree-item-highlight-active: var(--color-light-5);\n  --link-color: #03c5c5;\n  --bg-dialogue: var(--color-light-1);\n  --bg-input: var(--color-light-4);\n  --bg-code-block: var(--color-light-5);\n  --bg-button: var(--color-dark-1);\n}\n\n.usgO5q_darkTheme {\n  --text-color: var(--color-light-2);\n  --text-accent: var(--color-light-4);\n  --bg-color: var(--color-dark-1);\n  --bg-file-tree: var(--color-dark-2);\n  --bg-file-tree-item: var(--color-dark-3);\n  --bg-file-tree-item-highlight: var(--color-dark-4);\n  --bg-file-tree-item-highlight-active: var(--color-dark-5);\n  --link-color: var(--color-yellow-1);\n  --bg-dialogue: var(--color-dark-2);\n  --bg-input: var(--color-dark-5);\n  --bg-code-block: var(--color-dark-5);\n  --bg-button: var(--color-light-1);\n}\n\n@media (prefers-color-scheme: dark) {\n  body.usgO5q_lightTheme {\n    --text-color: var(--color-light-2);\n    --text-accent: var(--color-light-4);\n    --bg-color: var(--color-dark-1);\n    --bg-file-tree: var(--color-dark-2);\n    --bg-file-tree-item: var(--color-dark-3);\n    --bg-file-tree-item-highlight: var(--color-dark-4);\n    --bg-file-tree-item-highlight-active: var(--color-dark-5);\n    --link-color: var(--color-yellow-1);\n    --bg-dialogue: var(--color-dark-2);\n    --bg-input: var(--color-dark-5);\n    --bg-button: var(--color-dark-1);\n  }\n}\n\n.usgO5q_actionButton {\n  \n}\n\n.usgO5q_iconFont {\n  fill: var(--bg-button);\n}\n\n.usgO5q_infoDescription {\n  padding: 5px 10px;\n}\n\n.usgO5q_tinyText {\n  color: var(--text-accent);\n  font-size: .8em;\n  font-weight: 300;\n}\n\n.usgO5q_errorView {\n  color: #670000;\n  background-color: #ffb6b6;\n}\n\n.usgO5q_termLine:before {\n  content: \"> \";\n}\n\n.usgO5q_computerView {\n  height: 100%;\n}\n\n.usgO5q_computerSplit {\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  height: 100%;\n  display: flex;\n}\n\n.usgO5q_terminalView, .usgO5q_editorView {\n  background: var(--bg-color);\n  color: var(--text-color);\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: hidden;\n}\n\n.usgO5q_fileList {\n  background-color: var(--bg-file-tree);\n  max-width: 200px;\n  color: var(--text-color);\n  scrollbar-width: thin;\n  flex-basis: 200px;\n  font-size: .8em;\n  line-height: 1.4em;\n  position: relative;\n  overflow-y: auto;\n}\n\n.usgO5q_fileTree {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.usgO5q_fileEntryHead {\n  cursor: pointer;\n  background-color: var(--bg-file-tree-item);\n  padding: 5px 15px;\n}\n\n.usgO5q_fileComputerControl {\n  background-color: var(--bg-file-tree-item);\n  color: var(--text-color);\n  position: relative;\n}\n\n.usgO5q_fileComputer {\n  cursor: pointer;\n  background-color: var(--bg-file-tree-item);\n  color: var(--text-color);\n  padding: 10px 15px;\n  font-size: 1.3em;\n}\n\n.usgO5q_fileComputerActions {\n  pointer-events: none;\n  justify-content: flex-end;\n  align-items: center;\n  display: flex;\n  position: absolute;\n  inset: 0;\n}\n\n.usgO5q_fileComputerActions .usgO5q_actionButton {\n  pointer-events: all;\n  text-align: center;\n  width: 2em;\n  height: 2em;\n  margin: 5px;\n}\n\n.usgO5q_fileComputerActions .usgO5q_actionButton:hover {\n  background: #0000001a;\n}\n\n.usgO5q_fileEntryHead:hover, .usgO5q_fileComputer:hover {\n  background: var(--bg-file-tree-item-highlight);\n}\n\n.usgO5q_fileEntryHead.usgO5q_active, .usgO5q_fileComputer.usgO5q_active, .usgO5q_fileEntryHead.usgO5q_active:hover, .usgO5q_fileComputer.usgO5q_active:hover {\n  background: var(--bg-file-tree-item-highlight-active);\n}\n\n.usgO5q_fileEntryName {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.usgO5q_fileEntryIcon {\n  width: 1em;\n  padding: 0 5px;\n  display: inline-block;\n}\n\n.usgO5q_fileDropMarker {\n  display: none;\n}\n\n.usgO5q_fileList.usgO5q_dragging .usgO5q_fileDropMarker {\n  pointer-events: none;\n  background: #00000080;\n  flex-direction: column;\n  justify-content: center;\n  display: flex;\n  position: absolute;\n  inset: 0;\n}\n\n.usgO5q_fileDropMarker > span {\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n  font-size: 2em;\n  line-height: 1em;\n}\n\n.usgO5q_editorPlaceholder {\n  color: #aaa;\n  text-align: center;\n  margin: 1em;\n  font-size: 3em;\n}\n\n.usgO5q_infoButtons {\n  z-index: 50;\n  position: fixed;\n  bottom: 5px;\n  left: 5px;\n}\n\n.usgO5q_infoButtons > button {\n  opacity: .6;\n  padding: 0 3px;\n}\n\n.usgO5q_infoButtons > button:hover {\n  opacity: 1;\n}\n\n.usgO5q_dialogueOverlay {\n  z-index: 150;\n  background: #000000b3;\n  position: fixed;\n  inset: 0;\n}\n\n.usgO5q_dialogueBox {\n  box-sizing: border-box;\n  background: var(--bg-dialogue);\n  width: 90vw;\n  max-width: 800px;\n  max-height: 90vh;\n  color: var(--text-color);\n  margin: 0 auto;\n  padding: 20px;\n  position: relative;\n  top: 5vh;\n  overflow-y: scroll;\n}\n\n.usgO5q_dialogueBox a {\n  color: var(--link-color);\n}\n\n.usgO5q_formGroup {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.usgO5q_formGroup > label {\n  box-sizing: border-box;\n  flex-basis: 50%;\n  padding: 10px;\n  font-weight: 500;\n}\n\n.usgO5q_formGroup .usgO5q_tinyText {\n  overflow-wrap: anywhere;\n  color: var(--text-accent);\n  margin: 0;\n}\n\n.usgO5q_formGroup input[type=\"text\"], .usgO5q_formGroup input[type=\"number\"], .usgO5q_formGroup select {\n  background-color: var(--bg-input);\n  color: var(--text-color);\n  border-style: none;\n  border-radius: 4px;\n  width: 100%;\n  margin-top: 2px;\n  padding: 6px;\n  display: block;\n}\n\n.usgO5q_formGroup input[type=\"checkbox\"] {\n  margin: 0 5px 0 0;\n}\n\n@media (width <= 800px) {\n  .usgO5q_formGroup > label {\n    flex-basis: 100%;\n  }\n}\n\nh1, h2, h3, p {\n  color: var(--text-color);\n}\n");

    const mk = (child) => {
        const node = persist.u("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1000 1000", class: iconFont, children: child });
        return () => node;
    };
    const Cog = mk(persist.u("path", { d: "M571 650q0 -59 -41 -101t-101 -42 -101 42 -42 101 42 101 101 42 101 -42 41 -101zm286 -61v124q0 7 -4 13t-11 7l-104 16q-10 30 -21 51 19 27 59 77 6 6 6 13t-5 13q-15 21 -55 61t-53 39q-7 0 -14 -5l-77 -60q-25 13 -51 21 -9 76 -16 104 -4 16 -20 16h-124q-8 0 -14 -5t-6 -12l-16 -103q-27 -9 -50 -21l-79 60q-6 5 -14 5 -8 0 -14 -6 -70 -64 -92 -94 -4 -5 -4 -13 0 -6 5 -12 8 -12 28 -37t30 -40q-15 -28 -23 -55l-102 -15q-7 -1 -11 -7t-5 -13v-124q0 -7 5 -13t10 -7l104 -16q8 -25 22 -51 -23 -32 -60 -77 -6 -7 -6 -14 0 -5 5 -12 15 -20 55 -60t53 -40q7 0 15 5l77 60q24 -13 50 -21 9 -76 17 -104 3 -16 20 -16h124q7 0 13 5t7 12l15 103q28 9 51 20l79 -59q5 -5 13 -5 7 0 14 5 72 67 92 95 4 5 4 12 0 7 -4 13 -9 12 -29 37t-30 40q15 28 23 54l102 16q7 1 12 7t4 13z" }));
    const Info = mk(persist.u("path", { d: "M571 918v-89q0 -8 -5 -13t-12 -5h-54v-286q0 -8 -5 -13t-13 -5h-178q-8 0 -13 5t-5 13v89q0 8 5 13t13 5h53v179h-53q-8 0 -13 5t-5 13v89q0 8 5 13t13 5h250q7 0 12 -5t5 -13zm-71 -500v-89q0 -8 -5 -13t-13 -5h-107q-8 0 -13 5t-5 13v89q0 8 5 13t13 5h107q8 0 13 -5t5 -13zm357 232q0 117 -57 215t-156 156 -215 58 -216 -58 -155 -156 -58 -215 58 -215 155 -156 216 -58 215 58 156 156 57 215z" }));
    const Download = mk(persist.u("path", { d: "M714 900q0 -15 -10 -25t-25 -11 -25 11 -11 25 11 25 25 11 25 -11 10 -25zm143 0q0 -15 -10 -25t-26 -11 -25 11 -10 25 10 25 25 11 26 -11 10 -25zm72 -125v179q0 22 -16 37t-38 16h-821q-23 0 -38 -16t-16 -37v-179q0 -22 16 -38t38 -16h259l75 76q33 32 76 32t76 -32l76 -76h259q22 0 38 16t16 38zm-182 -318q10 23 -8 39l-250 250q-10 11 -25 11t-25 -11l-250 -250q-17 -16 -8 -39 10 -21 33 -21h143v-250q0 -15 11 -25t25 -11h143q14 0 25 11t10 25v250h143q24 0 33 21z" }));
    const Lua = mk(persist.u("path", { d: "M882 650c0 -211 -171 -382 -382 -382s-382 171 -382 382c0 211 171 382 382 382s382 -171 382 -382m-112 -158c0 -62 -50 -112 -112 -112s-111 50 -111 112c0 61 50 112 111 112s112 -51 112 -112m224 -224c0 -62 -50 -112 -112 -112s-112 50 -112 112c0 61 51 112 112 112s112 -50 112 -112", fill: "#000080" }));
    const Text = mk(persist.u("path", { d: "M819 362q16 16 27 42t11 50v642q0 23 -15 38t-38 16h-750q-23 0 -38 -16t-16 -38v-892q0 -23 16 -38t38 -16h500q22 0 49 11t42 27zm-248 -136v210h210q-5 -17 -12 -23l-175 -175q-6 -7 -23 -12zm215 853v-572h-232q-23 0 -38 -16t-16 -37v-233h-429v858h715zm-572 -483q0 -7 5 -12t13 -5h393q8 0 13 5t5 12v36q0 8 -5 13t-13 5h-393q-8 0 -13 -5t-5 -13v-36zm411 125q8 0 13 5t5 13v36q0 8 -5 13t-13 5h-393q-8 0 -13 -5t-5 -13v-36q0 -8 5 -13t13 -5h393zm0 143q8 0 13 5t5 13v36q0 8 -5 13t-13 5h-393q-8 0 -13 -5t-5 -13v-36q0 -8 5 -13t13 -5h393z" }));
    const RightOpen = mk(persist.u("path", { d: "M618 639l-414 415q-11 10 -25 10t-25 -10l-93 -93q-11 -11 -11 -25t11 -25l296 -297 -296 -296q-11 -11 -11 -25t11 -25l93 -93q10 -11 25 -11t25 11l414 414q10 11 10 25t-10 25z" }));
    const DownOpen = mk(persist.u("path", { d: "M939 601l-414 413q-10 11 -25 11t-25 -11l-414 -413q-11 -11 -11 -26t11 -25l93 -92q10 -11 25 -11t25 11l296 296 296 -296q11 -11 25 -11t26 11l92 92q11 11 11 25t-11 26z" }));

    let monacoVal = null;
    let unique = 0;
    const modelFactory = (m, out, contents, name) => {
        unique++; // We keep a unique id to ensure the Uri is not repeated.
        const mode = name.endsWith(".lua") ? "luax" : undefined;
        const text = m.editor.createModel(contents, mode, m.Uri.file(`f${unique.toString(16)}/${name}`));
        text.updateOptions({ trimAutoWhitespace: true });
        text.detectIndentation(true, 2);
        const model = out;
        model.resolved = true;
        model.text = text;
        model.view = null;
        return model;
    };
    const forceModel = (model) => {
        if (model.resolved)
            return model;
        const resolved = modelFactory(monacoVal, model, model.contents, model.name);
        const old = model;
        delete old.contents;
        delete old.mode;
        return resolved;
    };
    const createModel = (contents, name) => {
        if (monacoVal)
            return modelFactory(monacoVal, {}, contents, name);
        const model = {
            resolved: false, contents, name,
            promise: new Promise((resolve, reject) => require(['./index-DAdd-3zI'], resolve, reject)).then(m => {
                monacoVal = m;
                return forceModel(model);
            }),
        };
        return model;
    };
    class Editor extends persist.x {
        constructor() {
            super(...arguments);
            /**
             * When the window resizes, we also need to update the editor's dimensions.
             */
            this.onResize = () => { var _a; return (_a = this.editor) === null || _a === void 0 ? void 0 : _a.layout(); };
        }
        componentDidMount() {
            window.addEventListener("resize", this.onResize);
            this.setupEditor();
        }
        setupEditor() {
            if (!monacoVal) {
                const promise = this.editorPromise = new Promise((resolve, reject) => require(['./index-DAdd-3zI'], resolve, reject))
                    .then(x => {
                    monacoVal = x;
                    if (this.editorPromise !== promise)
                        return;
                    this.setupEditor();
                })
                    .catch(err => console.error(err));
                // TODO: Actually decent handling.
                return;
            }
            this.editorPromise = undefined;
            // Clear the body of any elements
            const base = this.base;
            while (base.firstChild)
                base.firstChild.remove();
            this.editor = monacoVal.editor.create(base, {
                roundedSelection: false,
                autoIndent: "full",
            });
            this.editor.addAction({
                id: "save",
                label: "Save",
                keybindings: [
                    monacoVal.KeyMod.CtrlCmd | monacoVal.KeyCode.KeyS,
                ],
                contextMenuGroupId: "file",
                contextMenuOrder: 1.5,
                run: editor => {
                    var _a;
                    if (this.props.settings.trimWhitespace) {
                        void ((_a = editor.getAction("editor.action.trimTrailingWhitespace")) === null || _a === void 0 ? void 0 : _a.run());
                    }
                    this.props.doSave(editor.getValue());
                },
            });
            this.syncOptions();
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.onResize);
            if (!this.editor)
                return;
            // Save the view state back to the model
            forceModel(this.props.model).view = this.editor.saveViewState();
            // And save the file
            this.props.doSave(this.editor.getValue());
            // We set a new session to prevent destroying it when losing the editor
            this.editor.dispose();
        }
        componentWillUpdate() {
            if (!this.editor)
                return;
            // Save the view state back to the model
            forceModel(this.props.model).view = this.editor.saveViewState();
        }
        componentDidUpdate() {
            if (!this.editor)
                return;
            this.syncOptions();
        }
        syncOptions() {
            if (!this.editor)
                return;
            // No view patterns, alas.
            const settings = this.props.settings;
            const model = forceModel(this.props.model);
            this.editor.setModel(model.text);
            if (model.view)
                this.editor.restoreViewState(model.view);
            this.editor.updateOptions({
                renderWhitespace: settings.showInvisible ? "boundary" : "none",
            });
            if (monacoVal !== null) {
                monacoVal.editor.setTheme(settings.darkMode ? "vs-dark" : "vs");
            }
            // TODO: Tab size
            if (this.props.focused)
                this.editor.focus();
        }
        render() {
            return persist.u("div", { class: editorView, children: monacoVal ? undefined : persist.u("div", { class: editorPlaceholder, children: "Loading..." }) });
        }
    }

    const getIcon = (name, directory, expanded) => {
        if (directory)
            return expanded ? persist.u(DownOpen, {}) : persist.u(RightOpen, {});
        if (name.endsWith(".lua"))
            return persist.u(Lua, {});
        return persist.u(Text, {});
    };
    class FileEntry extends persist.x {
        shouldComponentUpdate({ entry, depth, opened }, { expanded }) {
            return entry !== this.props.entry || depth !== this.props.depth || opened !== this.props.opened ||
                expanded !== this.state.expanded;
        }
        render({ computer, entry, name, path, depth, opened, open }, { expanded }) {
            return persist.u("li", { children: [persist.u("div", { class: `${fileEntryHead} ${opened === path ? active : ""}`, style: `padding-left: ${depth}em`, onClick: entry.isDirectory() ? () => this.setState({ expanded: !expanded }) : () => open(path, entry), children: [persist.u("span", { class: fileEntryIcon, children: getIcon(name, entry.isDirectory(), expanded !== null && expanded !== void 0 ? expanded : false) }), persist.u("span", { class: fileEntryName, children: name })] }), expanded
                        ? persist.u(FileTree, { computer: computer, entry: entry, path: path, depth: depth, opened: opened, open: open })
                        : null] });
        }
    }
    class FileTree extends persist.x {
        constructor() {
            super(...arguments);
            this.listener = () => this.setState({ children: this.props.entry.getChildren() });
        }
        shouldComponentUpdate({ entry, depth, opened }, { children }) {
            return entry !== this.props.entry || depth !== this.props.depth || children !== this.state.children ||
                opened !== this.props.opened;
        }
        render({ computer, entry, path, depth, opened, open }, { children }) {
            // Handle the case when we may have been deleted.
            if (!entry.doesExist())
                return "";
            // Gather all children, and then sort them.
            const entries = (children !== null && children !== void 0 ? children : entry.getChildren()).map(childName => {
                const childPath = persist.joinName(path, childName);
                const child = computer.getEntry(childPath);
                return {
                    name: childName, dir: child.isDirectory(),
                    node: persist.u(FileEntry, { computer: computer, entry: child, path: childPath, name: childName, depth: depth === undefined ? 0 : depth + 1, opened: opened, open: open }),
                };
            });
            entries.sort((a, b) => {
                if (a.dir !== b.dir)
                    return a.dir ? -1 : 1;
                return a.name < b.name ? -1 : 1;
            });
            return persist.u("ul", { class: fileTree, children: entries.map(x => x.node) });
        }
        componentDidMount() {
            this.props.entry.getSemaphore().attach(this.listener);
        }
        componentWillUnmount() {
            this.props.entry.getSemaphore().detach(this.listener);
        }
        componentDidUpdate({ entry }) {
            if (this.props.entry !== entry) {
                this.props.entry.getSemaphore().detach(this.listener);
                entry.getSemaphore().attach(this.listener);
            }
        }
    }

    const createZip = (computer) => persist.__awaiter(void 0, void 0, void 0, function* () {
        const zip = yield newZip();
        const queue = [""];
        while (true) {
            const path = queue.pop();
            if (path === undefined)
                break;
            const entry = computer.getEntry(path);
            if (!entry)
                continue;
            if (entry.isDirectory()) {
                if (path !== "")
                    zip.folder(path);
                for (const child of entry.getChildren())
                    queue.push(persist.joinName(path, child));
            }
            else {
                zip.file(path, entry.getContents().buffer);
            }
        }
        return zip.generateAsync({ type: "blob" });
    });
    /**
     * Determine if this is a simple archive - namely every child within it occurs
     * within a directory with the same name as the archive.
     * @param zip The zip to check.
     * @param name The zip file's name, without the `.zip` extension.
     * @return If this is a simple archive.
     */
    const isSimpleZip = (zip, name) => {
        for (const fileName in zip.files) {
            if (!Object.prototype.hasOwnProperty.call(zip.files, fileName))
                continue;
            // Require every child to be in the ${name} directory.
            if (!fileName.startsWith(name + "/"))
                return false;
        }
        return true;
    };
    class Computer extends persist.x {
        constructor(props, context) {
            var _a;
            super(props, context);
            this.openFile = (path, file) => {
                if (file.isDirectory())
                    return;
                let entry = this.state.openFiles.get(file);
                if (typeof entry === "undefined") {
                    const model = createModel(file.getStringContents(), path);
                    const monitor = () => {
                        if (!file.doesExist()) {
                            // If the file has been deleted, dispose the model and remove from the cache.
                            if (model.resolved)
                                model.text.dispose();
                            file.getSemaphore().detach(monitor);
                            this.state.openFiles.delete(file);
                        }
                    };
                    entry = { model, monitor };
                    this.state.openFiles.set(file, entry);
                    file.getSemaphore().attach(monitor);
                }
                else {
                    // Update the contents from the file. Note, this may mess up the view a little - we'll have to cope.
                    const model = entry.model;
                    const contents = file.getStringContents();
                    if (model.resolved) {
                        if (contents !== model.text.getValue())
                            model.text.setValue(contents);
                    }
                    else {
                        model.contents = contents;
                    }
                }
                this.setState({ activeFile: { file, path, model: entry.model } });
            };
            this.openComputer = () => {
                this.setState({ activeFile: null });
            };
            this.saveZip = (e) => {
                e.preventDefault();
                e.stopPropagation();
                createZip(this.state.computer)
                    .then(x => persist.saveBlob("computer", "zip", x))
                    .catch(err => console.error(err));
            };
            this.startDrag = (e) => {
                e.preventDefault();
                if (!this.state.dragging)
                    this.setState({ dragging: true });
            };
            this.stopDrag = () => {
                this.setState({ dragging: false });
            };
            this.dropFile = (e) => {
                e.preventDefault();
                this.setState({ dragging: false });
                if (!e.dataTransfer)
                    return;
                if (e.dataTransfer.items) {
                    const items = e.dataTransfer.items;
                    // eslint-disable-next-line @typescript-eslint/prefer-for-of
                    for (let i = 0; i < items.length; i++) {
                        const item = items[i];
                        if (item.kind === "file")
                            this.addFile(item.getAsFile());
                    }
                }
                else {
                    const files = e.dataTransfer.files;
                    // eslint-disable-next-line @typescript-eslint/prefer-for-of
                    for (let i = 0; i < files.length; i++)
                        this.addFile(files[i]);
                }
            };
            const terminal = new persist.TerminalData();
            const terminalChanged = new persist.Semaphore();
            const computer = new persist.ComputerAccess(new persist.StoragePersistence(0), terminal, terminalChanged, (label, on) => this.setState({ label, on }));
            // Create a startup file if specified.
            for (const field of window.location.search.substring(1).split("&")) {
                const [key, value] = field.split("=");
                if (key !== "startup")
                    continue;
                let contents;
                try {
                    contents = atob(value);
                }
                catch (e) {
                    console.error(e);
                    break;
                }
                contents = contents
                    .replace(/(\\|\n|")/g, "\\$1")
                    .replace("\r", "\\r").replace("\0", "\\0");
                // We create a startup script which deletes itself, and then runs the
                // original program. This allows it to be invisible, even in the event
                // of syntax errors.
                (_a = computer.createFile("startup.lua").value) === null || _a === void 0 ? void 0 : _a.setContents(`
fs.delete("startup.lua")
local fn, err = load("${contents}", "@startup.lua", nil, _ENV)
if not fn then error(err, 0) end
fn()`);
            }
            this.setState({
                terminal, terminalChanged, computer,
                activeFile: null, openFiles: new Map(),
                id: 0, on: false, label: computer.getLabel(),
                dragging: false,
            });
        }
        componentDidMount() {
            this.state.computer.start(this.props.computerSettings);
        }
        componentWillUnmount() {
            this.state.computer.shutdown();
            for (const [file, { model, monitor }] of this.state.openFiles) {
                if (model.resolved)
                    model.text.dispose();
                file.getSemaphore().detach(monitor);
            }
        }
        shouldComponentUpdate({ focused, settings }, { id, label, on, activeFile, dragging }) {
            return focused !== this.props.focused || settings !== this.props.settings ||
                id !== this.state.id || label !== this.state.label || on !== this.state.on ||
                activeFile !== this.state.activeFile || dragging !== this.state.dragging;
        }
        render({ settings, focused }, { terminal, terminalChanged, computer, activeFile, id, label, on, dragging: dragging$1 }) {
            return persist.u("div", { class: computerView, children: persist.u("div", { class: computerSplit, children: [persist.u("div", { class: `${fileList} ${dragging$1 ? dragging : ""}`, onDragOver: this.startDrag, onDragLeave: this.stopDrag, onDrop: this.dropFile, children: [persist.u("div", { class: fileComputerControl, children: [persist.u("div", { class: `${fileComputer} ${activeFile == null ? active : ""}`, onClick: this.openComputer, children: id ? `Computer #${id}` : "Computer" }), persist.u("div", { class: fileComputerActions, children: persist.u("button", { class: actionButton, type: "button", onClick: this.saveZip, title: "Download all files as a zip", children: persist.u(Download, {}) }) })] }), persist.u(FileTree, { computer: computer, entry: computer.getEntry(""), path: "", opened: activeFile === null ? null : activeFile.path, open: this.openFile }), persist.u("div", { class: fileDropMarker, children: persist.u("span", { children: "Upload to your computer!" }) })] }), activeFile == null
                            ? persist.u("div", { class: terminalView, children: persist.u(persist.Terminal, { terminal: terminal, changed: terminalChanged, focused: focused, computer: computer, font: settings.terminalFont, id: id, label: label, on: on }) })
                            : persist.u(Editor, { model: activeFile.model, settings: settings, focused: focused, doSave: contents => activeFile.file.setContents(contents) })] }) });
        }
        addOneFile(name, contents) {
            const index = name.lastIndexOf(".");
            const prefix = index > 0 ? name.substring(0, index) : name;
            const suffix = index > 0 ? name.substring(index) : "";
            // Add a number until we find a unique file. Or just give up at 100.
            const computer = this.state.computer;
            for (let i = 0; i < 100; i++) {
                const uniqueName = i === 0 ? name : `${prefix}.${i}${suffix}`;
                if (computer.getEntry(uniqueName))
                    continue;
                const result = this.state.computer.createFile(uniqueName);
                if (!result.value)
                    continue;
                result.value.setContents(contents);
                return;
            }
            console.warn(`Cannot write contents of ${name}.`);
        }
        addFile(file) {
            if (file.name.endsWith(".zip")) {
                // We attempt to unpack a zip file into a folder with the same name.
                newZip()
                    .then((zip) => persist.__awaiter(this, void 0, void 0, function* () {
                    yield zip.loadAsync(file);
                    const computer = this.state.computer;
                    const zipName = file.name.substring(0, file.name.length - 4);
                    let dirName;
                    for (let i = 0; i < 100; i++) {
                        dirName = i === 0 ? zipName : `${zipName}.${i}`;
                        if (computer.getEntry(dirName))
                            continue;
                        const result = this.state.computer.createDirectory(dirName);
                        if (result.value)
                            break;
                    }
                    const offset = isSimpleZip(zip, zipName) ? zipName.length + 1 : 0;
                    for (const fileName in zip.files) {
                        if (!Object.prototype.hasOwnProperty.call(zip.files, fileName) || fileName.length === offset)
                            continue;
                        let fullName = `${dirName}/${fileName.substr(offset)}`;
                        const entry = zip.files[fileName];
                        if (entry.dir) {
                            if (fullName.endsWith("/"))
                                fullName = fullName.substring(0, fullName.length - 1);
                            if (!computer.createDirectory(fullName))
                                console.warn(`Cannot create directory ${fullName}.`);
                        }
                        else {
                            this.addOneFile(fullName, yield entry.async("arraybuffer"));
                        }
                    }
                }))
                    .catch(e => console.error(e));
            }
            else {
                const reader = new FileReader();
                reader.onload = () => this.addOneFile(file.name, reader.result);
                reader.readAsArrayBuffer(file);
            }
        }
    }

    persist.u("div", { class: infoDescription, children: persist.u("p", { children: ["Think you've found a bug? Have a suggestion? Why not put it on ", persist.u("a", { href: "https://github.com/SquidDev-CC/copy-cat", title: "The GitHub repository", children: "the GitHub repo" }), "?"] }) });
    const About = () => persist.u("div", { class: dialogueBox, children: [persist.u("h2", { children: "About" }), persist.u("p", { children: ["Copy Cat is a web emulator for the popular Minecraft mod ", persist.u("a", { href: "https://github.com/cc-tweaked/CC-Tweaked", target: "_blank", title: "CC: Tweaked's source code", children: "CC: Tweaked" }), " (based on ComputerCraft by Dan200). Here you can play with a ComputerCraft computer, write and test programs and experiment to your heart's desire, without having to leave your browser!"] }), persist.u("p", { children: ["However, due to the limitations of Javascript, some functionality may not be 100% accurate (most notably, that to do with HTTP and filesystems). For even closer emulation, I'd recommend ", persist.u("a", { href: "https://emux.cc/", target: "_blank", title: "The CCEmuX emulator", children: "CCEmuX" }), "."] }), persist.u("p", { children: ["If you need help writing a program, I'd recommend checking out the ", persist.u("a", { href: "https://forums.computercraft.cc/", target: "_blank", title: "The CC: Tweaked forums", children: "forums" }), " or ", persist.u("a", { href: "https://discord.computercraft.cc", title: "The Minecraft Computer Mods Discord", target: "_blank", children: "Discord" }), ". ", persist.u("a", { href: "https://tweaked.cc", target: "_blank", title: "The CC: Tweaked wiki", children: "The CC: Tweaked wiki" }), " may also be a good source of documentation."] }), persist.u("p", { children: ["Of course, this emulator is sure to have lots of bugs and missing features. If you've found a problem, why not put it on ", persist.u("strong", { children: persist.u("a", { href: "https://github.com/SquidDev-CC/copy-cat/issues", title: "The Copy Cat GitHub issue tracker", children: "the GitHub repo" }) }), "?"] }), persist.u("h3", { children: "Credits" }), persist.u("p", { children: "Copy Cat would not be possible without the help of several Open Source projects." }), persist.u("ul", { children: [persist.u("li", { children: [persist.u("a", { href: "https://github.com/konsoletyper/teavm", target: "_blank", children: "TeaVM" }), ": Apache 2.0"] }), persist.u("li", { children: [persist.u("a", { href: "https://github.com/google/guava", target: "_blank", children: "Google Guava" }), ": Apache 2.0"] }), persist.u("li", { children: [persist.u("a", { href: "https://github.com/apache/commons-lang", target: "_blank", children: "Apache Commons Lang" }), ": Apache 2.0, Copyright 2001-2018 The Apache Software Foundation"] }), persist.u("li", { children: [persist.u("a", { href: "https://github.com/cc-tweaked/Cobalt", target: "_blank", children: "Cobalt/LuaJ" }), ": MIT, Copyright (c) 2009-2011 Luaj.org. All rights reserved., modifications Copyright (c) 2015-2016 SquidDev"] }), persist.u("li", { children: [persist.u("a", { href: "https://github.com/cc-tweaked/CC-Tweaked", target: "_blank", children: "CC: Tweaked" }), ": ComputerCraft Public License"] }), persist.u("li", { children: [persist.u("a", { href: "https://github.com/FortAwesome/Font-Awesome/", target: "_blank", children: "Font Awesome" }), ": CC BY 4.0"] }), persist.u("li", { children: ["Numerous Javascript libraries. A full list can be found ", persist.u("a", { href: "dependencies.txt", target: "_blank", children: "in the dependencies list" }), " or at the top of any Javascript file."] })] }), persist.u("pre", { children: `This product includes software developed by Alexey Andreev (http://teavm.org).

This product includes software developed by The Apache Software Foundation (http://www.apache.org/).

This product includes software developed by Joda.org (http://www.joda.org/).` })] });

    /**
     * The persisted map for settings
     */
    class SettingStore {
        constructor() {
            this.data = {}; // eslint-disable-line @typescript-eslint/no-explicit-any
            const settingJson = persist.get("settings");
            if (settingJson !== null) {
                try {
                    this.data = JSON.parse(settingJson);
                }
                catch (e) {
                    console.error("Cannot read settings", e);
                }
            }
        }
        /** Get the value of a config property under the current storage */
        get(property) {
            return property.id in this.data ? this.data[property.id] : property.def;
        }
        /** Set a value and fire any callbacks */
        set(property, value) {
            if (this.get(property) === value)
                return;
            this.data[property.id] = value;
            property.changed(value);
            persist.set("settings", JSON.stringify(this.data));
        }
    }
    class ConfigGroup {
        constructor(name, description, store) {
            this.properties = [];
            this.name = name;
            this.description = description;
            this.store = store;
        }
        add(property) {
            this.properties.push(property);
            const value = this.store.get(property);
            if (value !== property.def)
                property.changed(value);
            return property;
        }
        addString(id, name, def, description, changed) {
            return this.add({ type: "string", id, name, description, def, changed });
        }
        addBoolean(id, name, def, description, changed) {
            return this.add({ type: "boolean", id, name, description, def, changed });
        }
        addOption(id, name, def, choices, description, changed) {
            return this.add({ type: "option", id, name, description, choices, def, changed });
        }
        addInt(id, name, def, min, max, description, changed) {
            return this.add({ type: "int", id, name, description, def, min, max, changed });
        }
    }
    function getUpdater(store, property, extract) {
        return e => {
            const value = extract(e.target);
            if (value !== undefined)
                store.set(property, value);
        };
    }
    const getString = (x) => x.value;
    const getNumber = (x) => {
        const v = parseInt(x.value, 10);
        return Number.isNaN(v) ? undefined : v;
    };
    const getBool = (x) => x.checked;
    const getOption = (def, choices) => (x) => {
        for (const { key } of choices) {
            if (key === x.value)
                return key;
        }
        return def;
    };
    const Settings = ({ store, configGroups }) => persist.u("div", { class: dialogueBox, children: [persist.u("h2", { children: "Settings" }), configGroups.map(({ name, description, properties }) => [
                persist.u("h3", { children: name }),
                description ? persist.u("p", { class: tinyText, children: description }) : null,
                persist.u("div", { class: formGroup, children: properties.map(property => {
                        switch (property.type) {
                            case "string":
                                return persist.u("label", { children: [property.name, persist.u("input", { type: "text", value: store.get(property), onChange: getUpdater(store, property, getString) }), persist.u("p", { class: tinyText, children: property.description })] });
                            case "int":
                                return persist.u("label", { children: [property.name, persist.u("input", { type: "number", value: store.get(property), min: property.min, max: property.max, step: 1, onChange: getUpdater(store, property, getNumber) }), persist.u("p", { class: tinyText, children: property.description })] });
                            case "boolean":
                                return persist.u("label", { children: [persist.u("input", { type: "checkbox", checked: store.get(property), onInput: getUpdater(store, property, getBool) }), property.name, persist.u("p", { class: tinyText, children: property.description })] });
                            case "option":
                                return persist.u("label", { children: [property.name, persist.u("select", { value: store.get(property), onInput: getUpdater(store, property, getOption(property.def, property.choices)), children: property.choices.map(({ key, value }) => persist.u("option", { value: key, children: value })) }), persist.u("p", { class: tinyText, children: property.description })] });
                        }
                    }) }),
            ])] });

    const classNames = (...classes) => classes.filter(x => !!x).join(" ");

    var _a;
    class Main extends persist.x {
        constructor(props, context) {
            super(props, context);
            this.openSettings = () => {
                this.setState({
                    dialogue: ({ settingStorage, configGroups }) => persist.u(Settings, { store: settingStorage, configGroups: configGroups }),
                });
            };
            this.closeDialogueClick = (e) => {
                if (e.target === e.currentTarget)
                    this.setState({ dialogue: undefined });
            };
            this.computerVDom = ({ settings, dialogue }) => {
                return persist.u(Computer, { settings: settings, focused: dialogue === undefined, computerSettings: this.configFactory });
            };
            this.configFactory = (name, description) => {
                const existing = this.state.configGroups.find(x => x.name === name);
                if (existing) {
                    if (existing.description !== description) {
                        console.warn(`Different descriptions for ${name} ("${description}" and "${existing.description}")`);
                    }
                    return existing;
                }
                const group = new ConfigGroup(name, description, this.state.settingStorage);
                this.setState(s => ({ configGroups: [...s.configGroups, group] }));
                return group;
            };
        }
        componentWillMount() {
            const settingStorage = new SettingStore();
            const configEditor = new ConfigGroup("Editor", "Configure the built-in editor", settingStorage);
            const configTerminal = new ConfigGroup("Terminal", "Configure the terminal display", settingStorage);
            const configGroups = [configEditor, configTerminal];
            const state = {
                settingStorage, configGroups,
                settings: {
                    showInvisible: true, trimWhitespace: true, darkMode: false,
                    terminalFont: persist.termFont,
                },
                currentVDom: this.computerVDom,
            };
            this.setState(state);
            // Declare our settings
            configEditor.addBoolean("editor.invisible", "Show invisible", state.settings.showInvisible, "Show invisible characters, such as spaces and tabs.", x => this.setState(s => ({ settings: Object.assign(Object.assign({}, s.settings), { showInvisible: x }) })));
            configEditor.addBoolean("editor.trim_whitespace", "Trim whitespace", state.settings.trimWhitespace, "Trim whitespace from files when saving.", x => this.setState(s => ({ settings: Object.assign(Object.assign({}, s.settings), { trimWhitespace: x }) })));
            configEditor.addBoolean("editor.dark", "Dark mode", state.settings.darkMode, "Enables dark mode.", x => {
                this.setState(s => ({ settings: Object.assign(Object.assign({}, s.settings), { darkMode: x }) }));
            });
            const fonts = {
                "standard": persist.termFont,
                "hd": persist.termFontHd,
                // Add some fallbacks for previous versions.
                [persist.termFontHd]: persist.termFontHd, "term_font_hd.png": persist.termFontHd,
                [persist.termFont]: persist.termFont, "term_font.png": persist.termFont
            };
            configTerminal.addOption("terminal.font", "Font", "standard", [
                { key: "standard", value: "Standard font" },
                { key: "hd", value: "High-definition font" },
            ], "Which font the we should use within the terminal", x => this.setState(s => ({ settings: Object.assign(Object.assign({}, s.settings), { terminalFont: fonts[x] || persist.termFontHd }) })));
        }
        shouldComponentUpdate(_, newState) {
            return this.state.currentVDom !== newState.currentVDom ||
                this.state.dialogue !== newState.dialogue ||
                this.state.settings !== newState.settings;
        }
        render(_, state) {
            return persist.u("div", { class: classNames("container", state.settings.darkMode ? darkTheme : lightTheme), children: [state.currentVDom(state), persist.u("div", { class: infoButtons, children: [persist.u("button", { class: actionButton, title: "Configure how the emulator behaves", type: "button", onClick: this.openSettings, children: persist.u(Cog, {}) }), persist.u("button", { class: actionButton, title: "Find out more about the emulator", type: "button", onClick: () => this.setState({ dialogue: () => persist.u(About, {}) }), children: persist.u(Info, {}) })] }), state.dialogue ?
                        persist.u("div", { class: dialogueOverlay, onClick: this.closeDialogueClick, children: state.dialogue(state) }) : ""] });
        }
    }
    {
        requirejs.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs" } });
        window.MonacoEnvironment = {
            getWorkerUrl: (_workerId, _label) => `data:text/javascript;charset=utf-8,${encodeURIComponent(`
      self.MonacoEnvironment = {
        baseUrl: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/"
      };
      importScripts("https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs/base/worker/workerMain.js");
    `)}`,
        };
        // Start the window!
        const page = document.getElementById("page");
        persist.G(persist.u(Main, {}), page, (_a = page.lastElementChild) !== null && _a !== void 0 ? _a : undefined);
    }

}));
