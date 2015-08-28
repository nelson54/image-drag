var reading = reading || {};

(function(reading, Page){

    reading.Book = function(pageData){
        var pages = [];
        var page = 0;

        pageData.forEach(function(page){
            pages[page.page_number] = new Page(page);
        });

        function goTo(n){
            page = n;
        }

        function getPage(){
            return pages[page];
        }

        return {
            goTo: goTo,
            getPage: getPage
        };
    };

})(reading, reading.Page);