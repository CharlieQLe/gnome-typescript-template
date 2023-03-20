import { TemplateApp } from "resource:///io/github/charlieqle/GnomeTypescriptTemplate/js/app.js";

pkg.initGettext();
pkg.initFormat();

export function main(argv: string[]) {
    const application = new TemplateApp();
    return application.run(argv);
}