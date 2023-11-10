# VSCode Laravel Docs

Easily access Laravel docs pages from within VSCode

## Features

To use this extension, simply use `⌘ + Shift + P` to open the command palette (`Ctrl` on windows / linux) and search for "Laravel Docs" or the specific topic you're after. That's it!

Here's an example:
![Extension Preview](img/preview.gif)

## Configuration

To use a specific version of Laravel in URLs, use this configuration option:

```
"laravelDocs.version": 6.x
```

**Note:** After modifying the `laravelDocs.version` configuration, you need to *restart Visual Studio Code* for the changes to take effect.

## Release Notes

### 1.3.0

Added `laravelDocs.version` configuration option to specify Laravel version.

### 1.0.0

Initial release -- Laravel 5.5 support
