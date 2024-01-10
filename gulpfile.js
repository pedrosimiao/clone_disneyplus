const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*scss') //recupera todos os arquivos scss dentro da pasta ./scr/styles
        .pipe(sass({ outputStyle: 'compressed' })) //compilção do sass com execução da compressão diretamento no argumento da função sass 
        .pipe(gulp.dest('./dist/css')); //define pasta de destino dos arquivos scss compilados em css
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*scss', gulp.parallel(styles))
    //observa todos os arquivos scss em styles e executa tarefas
    //*watch task has to be a function (optionally generated by using gulp.parallel or gulp.series)
}