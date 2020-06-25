const CompressionPlugin = require( "compression-webpack-plugin" );
const HardSourceWebpackPlugin = require( "hard-source-webpack-plugin" );
const path = require( "path" );

function resolve( dir ) {
    return path.join( __dirname, dir );
}
const env = process.env.NODE_ENV;

const { apiBaseUrl } = require( "./src/utils/domain" );

module.exports = {
    // 基本路径
    publicPath: "/",
    // 输出文件目录
    outputDir: "dist",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    runtimeCompiler: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: ( config ) => {
        config.resolve.alias
            .set( "@", resolve( "src" ) )
            .set( "@view", resolve( "src/views" ) )
            .set( "@img", resolve( "src/assets/images" ) )
            .set( "@component", resolve( "src/components" ) )
            .set( "@util", resolve( "src/utils" ) );
    },
    configureWebpack: ( config ) => {
        // 开发环境不需要gzip
        if ( env === "production" ) {
            config.plugins.push(
                new CompressionPlugin( {
                    // 正在匹配需要压缩的文件后缀
                    test: /\.(js|css|svg|woff|ttf|json|html)$/,
                    // 大于10kb的会压缩
                    threshold: 10240,
                    deleteOriginalAssets: false // 不删除源文件
                } )
            );
        }
        config.plugins.push(
            new HardSourceWebpackPlugin()
        );
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        // extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            less: {
                modifyVars: {
                    // 直接覆盖变量
                    // "themeColor": "red"
                    // "border-color": "#eee",
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    hack: `true; @import "${path.join(
                        __dirname,
                        "./src/styles/variables.less"
                    )}";`
                }
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true
    },

    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require( "os" ).cpus().length > 1,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        port: 8106, // 端口号
        https: false,
        open: true,
        hotOnly: false, // https:{type:Boolean}
        proxy: { // 配置多个代理
            "/openapi": {
                target: apiBaseUrl
            }

        }

    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
};
