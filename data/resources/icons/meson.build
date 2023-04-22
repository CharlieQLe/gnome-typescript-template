install_data(
  configure_file(
    input: 'app.svg',
    output: application_id + '.svg',
    copy: true
  ),
  install_dir: join_paths(get_option('datadir'), 'icons', 'hicolor', 'scalable', 'apps')
)

install_data(
  configure_file(
    input: 'app-symbolic.svg',
    output: application_id + '-symbolic.svg',
    copy: true
  ),
  install_dir: join_paths(get_option('datadir'), 'icons', 'hicolor', 'symbolic', 'apps')
)