# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]
### Added
* [#253](https://github.com/shlinkio/shlink.io/issues/253) Documented how to import from YOURLS.
* Documented new not-found redirect env vars that deprecate existing ones.
* [#259](https://github.com/shlinkio/shlink.io/issues/259) Documented new IS_HTTPS_ENABLED env var.
* [#261](https://github.com/shlinkio/shlink.io/issues/261) Documented how to integrate with a RabbitMQ instance.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.24.1] - 2021-11-21
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed PSShlink image width in mobile devices.


## [6.24.0] - 2021-11-21
### Added
* [#248](https://github.com/shlinkio/shlink.io/issues/248) Added PSShlink to the list of apps.
* [#249](https://github.com/shlinkio/shlink.io/issues/249) Documented "Email Tracking" feature.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.23.0] - 2021-10-31
### Added
* [#212](https://github.com/shlinkio/shlink.io/issues/212) Documented how to solve issues with CORS when using mercure >=0.11
* [#229](https://github.com/shlinkio/shlink.io/issues/229) Documented how to solve issues with CORS when using mercure >=0.11

### Changed
* Moved ci workflow to external repo and reused
* Updated to node 16.13
* [#244](https://github.com/shlinkio/shlink.io/issues/244) Updated to Next.js 12.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#235](https://github.com/shlinkio/shlink.io/issues/235) Fixed sass deprecation warning.


## [6.22.0] - 2021-10-10
### Added
* Added QR code env vars, and documented deprecated env vars.
* Added note mentioning that query params forwarding can be disabled since Shlink v2.9.0.
* Documented placeholders supported in not-found redirects since Shlink v2.9.0.
* Documented `REDIS_SENTINEL_SERVICE` env var.
* Documented how to enable sending orphan visit notifications to webhooks.
* Documented how to disable tracking based on IP addresses.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.21.0] - 2021-09-18
### Added
* Documented environment variables as something that can be used with non-docker installations.

### Changed
* Updated ALL dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.20.0] - 2021-08-04
### Added
* Documented extra path forwarding feature.
* [#227](https://github.com/shlinkio/shlink.io/issues/227) Documented domain-specific "not found" redirects.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.19.0] - 2021-07-13
### Added
* *Nothing*

### Changed
* [#223](https://github.com/shlinkio/shlink.io/issues/223) Updated dependencies, including Next.js to v11.
* [#225](https://github.com/shlinkio/shlink.io/issues/225) Documented `errorCorrection` param for QR codes.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.18.0] - 2021-05-30
### Added
* [#220](https://github.com/shlinkio/shlink.io/issues/220) Documented new ways to pre-configure servers in shlink-web-client after v3.2.0
* [#216](https://github.com/shlinkio/shlink.io/issues/216) Documented `ENABLE_PERIODIC_VISIT_LOCATE` env var for docker container.
* [#218](https://github.com/shlinkio/shlink.io/issues/218) Documented how bot detection works in Shlink v2.7.0.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.17.1] - 2021-05-23
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Added missing tracking env vars in docker example.


## [6.17.0] - 2021-05-23
### Added
* [#215](https://github.com/shlinkio/shlink.io/issues/215) Documented new tracking capabilities introduced in Shlink v2.6.0.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.16.1] - 2021-04-24
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed duplicated troubleshooting section, by making one reference the other.


## [6.16.0] - 2021-04-23
### Added
* Improved troubleshooting docs
* Documented importing from Shlink instance

### Changed
* Updated coding styles

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.15.1] - 2021-02-13
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed docs to reflect new dist files system and support for PHP 8.


## [6.15.0] - 2021-02-11
### Added
* [#195](https://github.com/shlinkio/shlink.io/issues/195) Documented `title` feature introduced in Shlink v2.6.0.
* [#196](https://github.com/shlinkio/shlink.io/issues/196) Documented how to import links from a CSV file.
* [#197](https://github.com/shlinkio/shlink.io/issues/197) Documented `margin` prop for QR codes.
* [#201](https://github.com/shlinkio/shlink.io/issues/201) Documented how Shlink tracks visits and its considerations.
* [#203](https://github.com/shlinkio/shlink.io/issues/203) Documented special redirects.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.14.3] - 2021-01-26
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Improved REST API feature description.


## [6.14.2] - 2021-01-24
### Added
* *Nothing*

### Changed
* [#187](https://github.com/shlinkio/shlink.io/issues/187) Improved CORS-related docs.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#188](https://github.com/shlinkio/shlink.io/issues/188) Fixed anchor links when they are dynamically loaded.


## [6.14.1] - 2021-01-19
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Added missing reference to xml PHP extension required to generate QR codes in SVG format.


## [6.14.0] - 2021-01-17
### Added
* Documented API key roles.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.13.1] - 2021-01-06
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#181](https://github.com/shlinkio/shlink.io/issues/181) Fixed shlink-web-client video for some devices, and added placeholder image for others.


## [6.13.0] - 2021-01-02
### Added
* [#157](https://github.com/shlinkio/shlink.io/issues/157) Documented some minor features, like QR codes, `X-Request-Id` and query params forwarding.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.12.0] - 2020-12-22
### Added
* [#142](https://github.com/shlinkio/shlink.io/issues/142) Documented how to troubleshoot the most common issues.
* [#179](https://github.com/shlinkio/shlink.io/issues/179) Added collapsible menu to docs.

### Changed
* [#174](https://github.com/shlinkio/shlink.io/issues/174) Updated shlink-web-client video, using a v3 recording.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*
