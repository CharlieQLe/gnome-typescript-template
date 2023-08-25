import Adw from "gi://Adw?version=1";
import GObject from "gi://GObject?version=2.0";
import { MenuButton } from "./menuButton.js";

export class MainWindow extends Adw.ApplicationWindow {
    static {
        GObject.type_ensure(MenuButton.$gtype);
        GObject.registerClass({
            GTypeName: "MainWindow",
            Template: "resource:///io/github/charlieqle/GnomeTypescriptTemplate/ui/main-window.ui",
        }, this);
    }

    constructor(application: Adw.Application) {
        super({ application });
    }
}