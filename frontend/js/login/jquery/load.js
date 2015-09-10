function index() {( function($, window, document) {

			$(function() {

				switch(window.location.hostname) {
				case "techwizarddev.baking.cl":
					html_LoadLanguageSelectedByLanguageBrowser_EventClick(language);
					html_DisableOptionPaste_EventBind("input[name='inputLoginUser']");
					html_DisableOptionPaste_EventBind("input[name='inputLoginPassword']");
					html_SelectOptionLanguage_EventClick();
					html_EnableCharacters_EventKeypress("input[name='inputLoginUser']","abcdefghijklmnñopqrstuvwxyz1234567890-_.");
					html_FormLogin_EventSubmit();
					break;

				case "techwizard.bsw.cl":
					html_LoadLanguageSelectedByLanguageBrowser_EventClick(language);
					html_DisableOptionPaste_EventBind("input[name='inputLoginUser']");
					html_DisableOptionPaste_EventBind("input[name='inputLoginPassword']");
					html_SelectOptionLanguage_EventClick();
					html_EnableCharacters_EventKeypress("input[name='inputLoginUser']","abcdefghijklmnñopqrstuvwxyz1234567890-_.");
					html_FormLogin_EventSubmit();
					break;

				case "demo.tw.bsw.cl":
					html_LoadLanguageSelectedByLanguageBrowser_EventClick(language);
					html_DisableOptionPaste_EventBind("input[name='inputLoginUser']");
					html_DisableOptionPaste_EventBind("input[name='inputLoginPassword']");
					html_SelectOptionLanguage_EventClick();
					html_EnableCharacters_EventKeypress("input[name='inputLoginUser']","abcdefghijklmnñopqrstuvwxyz1234567890-_.");
					html_FormLogin_EventSubmit();
					break;

				case "telefonica.pe.tw.bsw.cl":
					html_LoadLanguageSelectedByLanguageBrowser_EventClick(language);
					html_DisableOptionPaste_EventBind("input[name='inputLoginUser']");
					html_DisableOptionPaste_EventBind("input[name='inputLoginPassword']");
					html_SelectOptionLanguage_EventClick();
					html_EnableCharacters_EventKeypress("input[name='inputLoginUser']","abcdefghijklmnñopqrstuvwxyz1234567890-_.");
					html_FormLogin_EventSubmit();
					break;
				
				case "movistar.cl.tw.bsw.cl":
					html_LoadLanguageSelectedByLanguageBrowser_EventClick(language);
					html_DisableOptionPaste_EventBind("input[name='inputLoginUser']");
					html_DisableOptionPaste_EventBind("input[name='inputLoginPassword']");
					html_SelectOptionLanguage_EventClick();
					html_EnableCharacters_EventKeypress("input[name='inputLoginUser']","abcdefghijklmnñopqrstuvwxyz1234567890-_.");
					html_FormLogin_EventSubmit();
					break;	

				default:
					html_LoadLanguageSelectedByLanguageBrowser_EventClick(language);
					html_DisableOptionPaste_EventBind("input[name='inputLoginUser']");
					html_DisableOptionPaste_EventBind("input[name='inputLoginPassword']");
					html_SelectOptionLanguage_EventClick();
					html_EnableCharacters_EventKeypress("input[name='inputLoginUser']","abcdefghijklmnñopqrstuvwxyz1234567890-_.");
					html_FormLogin_EventSubmit();
				}

			});

		}(window.jQuery, window, document));

}