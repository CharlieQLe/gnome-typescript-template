#!/bin/bash

mkdir ./girs
flatpak run --filesystem=host --command=sh org.gnome.Sdk//44 -c "cp /usr/share/gir-1.0/*.gir ./girs/"