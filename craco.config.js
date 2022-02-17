const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': 'lime', '@text-color': 'lime', '@success-color': '#47afff', '@body-background' : 'white', '@link-color' : '#7c7a7a'},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};