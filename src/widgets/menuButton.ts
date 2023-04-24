import Adw from "gi://Adw";
import GObject from "gi://GObject";
import { ThemeSwitcher } from "./themeSwitcher.js";

export class MenuButton extends Adw.Bin {
    static {
        GObject.registerClass({
            GTypeName: "MenuButton",
            Template: "resource:///io/github/charlieqle/GnomeTypescriptTemplate/ui/menu-button.ui",
        }, this);
    }

    constructor() {
        super();
        GObject.type_ensure(ThemeSwitcher.$gtype);
    }
}