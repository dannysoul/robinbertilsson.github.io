$(document).ready(function() {
  var questions = [
    "Which database versions are supported in production?",
    "Which operation systems are supported in production?",
    "Which browsers (and versions) are officially supported for web editors?",
    "What does Â§ 3.3 in the License Agreement state?",
    "What is the name of the file that contains what you have licensed and all restrictions? And where do you place it?",
    "How is the friendly URL to a page constructed?",
    "Where can you change the URL to a page?",
    "What happens with the URL to a page when you move a page to another location in the page tree?",
    "Will internal links to a page break if you move a page in the page-tree?",
    "Will external links to a page break if you move a page in the page-tree?",
    "How does a move of a page affect the URL to its child pages?",
    "How does the Simple address property work?",
    "What is the difference between SIMPLE ADRESS compare to NAME IN URL?",
    "What is the difference between fallback and replacement language?",
    "Define how master language and language branch relate to each other?",
    "Why are some properties read-only when you translate a page? (detailed)",
    "Using the Versions gadget, how do you delete an old version of a page?",
    "How you delete a translation (language branch)?",
    "If you move a page in the page tree will the URL for other translations (language branches) of that page change?",
    "How do you use the Shortcut-property on a page?",
    "How does the shortcut type Fetch content from page work?",
    "Where do you control the sorting of pages?",
    "How does the property Sort subpages and Sort index work?",
    "What are Dynamic Properties and where do you create it?",
    "How do you schedule publishing of a page?",
    "How to you manage Expiration of a page? What does Archive to do?",
    "What does the built-in property Display in navigation do?",
    "XForms: Where do you find the user interface to view data, export it to excel and delete posts?",
    "How can an editor use Tasks in the navigation pane?",
    "Visitor group: What does match All, Any and Points mean?",
    "Visitor group: How do you use a personalization group to display fallback content",
    "Visitor group: How do you preview personalized content?",
    "Visitor group: What Criterions are included EPiServer CMS by default?",
    "How and where do you create Users and Groups?",
    "How and where do you change Access Rights?",
    "What can you do with Access Rights in admin mode that is not possible when click on Visible To, Manage the edit view?",
    "What do you use the following groups for: WebEditors, WebAdmins and Administrators?",
    "How do you use permissions for functions and whats the reason?",
    "Can you set access rights on individual properties and where?",
    "What does the different built-in scheduled jobs do and as which user?",
    "How do you define a Channel (mirroring)",
    "What does Reset State do (mirroring)?",
    "How are errors handled? Can you get mail notifications out of the box?",
    "What data can you transfer with import and export?",
    "What publishing status must content have to be mirrored?",
    "What does uiMaxVersions do?",
    "How do you define the start page of a site? And the default site URL?",
    "How can you configure the image editor?",
    "What does the culture and uiCulture attribute on the globalization-tag configure?",
    "What does uiEditorCssPaths do?",
    "How do you control caching of static files (like css, js and images)?",
    "How do you configure Membership and RoleProvider to user both SQL database and Active Directory?",
    "Can Active Directory or Windows provider be used if you want to create users or groups from code or EPiServer admin mode?",
    "What does a Virtual Path Provider do?",
    "How do you add a new starting point for the file manager?",
    "What is appDataPath? Where is this path defined?",
    "Why should you use EPiServer.CacheManager instead of the ASP.NET Cache in load balanced systems?",
    "How does the Event Management System relate to load balanced sites?",
    "What technology is used to send events between web applications?",
    "How do you customize the editor with your own css and styles drop down your sites?",
    "How do you get spelling dictionaries?",
    "How do you reconfigure the editor to allow the iframe-tag?",
    "How do you enable debug logging and is it on by default?",
    "How do you implement code that add data to the log from your own code?",
    "How do you get a translated string from code?",
    "How do you translate names on page types, block types and their properties for editors?",
    "How do you translate name of tabs?",
    "How do you set default values on new content in code?",
    "What build-in properties can you find on a Page Type respectively a Block Type?",
    "Why do you have to call CreateWritableClone() before you can modify a Page or Block? and how does this help improve performance?",
    "What events can you hook on DataFactory/IContentEvents?",
    "How do you use FindPagesWithCriteria?",
    "When are Property validators applied?",
    "Why do you have to make properties virtual on content types?",
    "Why is the FilterForVisitor class important to use?",
    "How do you use ISelectionFactory when you need a drop down editor?",
    "What is a Container Page?",
    "How can you change how a view is rendered if you are viewing a template in the edit view?",
    "What does Html.PropertyFor() do compared to Html.DisplayFor()?",
    "What is the function of the DisplayTemplates folder? And how does it relate to the UIHint-attribute?",
    "How do you get access to the CurrectPage or CurrentBlock in a controller?",
    "What events does XFormControl have that allows manipulation of rendering and processing of data?",
    "How do you use IInitializableModule and InitializableModule-attribute?",
    "How do you use the ModuleDependecy-attribute to control the order of execution of initialization modules?",
    "Why is it important to use initialization modules instead of using Application_Start in Global.asax?",
    "How do you use the three ways to add menu items to the global navigation?",
    "How do you register a Scheduled Plug-in (attribute)?",
    "What is the value of HttpContext.Current and Current User if you try to access it inside a Scheduled Job?",
    "How do you translate the name and description on a plugin? (Tip: LanugagePath)",
    "How can you use the ICustomPlugInLoader?",
    "What plug-in attribute do you decorate your custom property with to get it registered?",
    "What is the base class for all Properties?",
    "What plug-in attribute is used to register a gadget and where do you put it?",
    "How do you create a DynamicDataStore for your class using DynamicDataStoreFactory?",
    "Where can you find episerver bug list (url)?",
    "Where can you report a episerver support ticket (url)?",
    "How do you personalize a block",
    "Can you have more than one personalization on a single block, (if yes) why would you?",
    "How do you print a link(anchor) to another page (MVC)?",
    "How is xforms and xforms data saved?",
    "If not DDS how should you save your content",
    "If you would change the render for a EPiServer property ex. URL, how would you do it?",
    "You add a block to a new episerver instance, and the site begins to slow down, what would you do?",
    "How do you install EPiServer and Patches/Updates",
    "How do you update episerver UI (7.5+)?",
    "Where do you find DDL-files from addons via addonstore",
    "Why should you use EPiServer cachemanager instead of ASP.NET's version of it",
    "If the page in the pagetree is 'italic', what does that mean?",
    "How do you create your own XHTML editor?",
    "How many licensefiles do you need for a server with multiple sites and products?",
    "Whats IOC?",
    "How can you make episerver safer on a frontweb?",
    "How do you define default values for properties",
    "If you change the default value in admin mode for a property will the code or the admin value be the new default value?",
    "How do you define default-value (code)?",
    "How can you show more detailed error messages for users such as admins?",
    "What will be mirrored when you create a new mirror channel",
    "How do you filter out unpublished sites and pages?",
    "How do you chech accessrights on a pagedata object?",
    "How do you detect if the page is in edit mode from code?",
    "If you would like a different view for a mobile, what would you do?",
    "Where do you find settings for caching (static files such as images, css and javascript), is it cached by default? (not browser)",
    "whats the method to create a block or page in episerver?",
    "Whats included in the EPiServer Visual Studio Extension",
    "What is personalization and why do you use it?",
    "Is two way auth build in to EPiServer?",
    "Whats the left part of edit mode called?",
    "Whats the right part of admin mode called?",
    "A template are running slowly, what can i do?",
  ];
  var answers = [
  "MSQL Server 2008, 2008 R2, 2012, 2014",
  "MWS 2012, 2012 R2",
  "IE 10, IE 11, Firefox (latest), Chrome (latest)",
  "Redirect (no redirects that bypasses episerver license restrictions)",
  "License.config, place it in the root folder of the web project ",
  "Parents > PageName (PageUrl or GetUrl methods)",
  "Edit > select page > properties",
  "URL changes, except for the pagename",
  "No, they update automagicly",
  "Yes, they are not updated and must be edited manually",
  "Not at all unless they’re changed to another node",
  "Gives the editor the ability to change the url to a simpler one",
  "Name in url changes the url of the page whilst simple adress uses both the new and old url to prevent external links to break.",
  "The fallback language will be shown until the desired language is available. Replacement language overrides this.",
  "The master language inherits from system os (and/or browser?), master language is a language branch.",
  "CultureSpecific attribute on property. Defines if this property should have a different value for each language. If not set: true for strings, other types false.",
  "Highlight > Actions > Remove/Delete",
  "Page by page or with a scheduled job",
  "Yes they update their URL as well",
  "Create internal/external link, show text or fetch information from another page at the page properties, settingstab.",
  "?",
  "Each page has Sortindex @ the Settings tab of Pageproperties",
  "Sort subpages edits the childrens sortindex depending on which choice the editor choses. Sortindex can be used for many diffrent applications, such as the order of the pagetree.",
  "They are properties that are inherited throughout the site. They can be created in code with the DynamicProperty class or in the Admin",
  "Press Publish? button and chose Scheduled publish",
  "Page properties > Tools > Handle Expirationdate & Archiving - Archive puts the content where it cant be seen by the user but does not delete it.",
  "It allows the editor what to show in the navigation for the user.",
  "Open the XForm block, press the import/export tab",
  "Press the Tasks tab at top of the navigationbar, select one of the choices",
  "All: all criterias must be met. Any: any criterias must be met. Points: if X amount of points is met from each criteria that gives X Y Z amount.",
  "Include the fallback content in a personalization group but leave the visitor group field empty.",
  "Editormode > “Eye” > Visitorgroups",
  "Site, Time & Place, URL, Visitor Groups",
  "Admin > Admin > Create User / Administer Groups",
  "Admin > Admin > Set Access Rights (press a page and chose who has rights)",
  "In Admin u can chose to edit this for subpages also",
  "Chosing who has access to what, Administrators access everything. WebAdmins can access the admin mode and edit mode. WebEditors can access the edit mode only.",
  "Admin > Config > Permissions for Functions. Used to provide certain people with information for development, bug fixing or special editing",
  "No, but you can assign them to a tab with certain access rights.",
  "It runs with a anonymous user profile. Link validation, empty trash, subscriptions.",
  "Admin > Config > Mirroring",
  "Remirror the channel",
  "EPiServer has a custom error message. Email notifications are available after enabling them in web.config (and setting up a smtp server?)",
  "ContentItems, ContentTypes, Frames, Dynamic Property Definitions, Tabs, Categories, Visitor groups",
  "The content must be published",
  "The maximum number of page versions that EPiServer will keep",
  "Admin > Config > Manage Websites > Add Site > Fill Data (URL=DefaultURL) > Add",
  "Add/edit parameters in the web.config",
  "The uiCulture configures which language is used for the UI (for editors)",
  "Edits the CSS path for the TinyMCE editor’s CSS file",
  "Web.config > <caching> <profiles>",
  "Web.config > <membership defaultProvider””>",
  "WindowsRoleProvider and ActiveDirectoryRoleProvider does not allow you to create roles.",
  "Used by protected modules, virtual path to static files",
  "Webconfig?",
  "The location of the App_Data folder, defined in the web.config",
  "One major difference when using EPiServer’s own cache classes is that cache changes are propagated to load-balanced web servers as well. ",
  "The EPiServer Events System is used to distribute events with an EPiServer CMS site and between sites in an enterprise and/or load balanced scenario.",
  "Event API ???",
  "Web.config > <applicationSettings> uiEditorCssPaths",
  "Install the Spellchecker add-on for TinyMCE",
  "Pass iframe parameter in the TinyMCE init",
  "Debug is enabled by default in EPiServerLog.config",
  "By using the log4net namespace when creating a logger class",
  "By using the @Html.Translate(“”)",
  "By using language xml files <contenttypes> ",
  "Same as above but <groups>",
  "Override the setDefaultValues method",
  "ContentData class (base class for classes that holds content)",
  "CreateWritableClone() is needed to edit and update an object because they are read-only (Improved performance?)",
  "Content related (CreatedContent, DeletedContent and so on)",
  "Create a PropertyCriteriaCollection with one or many PropertyCriteria obejcts (search conditions) then use FindPagesWithCriteria (overload to use language branch parameter if needed)",
  "During save (EPiServer.IContentRepository.Save)",
  "It’s needed to enable overriding of the property",
  "It’s important to use to prevent searches from returning root, trash-bin items and so on",
  "When a selection factory class, you implement the ISelectionFactory interface. These classes are used to sort data sources for properties that are edited using EPiServer’s SelectionEditor. ",
  "A pagetype which is used to contain pages (aka folderpage). It does not have a view nor a controller.",
  "Bool inEditMode = PageEditing.PageIsInEditMode",
  "@Html.PropertyFor() allows editing to the area whilst @Html.DisplayFor() shows the information",
  "If we want to change how a property type is rendered using the PropertyFor / DisplayFor methods, we simply create a Display Template with the same name of the type (default location is ~/Views/Shared/DisplayTemplates). Then use [UiHint (UiHint.PropertyName)] to make ASP.NET understand what you want.",
  "By using the PageRouteHelper class",
  "Aftersubmit, beforeload, beforesubmit",
  "Create a class with the [InitializeableModule] attribute and let it inherit from the interface IInitializeableModule",
  "By using the [ModuleDependency[typeof[ModuleThatIDependOn]]] attribute, you make sure the modules are initiated in the correct order",
  "The major advantage of this is that they are executed before Application_Start, which allows the application to be fully initialized and usable from within Application_Start",
  "The [MenuItem] attribute, the IMenuProvider interface and by adding <navigation> to the <episerver.shell> in web.config",
  "By using the [EPiServer.PlugIn.ScheduledJob] attribute on your class",
  "Om jobb k?rs automatiskt ?r HttpContect.Current null. Vid manuelt med den inloggadesr?ttigheter",
  "The normal way, with language files",
  "By overriding the default plugin initzialiser",
  "[PageDefinitionTypePlugIn(DisplayName = “YourPropertyName”)]",
  "PropertyData",
  "[Gadget], which you put on the controller",
  "The class needs to inherit from IDynamicData and on change, use DynamicDataStoreFactory.Instance.CreateStore(typeof(YourClass))",
  "http://world.episerver.com/support/bug-list/",
  "http://world.episerver.com/support/",
  "Locate the block > hover + click the top-right menu icon > personalize",
  "Yes, incase of multiple visitorgroups",
  "Html.ContentLink(contentReference)",
  "Dynamic Data Store since EPiCMS6",
  "SQL",
  "Change the default renderers (BAD) or create a custom display template in Views/Shared/DisplayTemplates, this will override the default ones",
  "?",
  "Using NuGet packages found in the EPiServer NuGet feed on http://nuget.episerver.com",
  "Using NuGet packages found in the EPiServer NuGet feed on http://nuget.episerver.com (yes same answer)",
  "?",
  "The ASP.NET version does not know if the cached content is old, or if the content is unpublished, EPiServer’s version handles this issue",
  "The pages/blocks that are not translated will written with italic text",
  "Dojo/Dijit, or edit TinyMCE",
  "One",
  "Decoupling of the system and cleaner code",
  "?",
  "Override the setDefaultValues method (68)",
  "Admin mode overrides the values set in code",
  "Override the setDefaultValues method (68, 113)",
  "Admin > Config > Security > Permissions for Functions > Defailted error messages for troubleshooting",
  "?",
  "By using the FilterForVisitor() ext. method",
  "CurrentPage.ACL.QueryDistinctAccess(EpiServer.Security.AccessLevel.Read)",
  "PageEditing.PageIsInEditMode",
  "Register the IDisplayMode and create classes for Resolutions",
  "Web.config (<caching><profiles>)",
  ".Save(); (from the DataFactory class)",
  "Project- and item templates, Alloy Demo",
  "To provide visitors with different content depending on who they are / what time it is, and so on to make the content speak as much as possible to the specific user",
  "No, it’s not",
  "Left-hand “navigation” pane / Pagetree pane",
  "Right-hand “assets” pane / Assets pane",
  "?",
  ];
  var index = 0;
  var answer = $('.answer');
  var question = $('.question');

  function changeQuestion(arrayId) {
    question.text(questions[arrayId]);
	answer.text(answers[arrayId]);
  }

  function changeStatusText(arrayPos) {
    var status = $('.qc-status');
    var ret = "Question: " + (arrayPos+1) + "/" + questions.length;
    status.text(ret);
  }

  function isNextClicked() {
    if(event.keyCode == 78) {
      return true;
    }
    return false;
  }
  
  function isAnswerClicked() {
	if(event.keyCode == 65) {
		return true;
	}
	return false;
  }

  function isBackClicked(event) {
    if(event.keyCode == 66) {
      return true;
    }
    return false;
  }

  function toggleArrPosForm() {
    var counter = $('.question-counter');

    if(!counter.hasClass('form-visible')) {
      counter.toggleClass("form-visible");
    }
  }

  function toggleInputError(time) {
    var input = $('#questionId');

    input.addClass('input-error');
    setTimeout(function() {
      input.removeClass('input-error');
    }, time);
  }

  function changeIndexViaValue(value) {
    var counter = $('.question-counter');
    setTimeout(function() {
      counter.removeClass("form-visible");
    }, 10);

    index = value - 1;
    changeQuestion(index);
    changeStatusText(index);
	answer.css('color', '#212121');
  }

  changeQuestion(index);
  changeStatusText(index);

  $('body').keyup(function (e) {
    if(isNextClicked(e)) {
      if(index < questions.length - 1) {
		    answer.css('color', '#212121');
        index++;
      }
    }
	else if(isAnswerClicked(e)) {
		answer.css('color', 'gray');
	}
    else if(isBackClicked(e)) {
      if(index !== 0) {
		    answer.css('color', '#212121');
        index--;
      }
    }

    changeQuestion(index);
    changeStatusText(index);
  });

  $('.arrow-left').on('click', function() {
    if(index !== 0) {
        answer.css('color', '#212121');
        index--;
        changeQuestion(index);
        changeStatusText(index);
      }
  });

  $('.arrow-right').on('click', function() {
    if(index < questions.length - 1) {
        answer.css('color', '#212121');
        index++;
        changeQuestion(index);
        changeStatusText(index);
      }
  });

  $('.question-counter').on('click', function() {
    toggleArrPosForm();
  });

  $('#submitBtn').on('click', function() {
    var val = $('#questionId').val();

    if($.isNumeric(val)) {
	  changeIndexViaValue(val);
    } else {
      toggleInputError(1250);
    }
  });
});
