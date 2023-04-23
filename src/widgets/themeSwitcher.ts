import Adw from "gi://Adw";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk?version=4.0";
import * as Settings from "../settings.js";

export class ThemeSwitcher extends Adw.Bin {
    private _systemSelector!: Gtk.CheckButton;
    private _lightSelector!: Gtk.CheckButton;
    private _darkSelector!: Gtk.CheckButton;

    static {
        GObject.registerClass({
            GTypeName: "ThemeSwitcher",
            Template: "resource:///io/github/charlieqle/GnomeTypescriptTemplate/ui/theme-switcher.ui",
            InternalChildren: ["systemSelector", "lightSelector", "darkSelector"],
        }, this);
    }

    constructor() {
        super({
            css_name: "themeswitcher",
        });

        // Set active theme
        switch (Settings.Theme.get()) {
            case Settings.ETheme.Light: {
                this._lightSelector.set_active(true);
                this._systemSelector.set_active(false);
                break;
            }
            case Settings.ETheme.Dark: {
                this._darkSelector.set_active(true);
                this._systemSelector.set_active(false);
                break;
            }
            default: {
                this._systemSelector.set_active(true);
                break;
            }
        }
    }

    private onThemeCheckActiveChanged(_: Gtk.CheckButton) {
        let theme: Settings.ETheme = Settings.ETheme.System;
        if (this._lightSelector.get_active()) theme = Settings.ETheme.Light;
        else if (this._darkSelector.get_active()) theme = Settings.ETheme.Dark;
        switch (theme) {
            case Settings.ETheme.Light: {
                this._lightSelector.set_active(true);
                this._systemSelector.set_active(false);
                break;
            }
            case Settings.ETheme.Dark: {
                this._darkSelector.set_active(true);
                this._systemSelector.set_active(false);
                break;
            }
            default: {
                this._systemSelector.set_active(true);
                break;
            }
        }
        Settings.Theme.set(theme);
    }
}