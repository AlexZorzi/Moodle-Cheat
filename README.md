# Moodle-Cheat
 Cheat in moodle tests with Javascript (tested in Moodle 3.7)
 Im not Responsable for the use you make of this code

# Concept

<img src="https://i.imgur.com/kxPVpkw.gif">Vibing</img>
It's basically as having digital notes, it does not touch the backend!

# How To
for this project to work we need an <a href="https://chrome.google.com/webstore/detail/disable-javascript/jfpdlihdedhlmhlbgooailmfhahieoem">extension</a> to block the native javascript code of Moodle.
This project can work in 2 ways:

USING A SEARCH API:
you can use a search api like <a href="https://developers.google.com/custom-search/v1/overview" >Google</a>
but its limited to a 100 query per day in the free plan. You can use wathever API you want when sending a query to the api needs to be like shown "site:YourtargetSite.com query" in order to do this on the google api we have a special parameter on the query to add, the "cx" parameter, this is linked to witch sites your api will search. you can make a cx code here https://cse.google.com/cse/create/

USING A DATABASE :
you can use this method if you cant use the Api one.
the sitemapdownloader.py file is used to parse the sitemap of the TargetSite (where the answers are stored),
it turn every url on the site like https://www.TargetSite.com/Gauss.html, in queries for the db in this format :
Url : https://www.TargetSite.com/Gauss.html
Title : Gauss
So when we search on the db from the Javascript for a title LIKE "%Gauss%" we get the url.
And when we click a word on Moodle Javascript send a request to the php,file to search in the db and the php respond with a url.
the Url get parsed and printed on the site
