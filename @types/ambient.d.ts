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

// GI MODULES
declare module "gi://Adw" {
    export * as default from "adw1";
}

declare module "gi://Adw?version=1" {
    export * as default from "adw1";
}

declare module "gi://cairo" {
    export * as default from "cairo1";
}

declare module "gi://DBus" {
    export * as default from "dbus1";
}

declare module "gi://DBusGLib" {
    export * as default from "dbusglib1";
}

declare module "gi://fontconfig" {
    export * as default from "fontconfig2";
}

declare module "gi://freetype2" {
    export * as default from "freetype22";
}

declare module "gi://Gdk" {
    export * as default from "gdk4";
}

declare module "gi://Gdk?version=4.0" {
    export * as default from "gdk4";
}

declare module "gi://GdkPixbuf" {
    export * as default from "gdkpixbuf2";
}

declare module "gi://GdkPixdata" {
    export * as default from "gdkpixdata2";
}

declare module "gi://GdkWayland" {
    export * as default from "gdkwayland4";
}

declare module "gi://GdkX11?version=4.0" {
    export * as default from "gdkx114";
}

declare module "gi://Gio" {
    export * as default from "gio2";
}

declare module "gi://GIRepository" {
    export * as default from "girepository2";
}

declare module "gi://GL" {
    export * as default from "gl1";
}

declare module "gi://GLib" {
    export * as default from "glib2";
}

declare module "gi://GModule" {
    export * as default from "gmodule2";
}

declare module "gi://GObject" {
    export * as default from "gobject2";
}

declare module "gi://Graphene" {
    export * as default from "graphene1";
}

declare module "gi://Gsk" {
    export * as default from "gsk4";
}

declare module "gi://Gtk" {
    export * as default from "gtk4";
}

declare module "gi://Gtk?version=4.0" {
    export * as default from "gtk4";
}

declare module "gi://GtkSource?version=5.0" {
    export * as default from "gtksource5";
}

declare module "gi://HarfBuzz" {
    export * as default from "harfbuzz2";
}

declare module "gi://JavaScriptCore?version=5.0" {
    export * as default from "javascriptcore5";
}

declare module "gi://libxml2" {
    export * as default from "libxml22";
}

declare module "gi://Manette" {
    export * as default from "manette0";
}

declare module "gi://Pango" {
    export * as default from "pango1";
}

declare module "gi://PangoCairo" {
    export * as default from "pangocairo1";
}

declare module "gi://PangoFc" {
    export * as default from "pangofc1";
}

declare module "gi://PangoFT2" {
    export * as default from "pangoft21";
}

declare module "gi://PangoOT" {
    export * as default from "pangoot1";
}

declare module "gi://Soup?version=3.0" {
    export * as default from "soup3";
}

declare module "gi://Vulkan" {
    export * as default from "vulkan1";
}

declare module "gi://win32" {
    export * as default from "win321";
}

declare module "gi://xfixes" {
    export * as default from "xfixes4";
}

declare module "gi://xft" {
    export * as default from "xft2";
}

declare module "gi://xlib" {
    export * as default from "xlib2";
}

declare module "gi://xrandr" {
    export * as default from "xrandr1";
}

