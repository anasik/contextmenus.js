# [contextmenus.js](http://anasismail.com/others/contextmenu)
Purely Javascript based solution allowing for easy creation of right-click context menus.

# Installation:
Add the following html to the head tag of the document (to be honest, it doesnt matter where you add them, but the head is where most of us would prefer them to be.)

<code>&lt;link rel="stylesheet" href="contextmenus.css"/&gt;</code>

<code>&lt;script src="contextmenus.js"&gt;&lt;/script&gt;</code>

# Defining menus
So let's suppose that we have an element with the id: "lithium," and we want it to have a context menu, that shows up every time a user right-clicks on it. All you have to do is define the menu as a "ul" tag, within the class: "contextmenu", and with the id: "lithiummenu." A stripped down version of your code should look something like this.

<code>&lt;div id="lithium"&gt;Above Sodium and before Magnesium.&lt;/div&gt;</code>

<code>&lt;ul class="contextmenu" id="lithiummenu"&gt;</code>

<code>&lt;li&gt;Lithium Nitrate&lt;/li&gt;</code>

<code>&lt;li&gt;Lithium Sulfate&lt;/li&gt;</code>

<code>&lt;li&gt;Lithium Carbonate&lt;/li&gt;</code>

<code>&lt;/ul&gt;</code>
</code>

And guess what? That's it!
