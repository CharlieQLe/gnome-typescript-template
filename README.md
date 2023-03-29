# GNOME TYPESCRIPT TEMPLATE

This is a template for using Typescript for GNOME Javascript applications. This template handles Flatpak applications, but can be modified to support non-Flatpak applications.

## Setup

1. Install the appropriate dependencies. They are:
    * [Blueprint compiler](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/)
    * Flatpak
        * org.freedesktop.Sdk.Extension.node18
        * org.gnome.Platform
        * org.gnome.Sdk
    * NodeJS
    * Yarn

2. Rename `io.github.charlieqle.GnomeTypescriptTemplate` everywhere to your desired application's DBus name

3. Initialize the package by running `yarn`

## Rollup

Rollup is used to bundle NodeJS modules into vendor files that can be imported into the project. Bundled modules must **NOT** make use of NodeJS libraries, since GJS does not have any equivalent libraries.