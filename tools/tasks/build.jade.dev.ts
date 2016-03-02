import {log} from 'gulp-util';
import * as chalk from 'chalk';
import {join} from 'path';
import {APP_SRC, APP_DEST} from '../config';

export = function buildJadeDev(gulp, plugins, option) {
  return function () {
    return gulp.src(join(APP_SRC, '**', '*.jade'))
      .pipe(plugins.plumber())
      .pipe(plugins.jade().on('error', (error) => {
        log(chalk.red('Jade compiler error:'), error.message);
      }))
      .pipe(gulp.dest(APP_DEST));
  };
}
