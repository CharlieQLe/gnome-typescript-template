import Adw from "gi://Adw";
import GObject from "gi://GObject";

import * as Settings from "resource:///io/github/charlieqle/GnomeTypescriptTemplate/js/settings.js";

export class SettingsWindow extends Adw.PreferencesWindow {
    private _themeCombo!: Adw.ComboRow;

    static {
        GObject.registerClass({
            GTypeName: "SettingsWindow",
            Template: "resource:///io/github/charlieqle/GnomeTypescriptTemplate/ui/settings-window.ui",
            InternalChildren: ["themeCombo"]
        }, this);
    }

    constructor() {
        super();
        this._themeCombo.set_selected(Settings.Theme.get());
    }

    private onThemeChanged(combo: Adw.ComboRow, _: any) {
        Settings.Theme.set(combo.get_selected());
    }
}