const sortCSSmq = require('sort-css-media-queries');

var devMode = process.env.NODE_ENV !== 'production';

module.exports = () => ({
    plugins: {
        'autoprefixer': {},
        'postcss-import': {},
        'css-mqpacker': {sort: sortCSSmq},
        'cssnano': !devMode
            ? {
                "preset": [
                    "default",
                    {"discardComments": {"removeAll": true}}
                ]
            }
            : false
    }
});
