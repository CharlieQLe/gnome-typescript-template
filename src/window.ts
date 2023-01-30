import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Adw from 'gi://Adw';

export class Window extends Adw.ApplicationWindow {
    static {
        GObject.registerClass({
            GTypeName: 'Window',
            Template: 'resource:///io/github/charlieqle/GnomeTypescriptTemplate/ui/window.ui',
            InternalChildren: ['label'],
        }, this);
    }

    constructor(application: Adw.Application) {
        super({ application });
    }
}

