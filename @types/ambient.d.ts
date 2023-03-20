// PKG
declare const pkg: {
    name: string;
    version: string;
    prefix: string;
    datadir: string;
    libdir: string;
    pkgdatadir: string;
    moduledir: string;
    pkglibdir: string;
    localedir: string;

    init();
    initGettext();
    initFormat();
    initSubmodule(name: string);
    loadResource(name: string);
    requires(deps: {});
};