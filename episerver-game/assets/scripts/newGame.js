$(document).ready(function() {
  var questions = [
    "Which database versions are supported in production?",
    "Which operation systems are supported in production?",
    "Which browsers (and versions) are officially supported for web editors?",
    "What does § 3.3 in the License Agreement state?",
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

  var cq = 0,
      qc = $('.question-counter'),
      q = $('.question');


      q.text(questions[cq]);
      $('.qc-status').text("Question: " + (cq + 1) + "/" + questions.length);

  $('body').keyup(function (e) {
    if(e.keyCode == 78) {
      // Next
      if(cq < questions.length - 1) {
        cq++;
      }
    }
    else if(e.keyCode == 66) {
      // Back
      if(cq !== 0) {
        cq--;
      }
    }

    q.text(questions[cq]);
    $('.qc-status').text("Question: " + (cq + 1) + "/" + questions.length);
  });

  qc.on('click', function() {
    if(!$(this).hasClass('form-visible')) {
      $(this).toggleClass("form-visible");
    }
  });

  $('#submitBtn').on('click', function() {
    var val = $('#questionId').val();

    // @TODO: Check for numeric input 1-9 instead of true
    if(false) {
      $('#questionId').addClass('input-error');

      setTimeout(function() {
        $('#questionId').removeClass('input-error');
      }, 1250);
    } else {
      setTimeout(function() {
        $('.question-counter').removeClass("form-visible");
      }, 10);
      cq = val - 1;
      q.text(questions[cq]);
      $('.qc-status').text("Question: " + (cq + 1) + "/" + questions.length);
    }
  });
});
