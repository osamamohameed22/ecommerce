var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin =require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//var OptimizeCSSAssetsPlugin =require("optimize-css-assets-webpack-plugin");

module.exports = {
    optimization: {
        minimize: true,
    },
    entry :{
        app:'./src/index.js'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "",
        filename: "main.js",
      },

    mode:"development",

    module:{
        rules: [
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{
                            minimize:true,
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                
                use:[
                      MiniCssExtractPlugin.loader,
                      'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpe?g|gif)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name: "[name].[ext]",
                            outputPath:"images",
                        }
                    }
                ]
            },

        ],
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({filename: "css/style.css"}),
        //new OptimizeCSSAssetsPlugin({}),
    ],
};


