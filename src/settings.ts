import Gio from "gi://Gio";

export type SettingsChangedCallback = (...args: any[]) => void;

const settings = Gio.Settings.new(pkg.name || "");

export enum ETheme {
    System = 0,
    Light = 1,
    Dark = 2,
}

export namespace Theme {
    export function get(): ETheme {
        return settings.get_enum("theme");
    }

    export function set(theme: ETheme) {
        settings.set_enum("theme", theme);
    }

    export function connect(callback: SettingsChangedCallback) {
        settings.connect("changed::theme", callback);
    }
}