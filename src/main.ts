import Adw from "gi://Adw?version=1";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import GObject from "gi://GObject";
import * as Settings from "./settings.js";
import { MainWindow } from "./widgets/mainWindow.js";
import { SettingsWindow } from "./widgets/settingsWindow.js";
import { ThemeSwitcher } from "./widgets/themeSwitcher.js";

pkg.initGettext();
pkg.require({
    "Adw": "1.0",
    "Gio": "2.0",
    "GLib": "2.0",
    "GObject": "2.0",
    "Gtk": "4.0",
});

export function main(argv: string[]) {
    [ThemeSwitcher.$gtype].forEach(gtype => GObject.type_ensure(gtype));

    return new TemplateApp().run(argv);
}

export class TemplateApp extends Adw.Application {
    private _mainWindow?: MainWindow;

    static {
        GObject.registerClass(this);
    }

    public constructor() {
        super({ application_id: pkg.name, flags: Gio.ApplicationFlags.FLAGS_NONE });
        GLib.set_application_name("GNOME Typescript Template");

        // Add actions
        this._addAction("quit", _ => this.quit(), null);
        this._addAction("about", _ => new Adw.AboutWindow({
            transient_for: this._mainWindow,
            application_name: GLib.get_application_name(),
            application_icon: pkg.name,
            developer_name: "Charlie Le",
            version: pkg.version,
            developers: ["Charlie Le"],
            copyright: "© 2023 Charlie Le"
        }).present(), null);
        this._addAction("preferences", _ => new SettingsWindow().present(), null);

        // Set accels
        this.set_accels_for_action("app.quit", ["<primary>q"]);

        // Set color scheme
        this._setTheme(Settings.Theme.get());
        Settings.Theme.connect(_ => this._setTheme(Settings.Theme.get()));
    }

    /// FUNCS

    private _addAction(name: string, callback: (action: Gio.SimpleAction, ...params: any[]) => void, parameterType: GLib.VariantType | null) {
        const action = Gio.SimpleAction.new(name, parameterType);
        action.connect("activate", callback);
        this.add_action(action);
        return action;
    }

    private _setTheme(theme: Settings.ETheme) {
        let colorScheme = Adw.ColorScheme.DEFAULT;
        switch (theme) {
            case Settings.ETheme.Light: colorScheme = Adw.ColorScheme.FORCE_LIGHT; break;
            case Settings.ETheme.Dark: colorScheme = Adw.ColorScheme.FORCE_DARK; break;
        }
        this.get_style_manager().set_color_scheme(colorScheme);
    }

    /// VFUNCS

    public vfunc_activate() {
        if (!this._mainWindow) this._mainWindow = new MainWindow(this);
        this._mainWindow.present();
    }
}