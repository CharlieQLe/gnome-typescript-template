#!/bin/bash

if ! command -v flatpak-node-generator > /dev/null ; then
    echo "Flatpak Node Generator not found! Install from \"https://github.com/flatpak/flatpak-builder-tools\"!"
    exit 1
fi

flatpak-node-generator yarn -r yarn.lock -o modules/yarn-deps/generated-sources.json

# IF IN FLATPAK, USE `$XDG_DATA_HOME/python/bin/flatpak-node-generator`
