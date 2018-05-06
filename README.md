# @why/project-template#master
## 공통
- 프로젝트 스케폴딩 템플릿
- [`template`](./template) 폴더에 복사할 파일이 위치 한다.

### 프로젝트 템플릿 구조
- 소스 파일: [`src`](./template/src) 폴더
- 결과 파일: `dist` 폴더
- webpack 설정: [webpack.config.js](./template/webpack.config.js)에서 [`build/webpack`](./template/build/webpack)의 아래 3 파일이 merge
   - [`webpack.config.js`](./template/webpack.config.js)
       - entry, output 설정: `entryOutputConfig` 변수에 설정하여 최종 설정값들과 merge
   - [`common`](./template/build/webpack/common): 공통
   - [`dev`](./template/build/webpack/dev): 개발
   - [`production`](./template/build/webpack/production): 배포

## master
- webpack 기반 개발 환경 기본 설정