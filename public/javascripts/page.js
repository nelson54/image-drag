var reading = reading || {};

(function(reading){

    reading.Page = function(page){
        var data = page;
        var img = $('img')[0];
        var isMousePressed = false;
        var $body = $('body');

        $body
            .mousedown(function(){
                isMousePressed = true;
            });
        $body
            .mouseup(function(){
                $('.highlight').toggleClass('highlight', false);
                isMousePressed = false;
            });

        $body
            .delegate('.word', 'mouseenter', function(){
                var $this = $(this);
                if(isMousePressed){
                    $this.toggleClass('highlight', !$this.hasClass('highlight'))
                }
            });

        function highlightAll() {
            data.sections.forEach(function(section){
                highlightSection(section)
            })
        }

        function highlightSection(section){
            section.phrases.forEach(function(phrase){
                highlightPhrase(phrase)
            })
        }

        function highlightPhrase(phrase){
            phrase.words.forEach(function(word){
                highlightWord(word)
            })
        }

        function highlightWord(word) {
            var $body = $('body');
            var originBounds = $('img')[0].getBoundingClientRect();

            var $highlight = $("<div></div>")
                .addClass('word')
                .css('left', (parseInt(word.left) + originBounds.left) +'px')
                .css('top', (parseInt(word.top) + Math.abs(originBounds.top)) +'px')
                .css('height', (parseInt(word.height)) +'px')
                .css('width', (parseInt(word.width)) +'px');

            $body.append($highlight)
        }

        return {
            highlightAll: highlightAll
        };
    }

})(reading);