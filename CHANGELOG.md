# Changelog

## [1.0.16](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.15...v1.0.16) (2025-09-11)


### Bug Fixes

* Changed the deployment API URL in the GitHub Actions workflow from railway.app/graphql to railway.com/graphql/v2 to reflect the updated Railway API endpoint. ([e7a55a4](https://github.com/MatiusRock1/hello-world-enviroments/commit/e7a55a49d35dcdda8bd2a1128b33abde0f0a5a23))

## [1.0.15](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.14...v1.0.15) (2025-09-11)


### Bug Fixes

* The deploy_dev workflow now determines the image to deploy using only image tags, removing support for image digests. The deployment step now checks HTTP status codes and improves error handling. The release-please workflow was updated to stop passing image digests in the client payload. ([d359c29](https://github.com/MatiusRock1/hello-world-enviroments/commit/d359c292c20c59c28fd41f91162fe9886e642796))

## [1.0.14](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.13...v1.0.14) (2025-09-11)


### Bug Fixes

* Inserted a blank line before the CMD instruction for improved readability in the Dockerfile. ([b05dffd](https://github.com/MatiusRock1/hello-world-enviroments/commit/b05dffdffb42a7ae42af84d4e9b30b43fc122a9e))
* Introduces a new GitHub Actions workflow to deploy to Railway on repository dispatch events. Updates the release-please workflow to trigger the new deploy workflow after a release, and adjusts permissions to allow writing contents and packages. ([4b73f5a](https://github.com/MatiusRock1/hello-world-enviroments/commit/4b73f5ab25ad2a61306f6a3d32254013d1298720))

## [1.0.13](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.12...v1.0.13) (2025-09-11)


### Bug Fixes

* Cleaned up formatting by deleting an unnecessary blank line before the application code copy step. ([a04deac](https://github.com/MatiusRock1/hello-world-enviroments/commit/a04deac57eb0abf87c80833698df24225ef2b8da))

## [1.0.12](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.11...v1.0.12) (2025-09-09)


### Bug Fixes

* The release-please workflow now includes the current UTC date and time in the generated release notes and Docker image details. This provides clearer context on when the release was generated. ([4cfe6e4](https://github.com/MatiusRock1/hello-world-enviroments/commit/4cfe6e4fc3ab8095120f44909f02cf09cce3e92e))

## [1.0.11](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.10...v1.0.11) (2025-09-09)


### Bug Fixes

* This update enhances the release workflow by appending Docker image details and usage instructions to the release notes, making it easier for users to discover and use the published Docker images. ([4f6c161](https://github.com/MatiusRock1/hello-world-enviroments/commit/4f6c161a9078a083ea25d6d70142b844ba5cda87))

## [1.0.10](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.9...v1.0.10) (2025-09-09)


### Bug Fixes

* Moved version.json creation to the app working directory in Dockerfile and updated environmentController.js to read from the correct relative path. This ensures consistency between file creation and access. ([f84d3d8](https://github.com/MatiusRock1/hello-world-enviroments/commit/f84d3d863a5fa589b5843dff09e91872ce2665e5))

## [1.0.9](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.8...v1.0.9) (2025-09-09)


### Bug Fixes

* update ([27bf7ac](https://github.com/MatiusRock1/hello-world-enviroments/commit/27bf7ac6a66859204acc58fc2009c34d473350d9))

## [1.0.8](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.7...v1.0.8) (2025-09-09)


### Bug Fixes

* Replaces semver-based tags with a raw version tag and adds OCI-compliant labels for image version and source in the release-please GitHub Actions workflow. ([879d785](https://github.com/MatiusRock1/hello-world-enviroments/commit/879d785162febe9dd412439966543565c48688cf))

## [1.0.7](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.6...v1.0.7) (2025-09-09)


### Bug Fixes

* Replaces git command with a GitHub API call to fetch the latest release version in the release-please workflow. Updates step IDs and output references accordingly to improve reliability when determining the latest version. ([ae0999c](https://github.com/MatiusRock1/hello-world-enviroments/commit/ae0999c8728c08cf455efd86f49e6d1b309e3ed7))

## [1.0.6](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.5...v1.0.6) (2025-09-09)


### Bug Fixes

* Removes direct outputs for tag_name and version from the release-please step and instead retrieves the latest tag and version using git in a new step. Updates Docker build arguments to use the new version output, improving workflow reliability and decoupling from release-please outputs. ([4979405](https://github.com/MatiusRock1/hello-world-enviroments/commit/4979405e69e4def9133cae7337724196955aa4ad))

## [1.0.5](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.4...v1.0.5) (2025-09-09)


### Bug Fixes

* Adds 'tag_name' and 'version' to release job outputs and uses the released version in the Docker build step. Also adds a debug step to print release outputs for easier troubleshooting. ([942de97](https://github.com/MatiusRock1/hello-world-enviroments/commit/942de97666e2f1eb74252c777ebc3c00ae01d49e))

## [1.0.4](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.3...v1.0.4) (2025-09-09)


### Bug Fixes

* The environment info API now includes the app version from the APP_VERSION environment variable, defaulting to 'unknown' if not set. ([46c4df6](https://github.com/MatiusRock1/hello-world-enviroments/commit/46c4df6e5ad9ba1e7e4983ba12556cc4f6309d8c))

## [1.0.3](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.2...v1.0.3) (2025-09-09)


### Bug Fixes

* The Dockerfile now accepts a VERSION build argument, sets it as an environment variable, and adds it as a label. The release workflow passes the version to the Docker build step to ensure images are properly versioned. ([136a592](https://github.com/MatiusRock1/hello-world-enviroments/commit/136a59260931a7be9f61f576200e48c769057c84))

## [1.0.2](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.1...v1.0.2) (2025-09-09)


### Bug Fixes

* update workflow ([02cb892](https://github.com/MatiusRock1/hello-world-enviroments/commit/02cb892379b24cd83b1b8854c2e7bfe1260facc4))

## [1.0.1](https://github.com/MatiusRock1/hello-world-enviroments/compare/v1.0.0...v1.0.1) (2025-09-09)


### Bug Fixes

* upade ([db83c07](https://github.com/MatiusRock1/hello-world-enviroments/commit/db83c07d4dc9bd83bcb3a01b3b81c156402429b1))

## 1.0.0 (2025-09-09)


### Features

* update ([f340b4f](https://github.com/MatiusRock1/hello-world-enviroments/commit/f340b4f618d05055d9c7d98b885154f5823bd39f))
