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

    topic = url.split('/')[3].title().replace('-', ' ').split('#')[0]
    slug = url.split('/')[3].split('#')[0]

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

with open(os.path.join(root, '../package.json'), 'w') as f:
    json.dump(data, f, indent=4)

# Generate the extension.ts file
with open(os.path.join(root, '../src/extension.ts'), 'w+') as f:
    f.write("'use strict';\n")
    f.write("import { workspace, commands, Uri, ExtensionContext } from 'vscode'\n\n")
    f.write("export function activate(context: ExtensionContext) {\n\n")
    f.write('    let version = workspace.getConfiguration("laravelDocs").version;' + "\n")
    f.write("    let baseUrl = version ? `https://laravel.com/docs/${version}/` : 'https://laravel.com/docs/';\n\n");


    for page in pages:
        f.write(
            '    let ' + page['command'] + ' = ' + 'commands.registerCommand('
            + "'extension." + page['command'] + "', () => {\n"
            + "        commands.executeCommand('vscode.open', "
                + "Uri.parse(baseUrl + '" + page['slug'] + "'));\n"
            + "    });\n"
            + "    context.subscriptions.push(" + page['command'] + ");\n"
        )

    f.write("\n}")

print('Plugin files rebuilt successfully!')
