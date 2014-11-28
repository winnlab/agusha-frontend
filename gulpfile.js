var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/user/profile/social/*.png').pipe(spritesmith({
    // imgName: 'img/user/profile/socialSprite.png',
    // cssName: 'scss/user/helpers/_socialSprite.scss',
    imgName: 'socialSprite.png',

    cssName: '_socialSprite.scss',

    imgPath: '/img/user/profile/socialSprite.png'
  }));

  spriteData.img.pipe(gulp.dest('img/user/profile/'));
  spriteData.css.pipe(gulp.dest('scss/user/helpers/'));
});