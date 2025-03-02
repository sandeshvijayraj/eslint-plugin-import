# Change Log
All notable changes to this resolver will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](http://keepachangelog.com).

## Unreleased

### Added
- use "module" in the same spot as "jsnext:main" ([#2166], thanks [@MustafaHaddara])

## v0.3.4 - 2020-06-16
### Added
- add `.node` extension ([#1663])

## v0.3.3 - 2020-01-10
### Changed
- [meta] copy LICENSE file to all npm packages on prepublish ([#1595], thanks [@opichals])

## v0.3.2 - 2018-01-05
### Added
- `.mjs` extension detected by default to support `experimental-modules` ([#939])

### Deps
- update `debug`, `resolve`

## v0.3.1 - 2017-06-23
### Changed
- bumped `debug` dep to match other packages

## v0.3.0 - 2016-12-15
### Changed
- bumped `resolve` to fix issues with Node builtins (thanks [@SkeLLLa] and [@ljharb])

### Fixed
- use `files` in `package.json` to ship only `index.js` ([#531], thanks for noticing [@lukeapage])

## v0.2.3 - 2016-08-20
### Added
- debug logging (use `DEBUG=eslint-plugin-import:resolver:node eslint [...]`)

## v0.2.2 - 2016-07-14
### Fixed
- Node resolver no longer declares the import plugin as a `peerDependency`. See [#437]
  for a well-articulated and thoughtful expression of why this doesn't make sense.
  Thanks [@jasonkarns] for the issue and the PR to fix it ([#438]).

  Also, apologies to the others who expressed this before, but I never understood
  what the problem was.😅

## v0.2.1
### Fixed
- find files with `.json` extensions (#333, thanks for noticing @jfmengels)

[#2166]: https://github.com/benmosher/eslint-plugin-import/pull/2166
[#438]: https://github.com/benmosher/eslint-plugin-import/pull/438

[#1663]: https://github.com/benmosher/eslint-plugin-import/issues/1663
[#1595]: https://github.com/benmosher/eslint-plugin-import/pull/1595
[#939]: https://github.com/benmosher/eslint-plugin-import/issues/939
[#531]: https://github.com/benmosher/eslint-plugin-import/issues/531
[#437]: https://github.com/benmosher/eslint-plugin-import/issues/437

[@jasonkarns]: https://github.com/jasonkarns
[@lukeapage]: https://github.com/lukeapage
[@SkeLLLa]: https://github.com/SkeLLLa
[@ljharb]: https://github.com/ljharb
[@opichals]: https://github.com/opichals
[@MustafaHaddara]: https://github.com/MustafaHaddara