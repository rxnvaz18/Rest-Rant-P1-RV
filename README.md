# Project REST-Rant

REST-Rant is an app where users can review restaurants.
Adding more later as the project develops...

|METHOD| PATH|PURPOSE|
|:------:|:-----:|:------:|
|GET|/|Home page|
|GET|/places|Places index page|
|POST|/places|Create new place|
|GET|/places/new|Form page for creating a new place|
|GET|/places/:id|Details about a particular place|
|PUT|/places/:id|Update a particular place|
|GET|/places/:id/edit|Form page for editing an existing place|
|DELETE|/places/:id|Delete a particular place|
|POST|/places/:id/rant|Create a rant (comment) about a particular place|
|DELETE|/places/:id/rant/:rantId|Delete a rant (comment) about a particular place|
|GET|*|404 page (matches any route not defined above)|

places
|Field|Type|
|:---:|:---:|
|_id||Object ID|
|name|String|
|city|String|
|state|String|
|cuisines|String|
|pic|String|

rants
|Field|Type|
|:---:|:---:|
|_id|Object ID|
|place_id|ref(places) Object_ID|
|rant|Boolean|
|rating|Number|
|comment|String|
|reviewer|String|
