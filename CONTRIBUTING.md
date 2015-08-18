# Contributing to the IBM Design Icons

The IBM Design Icons contain icons for use in IBM products. They're available through both Bower and Node, making them easy to include within a project.

## Submitting Issues

* Before creating a new issue, perform a [cursory search](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+user%3Aibm-design+) to see if a similar issue has already been submitted.
* Can create an issue [here](https://github.com/IBM-Design/icons/issues). Please include as many details as possible when filing an issue.
* Issue titles should be descriptive, explaining at the high level what it is about, and should be written in the same style as [Git commit messages](#git-commit-messages).
* Please include the version and file type of the Icons being used or viewed
* Do not open a [pull request](#pull-requests) to resolve an issue without first receiving feedback from a `collaborator` or `owner` and having them agree on a solution forward.
* Include screenshots and animated GIFs whenever possible; they are immensely helpful.
* When submitting a browser bug, please include the browser, version, operating system, and operating system version.
* Issues that have a number of sub-items that need to be complete should use [task lists](https://github.com/blog/1375%0A-task-lists-in-gfm-issues-pulls-comments) to track the sub-items in the main issue comment.

## Contributing New Icons

When contributing new icon(s), please use the icon template in the [IBM Design Language Resources] (http://ibm.com/design/language/resources) and refer to the [IBM Design Language Iconography] (http://ibm.com/design/language/framework/visual/iconography) guidelines for more information on styling.

On GitHub, icons will be reviewed through issue submissions to the IBM Design icon repo. Please title your issue: **Iconography Contribution_Iconname**. Feel free to add comments to your issue if necessary and upload an .SVG file with the following naming conventions: **iconname_underconsideration_date**.

After you submit an issue, your icon(s) will go through a two week review period where people can add comments and suggest recommended changes.

Following the review period, contributors will have one week to resubmit the files with changes and refinements via email. Export final file formats for icon files .SVG, .PNG, and .AI at 32 x 32, 64 x 64, and 128 x 128 pixels. All three sizes should live on three artboards in the same .AI file. Glyphs should be sized at 24 x 24 pixels.

Please do a pull request (see below) for approval. Allow at least two weeks between the time of approval and viewing the icons on the IBM Design Language iconography library (coming soon) and GitHub repo.

## Pull Requests

* **DO NOT ISSUE A PULL REQUEST WITHOUT FIRST [SUBMITTING AN ISSUE](#submitting-issues)**
* **ALL PULL REQUESTS MUST INCLUDE A [DEVELOPER CERTIFICATE OF ORIGIN](#developer-certificate-of-origin)**
* Pull requests should reference their related issues. If the pull request closes an issue, [please reference its closing from a commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/). Pull requests not referencing any issues will be closed.
* Pull request titles should be descriptive, explaining at the high level what it is doing, and should be written in the same style as [Git commit messages](#git-commit-messages).
* Pull requests should include identical changes to all available source files (AI, png, svg, etc…).
* Do not squash or rebase commits when submitting a Pull Request. It makes it much harder to follow work and make incremental changes.
* Ensure no Emoji tags are used in the title of the Pull Request

### Developer Certificate of Origin

All contributions to the IBM Design Icons must be accompanied by acknowledgment of, and agreement to, the [Developer Certificate of Origin](http://elinux.org/Developer_Certificate_Of_Origin), reproduced below. Acknowledgment of and agreement to the Developer Certificate of Origin _must_ be included in the comment section of each contribution and _must_ take the form of `DCO 1.1 Signed-off-by: {{Full Name}} <{{email address}}>` (without the `{}`). Contributions without this acknowledgment will be required to add it before being accepted. If a contributor is unable or unwilling to agree to the Developer Certificate of Origin, their contribution will not be included.

```
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
660 York Street, Suite 102,
San Francisco, CA 94110 USA

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

### Git Commit Messages

* Use the present tense (`"Add feature"` not `"Added Feature"`)
* Use the imperative mood (`"Move cursor to…"` not `"Moves cursor to…"`)
* Limit the first line to 72 characters or less
* Include relevant Emoji from our [Emoji cheatsheet](#emoji-cheatsheet)

## Emoji Cheatsheet

When creating creating commits or updating the CHANGELOG, please **start** the commit message or update with one of the following applicable Emoji. Emoji should not be used at the start of issue or pull request titles.

* :art: `:art:` when improving the format/structure of the code
* :racehorse: `:racehorse:` when improving performance
* :memo: `:memo:` when writing long-form text (documentation, guidelines, principles, etc…)
* :bug: `:bug:` when fixing a bug
* :fire: `:fire:` when removing code or files
* :green_heart: `:green_heart:` when fixing the CI build
* :white_check_mark: `:white_check_mark:` when adding tests
* :lock: `:lock:` when dealing with security
* :arrow_up: `:arrow_up:` when upgrading dependencies
* :arrow_down: `:arrow_down:` when downgrading dependencies
* :shirt: `:shirt:` when removing linter warnings
* :shipit: `:shipit:` when creating a new release

