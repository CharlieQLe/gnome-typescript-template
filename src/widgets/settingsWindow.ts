import Adw from "gi://Adw?version=1";
import GObject from "gi://GObject?version=2.0";

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