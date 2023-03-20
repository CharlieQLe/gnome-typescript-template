declare function _(id: string): string;

// CONSOLE
declare const console: {
    assert(condition: boolean, data: any): void;
    clear(): void;
    count(label: string): void;
    countReset(label: string): void;
    debug(...data: any): void;
    dir(item: Object): void;
    dirxml(...data: any): void;
    error(...data: any): void;
    group(...data: any): void;
    groupCollapsed(...data: any): void;
    groupEnd(): void;
    info(...data: any): void;
    log(...data: any): void;
    table(tabularData: any): void;
    time(label: string): void;
    timeEnd(label: string): void;
    timeLog(label: string, ...data: any): void;
    trace(...data: any): void;
    warn(...data: any): void;
};

declare module "console" {
    export function setConsoleLogDomain(domain: string);
    export function getConsoleLogDomain(): string;
    export const DEFAULT_LOG_DOMAIN: string;
}

// ENCODING
declare class TextDecoder {
    fatal: boolean;
    ignoreBOM: boolean;

    constructor(utfLabel: string = "utf-8", options?: { fatal: boolean = false });

    decode(buffer: ArrayBuffer | DataView | Uint8Array, options?: { fatal: boolean = false }): string;
}

declare class TextEncoder {
    get encoding(): string;

    encode(string: string): Uint8Array;

    encodeInto(input: string, output: Uint8Array): { read: number, written: number };
}

// LOGGING
declare function print(...messages: any): void;
declare function printErr(...messages: any): void;
declare function log(message: any): void;
declare function logError(error: Error, prefix?: string): void;

// PKG
declare const pkg: {
    name: string;
    version: string;
    prefix: string;
    datadir: string;
    libdir: string;
    pkgdatadir: string;
    moduledir: string;
    pkglibdir: string;
    localedir: string;

    init();
    initGettext();
    initFormat();
    initSubmodule(name: string);
    loadResource(name: string);
    requires(deps: {});
};

// SYSTEM
declare class system {
    export const System: {
        programArgs: string[];
        programInvocationName: string;
        programPath: string;
        version: string;

        addressOf(object: Object): string;
        addressOfGObject(gobject: GObject.Object): string;
        breakpoint(): void;
        clearDateCaches(): void;
        dumpHeap(path?: string): void;
        dumpMemoryInfo(path?: string): void;
        exit(code: number): void;
        gc(): void;
        refcount(gobject: GObject.Object): void;
    }
}

// TIMERS
declare function setInterval(handler: Function, timeout?: number, ...arguments?: any[]): GLib.Source;
declare function clearInterval(id: GLib.Source): void;
declare function setTimeout(handler: Function, timeout?: number, ...arguments?: any[]): GLib.Source;
declare function clearTimeout(id: GLib.Source): void;