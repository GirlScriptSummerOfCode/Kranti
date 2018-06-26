# Contributing to Kranti

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the **Kranti** project which is hosted on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

-   [What should I know before I get started?](#what-should-i-know-before-i-get-started)

    -   [Github](#github)

-   [Design Descisions](#design-decisions)

-   [How Can I Contribute?](#how-can-i-contribute)

    -   [Reporting Bugs](#reporting-bugs)

    -   [Pull Requests](#pull-requests)

-   [Project Setup Instructions](#project-setup-instructions)

-   [Git Commit Messages](#git-commit-messages)



## What should I know before I get started?

### Github

This is the key thing you need to know before hopping onboard, we strongly suggest you go through the below resources if you are not aware of Git & Github principles.

-   [Intro to Git & Github for beginners](https://medium.com/@abhishekj/an-intro-to-git-and-github-1a0e2c7e3a2f)
-   [How to contribute to Open Source](https://github.com/freeCodeCamp/how-to-contribute-to-open-source/blob/master/CONTRIBUTING.md)

## Design Decisions

We will follow a straight forward design approach. It's good if you go through the current code by either forking or cloning the repository. We strongly suggest you to stick with the current design guidelines. We will be updating this guide with more detailed guidelines & boilerplate code, if possible.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Kranti. Following these guidelines helps maintainers and the community members in understanding your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](#bug-issue-template), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems similar to the one you're experiencing, you should open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

-   Make sure it is actually a bug before you create an issue
-   Note down the trail, on how the bug was found.
-   Do a small search and check if this issue has already been reported.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined what exactly your bug is related to, create an issue on the repository and provide the following information by filling in [the template](#bug-issue-template).

Explain the problem and include additional details to help maintainers reproduce the problem:

-   **Use a clear and descriptive title** for the issue to identify the problem.
-   **Describe the exact steps which reproduce the problem** in as much detail as possible.
-   **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets on the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
-   **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
-   **Explain which behavior you expected to see instead and why.**

-   **Are you able to reproduce the issue?** If not, provide details on how often the problem occurs and under which conditions.

### Pull Requests

A pull request is a way to contribute to our project, you clone our project, make changes locally and submit a pull request.

#### Before making a Pull request

-   Fill in pull request template 
-   Include screen shots in your pull request whenever possible.
-   Follow our code guidelines.

Here are links and resources to get you started on Pull requests.

-   [https://medium.com/server-side-swift-and-more/a-simple-guide-to-creating-a-github-pull-request-48fee0afd015](https://medium.com/server-side-swift-and-more/a-simple-guide-to-creating-a-github-pull-request-48fee0afd015)
-   [https://github.com/freeCodeCamp/how-to-contribute-to-open-source/blob/master/CONTRIBUTING.md](https://github.com/freeCodeCamp/how-to-contribute-to-open-source/blob/master/CONTRIBUTING.md)

#### Pull Request Template

Most important part of the pull requests are pull request descriptions which should explain the changes in the pull request to others. When making a PR, please fill the PR template and do not **delete** it. 

A pull request title should ideally begin with the name of the file you've edited and should describe what your pull request does in 60 characters or less. In case multiple files are being edited, the PR title should just contain the changes being made in the PR.

Here is an example of a good commit message, for your convenience:

```
# Title: Describe the change in maximum of 60 characters.
configure.py: Fix docstring typo

# Issue link: Mention the URL of the issue it closes or fixes.
Fixes https://github.com/coala/coala/issues/4018

#Description:  Describe the reasoning behind your changes in a maximum of 80 characters per line.
This fixes the typo and changes 
it from wether --> whether.

```

Here is an example of the bad commit:

```
Fixing docstring typo in the which was in the spelling of whether.
```

-   This will take a lot of time for code maintainers to investigate the change and to locate the files in which changes were made.

_You can see that the commit is more readable and understandable in the good commit example._

**So we would request you to follow our commit guidelines.** By following this standard we want to have maintainability of the code.

## Project Setup Instructions

### Fork the Project

Create your own _fork_ of the project (if you have not yet). Go to the project repository:

-   https://github.com/GirlScriptSummerOfCode/Kranti.git

and click the “Fork” button.

### Clone the Project

On your computer browse to where you would like to keep the project, and clone (download) the latest
code from the original repository::

    $ git clone https://github.com/GirlScriptSummerOfCode/Kranti.git
    $ cd Kranti

#### Installing Dependencies

Now to install the dependencies on your local machine, insert the following code and press enter:

    $ npm install

Now you are all set to work on the project locally.

## Git Commit Messages
-   Proper & meaningful commit messages are the best way to keep code maintainable and organized.
-   Always write a commit message, even if it's for small change.

