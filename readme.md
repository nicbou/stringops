#stringops.js

stringops.js is a collection of string utility functions. It extends the default String object to remain simple and convenient.

##API

String.prototype.**noAccents**(*removeOtherUnicodeCharacters=false*, *replacementCharacter=''*)

String.prototype.**toSlug**(*maxLength=null*, *replacementCharacter='-'*)

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
```

##Warning

This is a collection of utilities used in [Markdown Notes](http://markdownnotes.com). It is not meant to be an extensive library of all string functions a developer should need.
