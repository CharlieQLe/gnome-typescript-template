import Adw from "gi://Adw";
import GObject from "gi://GObject";
import { MenuButton } from "./menuButton.js";

export class MainWindow extends Adw.ApplicationWindow {
    static {
        GObject.registerClass({
            GTypeName: "MainWindow",
            Template: "resource:///io/github/charlieqle/GnomeTypescriptTemplate/ui/main-window.ui",
        }, this);
    }

    constructor(application: Adw.Application) {
        super({ application });
        GObject.type_ensure(MenuButton.$gtype);
    }
}