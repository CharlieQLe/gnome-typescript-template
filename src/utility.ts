import Gio from "gi://Gio";

import { TemplateApp } from "./main.js";

export function getApplication() {
    return Gio.Application.get_default() as TemplateApp;
}