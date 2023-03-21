import Adw from "gi://Adw";
import GObject from "gi://GObject";
import { TemplateApp } from "resource:///io/github/charlieqle/GnomeTypescriptTemplate/js/app.js";

export class MainWindow extends Adw.ApplicationWindow {
    static {
        GObject.registerClass({
            GTypeName: "MainWindow",
            Template: "resource:///io/github/charlieqle/GnomeTypescriptTemplate/ui/main-window.ui",
        }, this);
    }

    constructor(app: TemplateApp) {
        super({ application: app });
    }
}