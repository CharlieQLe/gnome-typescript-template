import Adw from "gi://Adw";
import GObject from "gi://GObject";

export class SettingsWindow extends Adw.PreferencesWindow {
    static {
        GObject.registerClass({
            GTypeName: "SettingsWindow",
            Template: "resource:///io/github/charlieqle/GnomeTypescriptTemplate/ui/settings-window.ui"
        }, this);
    }

    constructor() {
        super();
    }
}