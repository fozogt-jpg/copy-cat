/**
 * copy-cat: Copyright SquidDev 2026
 *
 *
 * @license
 */

define(['./persist-u9lROri2', 'require'], (function (persist, requirejs) { 'use strict';

    const emptyGroup = {
        addString: () => { },
        addBoolean: () => { },
        addInt: () => { },
    };
    class Computer extends persist.x {
        constructor(props, context) {
            var _a, _b;
            super(props, context);
            const { persistId, hdFont } = props;
            const terminal = new persist.TerminalData();
            const terminalChanged = new persist.Semaphore();
            const computer = new persist.ComputerAccess(persistId === undefined ? new persist.VoidPersistence() : new persist.StoragePersistence(persistId), terminal, terminalChanged, (label, on) => this.setState({ label, on }));
            (_a = props.resolve) === null || _a === void 0 ? void 0 : _a.call(props, computer);
            const font = typeof hdFont === "string" ? hdFont :
                // We need to do some terrible path hackery to get this to resolve relative to the
                // current script (and thus copy-cat.squiddev.ccc).
                // termFont{Hd,} will be of the form "termFont_xxx.png" - we convert it to
                // "./termFont_xxx.png", and then resolve.
                requirejs.toUrl("./" + (hdFont === undefined || hdFont ? persist.termFontHd : persist.termFont));
            // Set up the file system from the list of files given.
            const files = (_b = props.files) !== null && _b !== void 0 ? _b : {};
            for (const fileName in files) {
                if (!Object.prototype.hasOwnProperty.call(files, fileName))
                    continue;
                const [dirName,] = persist.splitName(fileName);
                if (dirName) {
                    const dir = computer.createDirectory(dirName);
                    if (dir.value === null)
                        throw new Error(dir.error);
                }
                const contents = files[fileName];
                const file = computer.createFile(fileName);
                if (file.value === null)
                    throw new Error(file.error);
                const written = file.value.setContents(contents);
                if (written.value === null)
                    throw new Error(written.error);
            }
            const peripherals = props.peripherals;
            if (peripherals) {
                for (const side in peripherals) {
                    if (!Object.prototype.hasOwnProperty.call(peripherals, side))
                        continue;
                    const kind = peripherals[side];
                    if (kind !== null && kind !== undefined)
                        computer.setPeripheral(side, kind);
                }
            }
            this.setState({
                on: false,
                label: null,
                font, terminal, terminalChanged, computer
            });
        }
        componentDidMount() {
            this.state.computer.start(() => emptyGroup, this.props);
        }
        componentWillUnmount() {
            this.state.computer.dispose();
        }
        render(_, { font, computer, terminal, terminalChanged, label, on }) {
            return persist.u(persist.Terminal, { terminal: terminal, changed: terminalChanged, focused: true, computer: computer, font: font, id: 0, label: label, on: on });
        }
    }
    const exported = (element, options) => {
        return new Promise((resolve, _) => persist.G(persist.u(Computer, Object.assign({ resolve: resolve }, (options !== null && options !== void 0 ? options : {}))), element));
    };
    exported.h = persist._;
    exported.Component = persist.x;
    exported.render = persist.G;
    exported.Computer = Computer;

    return exported;

}));
