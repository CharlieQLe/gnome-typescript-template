import Adw from "gi://Adw?version=1";
import Gio from "gi://Gio?version=2.0";
import GObject from "gi://GObject?version=2.0";
import Gtk from "gi://Gtk?version=4.0";

export class ThemeSwitcher extends Adw.Bin {
    private _systemSelector!: Gtk.CheckButton;
    private _lightSelector!: Gtk.CheckButton;
    private _darkSelector!: Gtk.CheckButton;
    private _settings: Gio.Settings;
    private _styleManager: Adw.StyleManager;

    static {
        GObject.registerClass({
            GTypeName: "ThemeSwitcher",
            Template: "resource:///io/github/charlieqle/GnomeTypescriptTemplate/ui/theme-switcher.ui",
            InternalChildren: ["systemSelector", "lightSelector", "darkSelector"],
        }, this);
    }

    constructor() {
        super({ css_name: "themeswitcher" });

        // Settings
        this._settings = Gio.Settings.new(pkg.name as string);

        // Get style manager
        this._styleManager = (Adw.Application.get_default() as Adw.Application).get_style_manager();

        // Bind theme
        this._styleManager.set_color_scheme(this._settings.get_int("color-scheme"));
        this._styleManager.connect("notify::color-scheme", (_, __) => {
            const colorScheme = this._styleManager.get_color_scheme();
            this._settings.set_int("color-scheme", colorScheme);
            this._syncButtons();
        });

        // Set active theme
        this._syncButtons();
    }

    private _syncButtons() {
        const colorScheme = this._styleManager.get_color_scheme();
        this._systemSelector.set_active(colorScheme === Adw.ColorScheme.DEFAULT);
        this._lightSelector.set_active(colorScheme === Adw.ColorScheme.FORCE_LIGHT);
        this._darkSelector.set_active(colorScheme === Adw.ColorScheme.FORCE_DARK);
    }

    private onThemeCheckActiveChanged(_: Gtk.CheckButton) {
        let colorScheme = Adw.ColorScheme.DEFAULT;
        if (this._lightSelector.get_active()) colorScheme = Adw.ColorScheme.FORCE_LIGHT;
        else if (this._darkSelector.get_active()) colorScheme = Adw.ColorScheme.FORCE_DARK;
        this._styleManager.set_color_scheme(colorScheme);
        this._syncButtons();
    }
}