#stringops.js

stringops.js is a collection of string utility functions. It extends the default String object to remain simple and convenient.

Install the library using `bower install stringops`, and the methods below will become available on any String object. See the *Examples* below for more comprehensive examples.

##API

* String.prototype.**noAccents**(*removeOtherUnicodeCharacters=false*, *replacementCharacter=""*)
	* *removeOtherUnicodeCharacters*: whether to remove unicode characters that are not mapped to a non-accented characters. This includes all non-ascii characters.
	* *replacementCharacter*: the replacement character(s) to use for invalid characters.
* String.prototype.**repeat**(*times*)
	* *times*: a positive integer representing the number of times the string should be repeated
* String.prototype.**toFileName**(*playItSafe=false*, *replacementCharacter=""*)
	* *playItSafe*: whether to only remove reserved characters or all "non-annoying" characters (`[0-9a-zA-Z-.,;_]`). When set to false, only reserved and non-printable characters are replaced.
	* *replacementCharacter*: the replacement character(s) to use for invalid characters.
* String.prototype.**toSlug**(*maxLength=null*, *replacementCharacter="-"*)
	* *maxLength*: the maximum length of the slug.
	* *replacementCharacter*: the replacement character(s) to use for invalid characters.

##Examples

The examples below cover the functionality of stringops.js:

```
"Voix ambiguë d'un cœur qui au zéphyr préfère les jattes de kiwi".noAccents()
//"Voix ambigue d'un coeur qui au zephyr prefere les jattes de kiwi"

"Voix ambiguë d'un cœur qui au zéphyr préfère les jattes de kiwi".toSlug()
// "voix-ambigue-d-un-coeur-qui-au-zephyr-prefere-les-jattes-de-kiwi"

"Voix ambiguë d'un cœur qui au zéphyr préfère les jattes de kiwi".toSlug(10)
//"voix-ambig"

"Voix ambiguë d'un cœur qui au zéphyr préfère les jattes de kiwi".toSlug(10, '_')
//"voix_ambig"

"Hello".repeat(3)
//"HelloHelloHello"

"who<names>files\\|/like:this*seriously?\0.txt".toFileName()
//"whonamesfileslikethisseriously.txt"

"who<names>files\\|/like:this*seriously?\0.txt".toFileName(false, '-')
//"who-names-files---like-this-seriously--.txt"

"Holiday trip!.ppt".toFileName(true)
//"Holidaytrip.ppt"

"Holiday trip!.ppt".toFileName(true, '-')
//"Holiday-trip-.ppt"
```

##Warning

This is a collection of utilities used in [Markdown Notes](http://markdownnotes.com). It is not meant to be an extensive library of all string functions a developer should need.
