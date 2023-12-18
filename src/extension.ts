'use strict';
import { workspace, commands, Uri, ExtensionContext } from 'vscode'

export function activate(context: ExtensionContext) {

    let version = workspace.getConfiguration("laravelDocs").version;
    let baseUrl = version ? `https://laravel.com/docs/${version}/` : 'https://laravel.com/docs/';

    let laravelDocsArtisan = commands.registerCommand('extension.laravelDocsArtisan', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'artisan'));
    });
    context.subscriptions.push(laravelDocsArtisan);
    let laravelDocsAuthentication = commands.registerCommand('extension.laravelDocsAuthentication', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'authentication'));
    });
    context.subscriptions.push(laravelDocsAuthentication);
    let laravelDocsAuthorization = commands.registerCommand('extension.laravelDocsAuthorization', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'authorization'));
    });
    context.subscriptions.push(laravelDocsAuthorization);
    let laravelDocsBilling = commands.registerCommand('extension.laravelDocsBilling', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'billing'));
    });
    context.subscriptions.push(laravelDocsBilling);
    let laravelDocsBlade = commands.registerCommand('extension.laravelDocsBlade', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'blade'));
    });
    context.subscriptions.push(laravelDocsBlade);
    let laravelDocsBroadcasting = commands.registerCommand('extension.laravelDocsBroadcasting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'broadcasting'));
    });
    context.subscriptions.push(laravelDocsBroadcasting);
    let laravelDocsCache = commands.registerCommand('extension.laravelDocsCache', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'cache'));
    });
    context.subscriptions.push(laravelDocsCache);
    let laravelDocsCashierPaddle = commands.registerCommand('extension.laravelDocsCashierPaddle', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'cashier-paddle'));
    });
    context.subscriptions.push(laravelDocsCashierPaddle);
    let laravelDocsCollections = commands.registerCommand('extension.laravelDocsCollections', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'collections'));
    });
    context.subscriptions.push(laravelDocsCollections);
    let laravelDocsConfiguration = commands.registerCommand('extension.laravelDocsConfiguration', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'configuration'));
    });
    context.subscriptions.push(laravelDocsConfiguration);
    let laravelDocsConsoleTests = commands.registerCommand('extension.laravelDocsConsoleTests', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'console-tests'));
    });
    context.subscriptions.push(laravelDocsConsoleTests);
    let laravelDocsContainer = commands.registerCommand('extension.laravelDocsContainer', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'container'));
    });
    context.subscriptions.push(laravelDocsContainer);
    let laravelDocsContracts = commands.registerCommand('extension.laravelDocsContracts', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'contracts'));
    });
    context.subscriptions.push(laravelDocsContracts);
    let laravelDocsContributions = commands.registerCommand('extension.laravelDocsContributions', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'contributions'));
    });
    context.subscriptions.push(laravelDocsContributions);
    let laravelDocsControllers = commands.registerCommand('extension.laravelDocsControllers', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'controllers'));
    });
    context.subscriptions.push(laravelDocsControllers);
    let laravelDocsCsrf = commands.registerCommand('extension.laravelDocsCsrf', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'csrf'));
    });
    context.subscriptions.push(laravelDocsCsrf);
    let laravelDocsDatabase = commands.registerCommand('extension.laravelDocsDatabase', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'database'));
    });
    context.subscriptions.push(laravelDocsDatabase);
    let laravelDocsDatabaseTesting = commands.registerCommand('extension.laravelDocsDatabaseTesting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'database-testing'));
    });
    context.subscriptions.push(laravelDocsDatabaseTesting);
    let laravelDocsDeployment = commands.registerCommand('extension.laravelDocsDeployment', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'deployment'));
    });
    context.subscriptions.push(laravelDocsDeployment);
    let laravelDocsDusk = commands.registerCommand('extension.laravelDocsDusk', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'dusk'));
    });
    context.subscriptions.push(laravelDocsDusk);
    let laravelDocsEloquent = commands.registerCommand('extension.laravelDocsEloquent', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'eloquent'));
    });
    context.subscriptions.push(laravelDocsEloquent);
    let laravelDocsEloquentCollections = commands.registerCommand('extension.laravelDocsEloquentCollections', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'eloquent-collections'));
    });
    context.subscriptions.push(laravelDocsEloquentCollections);
    let laravelDocsEloquentFactories = commands.registerCommand('extension.laravelDocsEloquentFactories', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'eloquent-factories'));
    });
    context.subscriptions.push(laravelDocsEloquentFactories);
    let laravelDocsEloquentMutators = commands.registerCommand('extension.laravelDocsEloquentMutators', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'eloquent-mutators'));
    });
    context.subscriptions.push(laravelDocsEloquentMutators);
    let laravelDocsEloquentRelationships = commands.registerCommand('extension.laravelDocsEloquentRelationships', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'eloquent-relationships'));
    });
    context.subscriptions.push(laravelDocsEloquentRelationships);
    let laravelDocsEloquentResources = commands.registerCommand('extension.laravelDocsEloquentResources', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'eloquent-resources'));
    });
    context.subscriptions.push(laravelDocsEloquentResources);
    let laravelDocsEloquentSerialization = commands.registerCommand('extension.laravelDocsEloquentSerialization', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'eloquent-serialization'));
    });
    context.subscriptions.push(laravelDocsEloquentSerialization);
    let laravelDocsEncryption = commands.registerCommand('extension.laravelDocsEncryption', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'encryption'));
    });
    context.subscriptions.push(laravelDocsEncryption);
    let laravelDocsEnvoy = commands.registerCommand('extension.laravelDocsEnvoy', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'envoy'));
    });
    context.subscriptions.push(laravelDocsEnvoy);
    let laravelDocsErrors = commands.registerCommand('extension.laravelDocsErrors', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'errors'));
    });
    context.subscriptions.push(laravelDocsErrors);
    let laravelDocsEvents = commands.registerCommand('extension.laravelDocsEvents', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'events'));
    });
    context.subscriptions.push(laravelDocsEvents);
    let laravelDocsFacades = commands.registerCommand('extension.laravelDocsFacades', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'facades'));
    });
    context.subscriptions.push(laravelDocsFacades);
    let laravelDocsFilesystem = commands.registerCommand('extension.laravelDocsFilesystem', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'filesystem'));
    });
    context.subscriptions.push(laravelDocsFilesystem);
    let laravelDocsFolio = commands.registerCommand('extension.laravelDocsFolio', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'folio'));
    });
    context.subscriptions.push(laravelDocsFolio);
    let laravelDocsFortify = commands.registerCommand('extension.laravelDocsFortify', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'fortify'));
    });
    context.subscriptions.push(laravelDocsFortify);
    let laravelDocsFrontend = commands.registerCommand('extension.laravelDocsFrontend', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'frontend'));
    });
    context.subscriptions.push(laravelDocsFrontend);
    let laravelDocsHashing = commands.registerCommand('extension.laravelDocsHashing', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'hashing'));
    });
    context.subscriptions.push(laravelDocsHashing);
    let laravelDocsHelpers = commands.registerCommand('extension.laravelDocsHelpers', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'helpers'));
    });
    context.subscriptions.push(laravelDocsHelpers);
    let laravelDocsHomestead = commands.registerCommand('extension.laravelDocsHomestead', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'homestead'));
    });
    context.subscriptions.push(laravelDocsHomestead);
    let laravelDocsHorizon = commands.registerCommand('extension.laravelDocsHorizon', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'horizon'));
    });
    context.subscriptions.push(laravelDocsHorizon);
    let laravelDocsHttpClient = commands.registerCommand('extension.laravelDocsHttpClient', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'http-client'));
    });
    context.subscriptions.push(laravelDocsHttpClient);
    let laravelDocsHttpTests = commands.registerCommand('extension.laravelDocsHttpTests', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'http-tests'));
    });
    context.subscriptions.push(laravelDocsHttpTests);
    let laravelDocsInstallation = commands.registerCommand('extension.laravelDocsInstallation', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'installation'));
    });
    context.subscriptions.push(laravelDocsInstallation);
    let laravelDocsLifecycle = commands.registerCommand('extension.laravelDocsLifecycle', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'lifecycle'));
    });
    context.subscriptions.push(laravelDocsLifecycle);
    let laravelDocsLocalization = commands.registerCommand('extension.laravelDocsLocalization', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'localization'));
    });
    context.subscriptions.push(laravelDocsLocalization);
    let laravelDocsLogging = commands.registerCommand('extension.laravelDocsLogging', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'logging'));
    });
    context.subscriptions.push(laravelDocsLogging);
    let laravelDocsMail = commands.registerCommand('extension.laravelDocsMail', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'mail'));
    });
    context.subscriptions.push(laravelDocsMail);
    let laravelDocsMiddleware = commands.registerCommand('extension.laravelDocsMiddleware', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'middleware'));
    });
    context.subscriptions.push(laravelDocsMiddleware);
    let laravelDocsMigrations = commands.registerCommand('extension.laravelDocsMigrations', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'migrations'));
    });
    context.subscriptions.push(laravelDocsMigrations);
    let laravelDocsMix = commands.registerCommand('extension.laravelDocsMix', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'mix'));
    });
    context.subscriptions.push(laravelDocsMix);
    let laravelDocsMocking = commands.registerCommand('extension.laravelDocsMocking', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'mocking'));
    });
    context.subscriptions.push(laravelDocsMocking);
    let laravelDocsNotifications = commands.registerCommand('extension.laravelDocsNotifications', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'notifications'));
    });
    context.subscriptions.push(laravelDocsNotifications);
    let laravelDocsOctane = commands.registerCommand('extension.laravelDocsOctane', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'octane'));
    });
    context.subscriptions.push(laravelDocsOctane);
    let laravelDocsPackages = commands.registerCommand('extension.laravelDocsPackages', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'packages'));
    });
    context.subscriptions.push(laravelDocsPackages);
    let laravelDocsPagination = commands.registerCommand('extension.laravelDocsPagination', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'pagination'));
    });
    context.subscriptions.push(laravelDocsPagination);
    let laravelDocsPassport = commands.registerCommand('extension.laravelDocsPassport', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'passport'));
    });
    context.subscriptions.push(laravelDocsPassport);
    let laravelDocsPasswords = commands.registerCommand('extension.laravelDocsPasswords', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'passwords'));
    });
    context.subscriptions.push(laravelDocsPasswords);
    let laravelDocsPennant = commands.registerCommand('extension.laravelDocsPennant', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'pennant'));
    });
    context.subscriptions.push(laravelDocsPennant);
    let laravelDocsPint = commands.registerCommand('extension.laravelDocsPint', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'pint'));
    });
    context.subscriptions.push(laravelDocsPint);
    let laravelDocsPrecognition = commands.registerCommand('extension.laravelDocsPrecognition', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'precognition'));
    });
    context.subscriptions.push(laravelDocsPrecognition);
    let laravelDocsProcesses = commands.registerCommand('extension.laravelDocsProcesses', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'processes'));
    });
    context.subscriptions.push(laravelDocsProcesses);
    let laravelDocsPrompts = commands.registerCommand('extension.laravelDocsPrompts', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'prompts'));
    });
    context.subscriptions.push(laravelDocsPrompts);
    let laravelDocsProviders = commands.registerCommand('extension.laravelDocsProviders', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'providers'));
    });
    context.subscriptions.push(laravelDocsProviders);
    let laravelDocsPulse = commands.registerCommand('extension.laravelDocsPulse', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'pulse'));
    });
    context.subscriptions.push(laravelDocsPulse);
    let laravelDocsQueries = commands.registerCommand('extension.laravelDocsQueries', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'queries'));
    });
    context.subscriptions.push(laravelDocsQueries);
    let laravelDocsQueues = commands.registerCommand('extension.laravelDocsQueues', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'queues'));
    });
    context.subscriptions.push(laravelDocsQueues);
    let laravelDocsRateLimiting = commands.registerCommand('extension.laravelDocsRateLimiting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'rate-limiting'));
    });
    context.subscriptions.push(laravelDocsRateLimiting);
    let laravelDocsRedis = commands.registerCommand('extension.laravelDocsRedis', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'redis'));
    });
    context.subscriptions.push(laravelDocsRedis);
    let laravelDocsReleases = commands.registerCommand('extension.laravelDocsReleases', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'releases'));
    });
    context.subscriptions.push(laravelDocsReleases);
    let laravelDocsRequests = commands.registerCommand('extension.laravelDocsRequests', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'requests'));
    });
    context.subscriptions.push(laravelDocsRequests);
    let laravelDocsResponses = commands.registerCommand('extension.laravelDocsResponses', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'responses'));
    });
    context.subscriptions.push(laravelDocsResponses);
    let laravelDocsRouting = commands.registerCommand('extension.laravelDocsRouting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'routing'));
    });
    context.subscriptions.push(laravelDocsRouting);
    let laravelDocsSail = commands.registerCommand('extension.laravelDocsSail', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'sail'));
    });
    context.subscriptions.push(laravelDocsSail);
    let laravelDocsSanctum = commands.registerCommand('extension.laravelDocsSanctum', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'sanctum'));
    });
    context.subscriptions.push(laravelDocsSanctum);
    let laravelDocsScheduling = commands.registerCommand('extension.laravelDocsScheduling', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'scheduling'));
    });
    context.subscriptions.push(laravelDocsScheduling);
    let laravelDocsScout = commands.registerCommand('extension.laravelDocsScout', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'scout'));
    });
    context.subscriptions.push(laravelDocsScout);
    let laravelDocsSeeding = commands.registerCommand('extension.laravelDocsSeeding', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'seeding'));
    });
    context.subscriptions.push(laravelDocsSeeding);
    let laravelDocsSession = commands.registerCommand('extension.laravelDocsSession', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'session'));
    });
    context.subscriptions.push(laravelDocsSession);
    let laravelDocsSocialite = commands.registerCommand('extension.laravelDocsSocialite', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'socialite'));
    });
    context.subscriptions.push(laravelDocsSocialite);
    let laravelDocsStarterKits = commands.registerCommand('extension.laravelDocsStarterKits', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'starter-kits'));
    });
    context.subscriptions.push(laravelDocsStarterKits);
    let laravelDocsStrings = commands.registerCommand('extension.laravelDocsStrings', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'strings'));
    });
    context.subscriptions.push(laravelDocsStrings);
    let laravelDocsStructure = commands.registerCommand('extension.laravelDocsStructure', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'structure'));
    });
    context.subscriptions.push(laravelDocsStructure);
    let laravelDocsTelescope = commands.registerCommand('extension.laravelDocsTelescope', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'telescope'));
    });
    context.subscriptions.push(laravelDocsTelescope);
    let laravelDocsTesting = commands.registerCommand('extension.laravelDocsTesting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'testing'));
    });
    context.subscriptions.push(laravelDocsTesting);
    let laravelDocsUpgrade = commands.registerCommand('extension.laravelDocsUpgrade', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'upgrade'));
    });
    context.subscriptions.push(laravelDocsUpgrade);
    let laravelDocsUrls = commands.registerCommand('extension.laravelDocsUrls', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'urls'));
    });
    context.subscriptions.push(laravelDocsUrls);
    let laravelDocsValet = commands.registerCommand('extension.laravelDocsValet', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'valet'));
    });
    context.subscriptions.push(laravelDocsValet);
    let laravelDocsValidation = commands.registerCommand('extension.laravelDocsValidation', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'validation'));
    });
    context.subscriptions.push(laravelDocsValidation);
    let laravelDocsVerification = commands.registerCommand('extension.laravelDocsVerification', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'verification'));
    });
    context.subscriptions.push(laravelDocsVerification);
    let laravelDocsViews = commands.registerCommand('extension.laravelDocsViews', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'views'));
    });
    context.subscriptions.push(laravelDocsViews);
    let laravelDocsVite = commands.registerCommand('extension.laravelDocsVite', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'vite'));
    });
    context.subscriptions.push(laravelDocsVite);

}