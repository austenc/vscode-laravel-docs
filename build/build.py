import re
import os
import json
import urllib.request
from shutil import copyfile


# Create a request with a valid User-Agent
req = urllib.request.Request(
    'https://laravel.com/docs/',
    data=None,
    headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/35.0.1916.47 Safari/537.36'
    }
)

# Pull the html from the main docs page and find all /docs links
docs = urllib.request.urlopen(req)
links = re.findall('href="(/docs/.*?)"', docs.read().decode('utf-8'))
found = []
pages = []
root = os.path.dirname(__file__)

# Compile all the info for the pages
for url in sorted(set(links)):
    # Parse URL to handle both patterns:
    # /docs/12.x/artisan (versioned)
    # /docs/horizon (unversioned)
    url_parts = url.split('/')

    if len(url_parts) >= 4 and url_parts[2] and url_parts[3]:
        # Check if the third part is a version (contains .x)
        if '.x' in url_parts[2]:
            # Versioned URL: /docs/12.x/artisan
            topic = url_parts[3].title().replace('-', ' ').split('#')[0]
            slug = url_parts[3].split('#')[0]
        else:
            # Unversioned URL: /docs/horizon
            topic = url_parts[2].title().replace('-', ' ').split('#')[0]
            slug = url_parts[2].split('#')[0]
    else:
        # Skip malformed URLs
        continue

    if (topic not in found):
        found.append(topic)
        pages.append({
            "topic": topic,
            "slug": slug,
            "command": "laravelDocs" + slug.replace('-', ' ').title().replace(' ', '')
        })

# Generate command definitions in package.json
with open(os.path.join(root, '../package.json'), 'r') as f:
    data = json.load(f)
    data['contributes']['commands'] = []
    data['activationEvents'] = []

    for page in pages:
        data['activationEvents'].append("onCommand:extension." + page['command'])
        data['contributes']['commands'].append({
            "command": "extension.{}".format(page['command']),
            "category": "Laravel Docs",
            "title": page['topic'],
        })

    # Add the change version command
    data['activationEvents'].append("onCommand:extension.laravelDocsChangeVersion")
    data['contributes']['commands'].append({
        "command": "extension.laravelDocsChangeVersion",
        "category": "Laravel Docs",
        "title": "Change Version",
    })

with open(os.path.join(root, '../package.json'), 'w') as f:
    json.dump(data, f, indent=4)

# Generate the extension.ts file
with open(os.path.join(root, '../src/extension.ts'), 'w+') as f:
    f.write("'use strict';\n")
    f.write("import * as vscode from 'vscode'\n\n")
    f.write("export function activate(context: vscode.ExtensionContext) {\n\n")
    f.write('    let version = vscode.workspace.getConfiguration("laravelDocs").version;' + "\n")
    f.write("    let baseUrl = version ? `https://laravel.com/docs/${version}/` : 'https://laravel.com/docs/';\n\n")

    for page in pages:
        f.write(
            '    let ' + page['command'] + ' = ' + 'vscode.commands.registerCommand('
            + "'extension." + page['command'] + "', () => {\n"
            + "        vscode.commands.executeCommand('vscode.open', "
                + "vscode.Uri.parse(baseUrl + '" + page['slug'] + "'));\n"
            + "    });\n"
            + "    context.subscriptions.push(" + page['command'] + ");\n"
        )

    # Add the change version command
    f.write(
        '    let laravelDocsChangeVersion = vscode.commands.registerCommand('
        + "'extension.laravelDocsChangeVersion', async () => {\n"
        + "        const versions = [\n"
        + "            { label: 'Latest (default)', value: '' },\n"
        + "            { label: 'Laravel 11.x', value: '11.x' },\n"
        + "            { label: 'Laravel 10.x', value: '10.x' },\n"
        + "            { label: 'Laravel 9.x', value: '9.x' },\n"
        + "            { label: 'Laravel 8.x', value: '8.x' },\n"
        + "            { label: 'Laravel 7.x', value: '7.x' },\n"
        + "            { label: 'Laravel 6.x', value: '6.x' },\n"
        + "            { label: 'Laravel 5.x', value: '5.x' }\n"
        + "        ];\n\n"
        + "        const selectedVersion = await vscode.window.showQuickPick(versions, {\n"
        + "            placeHolder: 'Select Laravel documentation version',\n"
        + "            title: 'Laravel Docs Version'\n"
        + "        });\n\n"
        + "        if (selectedVersion) {\n"
        + "            const config = vscode.workspace.getConfiguration('laravelDocs');\n"
        + "            await config.update('version', selectedVersion.value, vscode.ConfigurationTarget.Global);\n"
        + "            vscode.window.showInformationMessage(`Laravel docs version set to: ${selectedVersion.label}`);\n"
        + "        }\n"
        + "    });\n"
        + "    context.subscriptions.push(laravelDocsChangeVersion);\n"
    )

    f.write("\n}")

print('Plugin files rebuilt successfully!')
