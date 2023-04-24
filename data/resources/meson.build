subdir('icons')

gnome = import('gnome')

blueprints = custom_target('blueprints',
  input: files(
    'gtk/help-overlay.blp',
    'ui/main-window.blp',
    'ui/menu-button.blp',
    'ui/settings-window.blp',
    'ui/theme-switcher.blp'
  ),
  output: '.',
  command: [find_program('blueprint-compiler'), 'batch-compile', '@OUTPUT@', '@CURRENT_SOURCE_DIR@', '@INPUT@'],
)

data_res = gnome.compile_resources(meson.project_name() + '.data',
  'data.gresource.xml',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
  dependencies: blueprints,
)

