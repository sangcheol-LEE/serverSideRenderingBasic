const paths = require('./paths');
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const env = getClientEnvironment(paths.publicUrlOrPath/slice(0,-1));



module.exports = {
  mode: "production", //프로덕션 모드로 설정하여 최적화 옵션들을 활성화
  entry : paths.ssrIndexJs, //엔트리 경로
  target: "node", // 노드 환경에서 실행될 것이라는 점을 명시
  output : {
    path : paths.ssrBuild, // 빌드경로
    filename : 'server.js',
    chunkFilename: 'js/[name].chunk.js', // 청크 파일 이름
    publicPath : paths.publicUrlOrPath, // 정적 파일이 제공될 경로
  },
  module :{
    rules : [
      {
        oneOf :[
          // 자바스크립트를 위한 처리
          // 기존 webpack.config.js를 참고히여 작성
          {
            test : /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize : require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              presets : [
                [
                  require.resolve('babel-preset-react-app'),
                  {
                    runtime : "automatic",
                  },
                ],
              ],
              plugins : [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent :
                          '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                      },
                    },
                  },
                ],
              ],
              cacheDirectory : true,
              cacheCompression : false,
              compact: false,
            },
          },
          // css를 위한 처리
          {
            test: cssRegex,
          }
        ]
      }
    ]
  }
}