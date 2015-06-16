describe("stringops", function() {
    'use strict';
    var ascii = "Strange women lyin' in ponds distributin' swords is no basis for a system of government!";
    var accents = "Voix ambiguë d'un cœur qui au zéphyr préfère les jattes de kiwi";
    var unicode = "ಠ_ಠ (╯°□°）╯︵ ┻━┻";

    describe("The noAccents function", function() {
        it('should replace accented characters with their non-accented counterparts', function(){
            expect(ascii.noAccents()).toEqual(ascii);
            expect(accents.noAccents()).toEqual("Voix ambigue d'un coeur qui au zephyr prefere les jattes de kiwi");
            expect(unicode.noAccents()).toEqual("ಠ_ಠ (╯°□°）╯︵ ┻━┻");
        });

        it('should remove non-ascii characters if removeOtherUnicodeCharacters is set to true', function(){
            expect(ascii.noAccents(true, '-')).toEqual(ascii);
            expect(accents.noAccents(true, '-')).toEqual("Voix ambigue d'un coeur qui au zephyr prefere les jattes de kiwi");
            expect(unicode.noAccents(true, '-')).toEqual("-_- (------- ---");
        });
    });

    describe("The toSlug function", function() {
        it('should truncate the string at the given maxLength', function(){
            expect(ascii.toSlug(13).length).toEqual(13);
            expect(accents.toSlug(36).length).toEqual(36);
            expect(unicode.toSlug(3).length).toEqual(3);
        });

        it('should replace whitespace with a dash', function(){
            expect("she turned me into a newt".toSlug()).toEqual("she-turned-me-into-a-newt");
        });

        it('should trim the string before treating it', function(){
            expect(" hello ".toSlug()).toEqual("hello");
            expect(" hello ".toSlug(5)).toEqual("hello");
            expect("\thello\t".toSlug(5)).toEqual("hello");
        });

        it('should only return the replacement character, dashes and alphanumeric lowercase characters', function(){
            expect(ascii.toSlug(null, '_')).toEqual("strange_women_lyin__in_ponds_distributin__swords_is_no_basis_for_a_system_of_government_");
            expect(accents.toSlug(null, '_')).toEqual("voix_ambigue_d_un_coeur_qui_au_zephyr_prefere_les_jattes_de_kiwi");
            expect(unicode.toSlug(null, '_')).toEqual("________________");
        });
    });

    describe("The toFileName function with playItSafe set to false", function() {
        var invalidFileName = "who<names>files\\|/like:this*seriously?\0";

        it('should truncate the string to 255 characters', function(){
            expect('simple.txt'.toFileName(false).length).toEqual('simple.txt'.length);
            expect(ascii.repeat(100).toFileName(false).length).toEqual(255);
            expect(accents.repeat(100).toFileName(false).length).toEqual(255);
            expect(unicode.repeat(100).toFileName(false).length).toEqual(255);
        });

        it('should remove all invalid characters', function(){
            expect('simple.txt'.toFileName(false)).toEqual('simple.txt');
            expect(ascii.toFileName(false)).toEqual(ascii);
            expect(accents.toFileName(false)).toEqual(accents);
            expect(unicode.toFileName(false)).toEqual(unicode);

            expect(invalidFileName.toFileName(false)).toEqual("whonamesfileslikethisseriously");
        });

        it('should use the correct replacement character', function(){
            expect(invalidFileName.toFileName(false, '-')).toEqual("who-names-files---like-this-seriously--");
        });
    });

    describe("The toFileName function with playItSafe set to true", function() {
        var invalidFileName = "who<names>files\\|/like:this*seriously?\0";

        it('should truncate the string to 255 characters', function(){
            expect('simple.txt'.toFileName(true).length).toEqual('simple.txt'.length);
            expect(ascii.repeat(100).toFileName(true).length).toEqual(255);
            expect(accents.repeat(100).toFileName(true).length).toEqual(255);
            expect(unicode.repeat(100).toFileName(true).length).toEqual(255);
        });

        it('should remove all invalid characters', function(){
            expect('simple.txt'.toFileName(true)).toEqual('simple.txt');
            expect(ascii.toFileName(true)).toEqual('Strange-women-lyin--in-ponds-distributin--swords-is-no-basis-for-a-system-of-government-');
            expect(accents.toFileName(true)).toEqual('Voix-ambigue-d-un-coeur-qui-au-zephyr-prefere-les-jattes-de-kiwi');
            expect(unicode.toFileName(true)).toEqual('-_--------------');

            expect(invalidFileName.toFileName(true)).toEqual("who-names-files---like-this-seriously--");
        });

        it('should use the correct replacement character', function(){
            expect(invalidFileName.toFileName(true, '-')).toEqual("who-names-files---like-this-seriously--");
        });
    });

    describe("The repeat function", function() {
        var invalidFileName = "who<names>files\\|/like:this*seriously?\0";

        it('should repeat a string the given number of times', function(){
            expect('test'.repeat(5)).toEqual('testtesttesttesttest');
            expect('test'.repeat(15)).toEqual('testtesttesttesttesttesttesttesttesttesttesttesttesttesttest');
            expect('test'.repeat(0)).toEqual('');
            expect('test'.repeat(1)).toEqual('test');
        });
    });

});
