const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const smp = new SpeedMeasurePlugin();

const version = 19;

const commonConfig = {
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
          /*
          {
            loader: "postcss-loader"
          },
          */
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
        exclude: /(node_modules|bower_components|sass)/,

        options: {
          babelrc: false,
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },

  resolve: {
    unsafeCache: true,
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

  plugins: [
    new VueLoaderPlugin()
  ]

};


if (process.env.NODE_ENV === "production") {
  commonConfig.optimization = {
    minimizer: [new UglifyJsPlugin()]
  }
  commonConfig.performance = {
    hints: false
  }
  commonConfig.devtool = "#source-map";
  commonConfig.plugins = (commonConfig.plugins || []).concat([
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

// module.exports = smp.wrap(commonConfig);

module.exports = commonConfig;
