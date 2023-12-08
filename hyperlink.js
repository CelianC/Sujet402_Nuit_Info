/**
 * @OnlyCurrentDoc
 *
 * The above comment directs Apps Script to limit the scope of file
 * access for this add-on. It specifies that this add-on will only
 * attempt to read or modify the files in which the add-on is used,
 * and not all of the user's files. The authorization request message
 * presented to users will reflect this limited scope.
 */

/**
 * Creates a menu entry in the Google Docs UI when the document is opened.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onOpen trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode.
 */

function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
}

/**
 * Runs when the add-on is installed.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onInstall trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode. (In practice, onInstall triggers always
 *     run in AuthMode.FULL, but onOpen triggers may be AuthMode.LIMITED or
 *     AuthMode.NONE.)
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * Opens a sidebar in the document containing the add-on's user interface.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 */
function showSidebar() {
  const ui = HtmlService.createHtmlOutputFromFile('sidebar')
      .setTitle('Yogi requirement');
  DocumentApp.getUi().showSidebar(ui);
}



/**
 * Fetches data from a specific URL and extracts keys, URLs, and texts from the results.
 * 
 * @returns {Object} An object containing three properties:
 * - keys: An array of keys extracted from the results.
 * - urls: An array of URLs extracted from the results.
 * - texts: An array of texts extracted from the results.
 */
function getAllKeys() {
  var url = 'https://ww1.requirementyogi.cloud/nuitdelinfo/search';
  var response = UrlFetchApp.fetch(url, { 'muteHttpExceptions': true });
  var json = response.getContentText();
  var data = JSON.parse(json);
  let keys = [];
  let urls = [];
  let texts = []; // metadata
  for (let i in data.results) {
    keys.push(data.results[i].key);
    urls.push(data.results[i].canonicalUrl);
    texts.push(data.results[i].text);
  }
  return { keys: keys, urls: urls , texts: texts};
}

/**
 * Searches for specific keys in the active Google Document and replaces them with hyperlinks.
 * The keys and corresponding URLs are fetched from the `getAllKeys` function.
 * 
 * @returns {Array} An array of keys that were found and replaced in the document.
 * If there is a mismatch between the number of keys and URLs, or if no keys are found, 
 * the function logs an error message and returns an empty array.
 */
function findKeysInDocument() {
  var body = DocumentApp.getActiveDocument().getBody();
  var keyValuePairs = getAllKeys();
  var keys = keyValuePairs.keys;
  var urls = keyValuePairs.urls;
  var foundKeys = [];

  if (keys && urls && keys.length === urls.length) {
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var url = urls[i];
      var searchResult = body.findText(key);

      while (searchResult) {
        foundKeys.push(key); // Store the found key in the array

        var textElement = searchResult.getElement().editAsText();
        var startOffset = searchResult.getStartOffset();
        var endOffset = searchResult.getEndOffsetInclusive();

        // Replace the key with a hyperlink
        textElement.setLinkUrl(startOffset, endOffset, url);

        // Find the next occurrence of the key
        searchResult = body.findText(key, searchResult);
      }
    }
  } else {
    Logger.log("Mismatch between keys and URLs or no keys found");
  }

  // Log the list of found keys
  return foundKeys;
}
