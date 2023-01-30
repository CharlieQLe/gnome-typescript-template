/* main.js
 *
 * Copyright 2023 Charlie Le
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import GObject from 'gi://GObject';
import Gio from 'gi://Gio';
import Gtk from 'gi://Gtk?version=4.0';
import Adw from 'gi://Adw?version=1';

import { GnomeTypescriptTemplateWindow } from './window.js';

pkg.initGettext();
pkg.initFormat();

export class GnomeTypescriptTemplateApplication extends Adw.Application {
    private _mainWindow: GnomeTypescriptTemplateWindow | null;

    static {
        GObject.registerClass(this);
    }

    constructor() {
        super({application_id: 'io.github.charlieqle.GnomeTypescriptTemplate', flags: Gio.ApplicationFlags.FLAGS_NONE});

        this._mainWindow = null;

        const quit_action = new Gio.SimpleAction({name: 'quit'});
            quit_action.connect('activate', action => {
            this.quit();
        });
        this.add_action(quit_action);
        this.set_accels_for_action('app.quit', ['<primary>q']);

        const show_about_action = new Gio.SimpleAction({name: 'about'});
        show_about_action.connect('activate', action => {
            let aboutParams = {
                transient_for: this._mainWindow,
                application_name: pkg.name,
                application_icon: 'io.github.charlieqle.GnomeTypescriptTemplate',
                developer_name: 'Charlie Le',
                version: pkg.version,
                developers: [ 'Charlie Le' ],
                copyright: '© 2023 Charlie Le'
            };
            const aboutWindow = new Adw.AboutWindow(aboutParams);
            aboutWindow.present();
        });
        this.add_action(show_about_action);
    }

    vfunc_activate() {
        if (this._mainWindow == null) this._mainWindow = new GnomeTypescriptTemplateWindow(this);
        this._mainWindow.present();
    }
}

export function main(argv: string[]) {
    const application = new GnomeTypescriptTemplateApplication();
    return application.run(argv);
}
