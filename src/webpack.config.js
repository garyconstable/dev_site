const VueLoaderPlugin = require("vue-loader/lib/plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const version = 11;

module.exports = {
  entry: ["./js/main.js", "./sass/app.scss"],
  output: {
    path: path.resolve(__dirname, "../assets/dist"),
    publicPath: "/assets/dist/",
    filename: "js/dist_" + version + "_.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "css/dist_" + version + "_.css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader?-url"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },

      {
        test: /\.vue$/,
        loader: "vue-loader"
      },

      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },

      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,

        options: {
          babelrc: false,
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },

  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map",

  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};

module.exports.plugins = (module.exports.plugins || []).concat([
  new VueLoaderPlugin()
]);

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
