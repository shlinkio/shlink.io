# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]
### Added
* Documented support for redirect statuses `308` and `307`.
* Documented openswoole-specific env-vars.
* [#342](https://github.com/shlinkio/shlink.io/issues/342) Documented device-specific redirects.

### Changed
* [#340](https://github.com/shlinkio/shlink.io/issues/340) Replaced references to `doma.in` by `s.test`.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed typo


## [6.40.2] - 2023-01-03
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Added missing `rel="me"` to mastodon link for proper verification.


## [6.40.1] - 2022-12-30
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Removed hardcoded link to localhost.


## [6.40.0] - 2022-12-29
### Added
* [#330](https://github.com/shlinkio/shlink.io/issues/330) Added mermaid integration to render charts and graphs. Used to illustrate the integration with mercure.
* [#332](https://github.com/shlinkio/shlink.io/issues/332) Documented features introduced in Shlink 3.4.0.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.39.0] - 2022-11-17
### Added
* [#328](https://github.com/shlinkio/shlink.io/issues/328) Added link to mastodon profile.

### Changed
* Updated to Next 13

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.38.2] - 2022-10-27
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed Smol Links image.


## [6.38.1] - 2022-10-27
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed typo when referencing to docker registries.
* Renamed Shlinkify app to Smol Links, as it has been rebranded.


## [6.38.0] - 2022-10-01
### Added
* Added Shlinkify to apps section.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Removed warning referencing the use of multi-segment slugs and trailing slashes for a situation that cannot actually happen.


## [6.37.0] - 2022-09-18
### Added
* [#315](https://github.com/shlinkio/shlink.io/issues/315) Documented support for RoadRunner.
* [#316](https://github.com/shlinkio/shlink.io/issues/316) Documented support for trailing slashes in short URLs.
* Documented `INITIAL_API_KEY` env var.
* Documented `SKIP_INITIAL_GEOLITE_DOWNLOAD` env var.

### Changed
* Migrated to reusable workflow to build docker image.
* Updated dependencies.
* Updated long-running tasks section.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.36.1] - 2022-08-17
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed references to wrong docker image names.


## [6.36.0] - 2022-08-15
### Added
* Documented support on GitHub Container Registry.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.35.0] - 2022-08-04
### Added
* Documented support on redis pub/sub for real-time updates.
* [#312](https://github.com/shlinkio/shlink.io/issues/312) Documented multi-segment custom slugs.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.34.3] - 2022-07-31
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Documented the requirement of providing the port number for redis servers.


## [6.34.2] - 2022-07-25
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed strikethrough on deprecated env vars.


## [6.34.1] - 2022-06-20
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#273](https://github.com/shlinkio/shlink.io/pull/273) Fixed screenshots for Short Menu integration.
* Fixed dependency install in CI


## [6.34.0] - 2022-05-31
### Added
* Updated CLI help description.

### Changed
* Updated dependencies, including React 18 and jest 28.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed typos on installation tool references from update instructions.


## [6.33.0] - 2022-04-23
### Added
* Documented timezone env var and the recommendation to set it to the same zone where you plan to consume it.
* Extended documentation regarding dates behavior on the API.

### Changed
* Added shlinkio coding standards, together with nextjs recommended ones.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.32.0] - 2022-03-21
### Added
* [#296](https://github.com/shlinkio/shlink.io/issues/296) Updated to fontawesome 6.1
* [#295](https://github.com/shlinkio/shlink.io/issues/295) Updated to bootstrap 5.1
* [#291](https://github.com/shlinkio/shlink.io/issues/291) Automated generation of sitemap and robots.txt files.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.31.0] - 2022-02-19
### Added
* [#292](https://github.com/shlinkio/shlink.io/issues/292) Added emojis to features.

### Changed
* Updated dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.30.1] - 2022-02-04
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Added missing Sitemap entries


## [6.30.0] - 2022-01-31
### Added
* [#283](https://github.com/shlinkio/shlink.io/issues/283) Added warning noticing installation tool has to be run from Shlink's root folder.
* [#285](https://github.com/shlinkio/shlink.io/issues/285) Documented deprecated webhooks.
* [#286](https://github.com/shlinkio/shlink.io/issues/286) Grouped env vars by context, and added deep-linking to specific groups when relevant.
* [#281](https://github.com/shlinkio/shlink.io/issues/281) Documented Shlink architecture.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.29.0] - 2022-01-30
### Added
* [#278](https://github.com/shlinkio/shlink.io/issues/278) Documented installer tool.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#267](https://github.com/shlinkio/shlink.io/issues/267) Fixed linting by migrating to Next.js recommended rules.
* [#279](https://github.com/shlinkio/shlink.io/issues/279) Documented missing mention to the requirement of installing the corresponding pdo variation for the database of your choice.


## [6.28.0] - 2022-01-28
### Added
* [#267](https://github.com/shlinkio/shlink.io/issues/267) Updated docs to fulfil Shlink 3.0.0.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.27.0] - 2021-12-26
### Added
* [#271](https://github.com/shlinkio/shlink.io/issues/271) Enhanced multi-domain docs explaining the steps that need to be performed outside of Shlink.

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.26.2] - 2021-12-26
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#269](https://github.com/shlinkio/shlink.io/issues/269) Fixed link to image used when sharing on Twitter.


## [6.26.1] - 2021-12-21
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed documentation regarding GeoLite2, mentioning the default key is now disabled and therefore, you need to provide your own.


## [6.26.0] - 2021-12-16
### Added
* Migrated to latest docsearch

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [6.25.0] - 2021-12-12
### Added
* [#253](https://github.com/shlinkio/shlink.io/issues/253) Documented how to import from YOURLS.
* Documented new not-found redirect env vars that deprecate existing ones.
* [#259](https://github.com/shlinkio/shlink.io/issues/259) Documented new IS_HTTPS_ENABLED env var.
* [#261](https://github.com/shlinkio/shlink.io/issues/261) Documented how to integrate with a RabbitMQ instance.
* [#252](https://github.com/shlinkio/shlink.io/issues/252) Explained considerations when using multiple domains.
* [#258](https://github.com/shlinkio/shlink.io/issues/258) Documented support for openswoole, and recommended using it over regular swoole.

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
* Updated to node 16.15
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
