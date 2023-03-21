import Gio from "gi://Gio";

import { TemplateApp } from "resource:///io/github/charlieqle/GnomeTypescriptTemplate/js/app.js";

export function getApplication() {
    return Gio.Application.get_default() as TemplateApp;
}