(function(win,doc){
    var title = doc.title;
    var hidden = 'hidden' in doc ? 'hidden' : 
                 'webkitHidden' in doc ? 'webKitHidden' :
                 'mozHidden' in doc ? 'mozHidden' :
                 null;
    var state = 'visibilityState' in doc ? 'visibilityState' :
                'webkitVisibilityState' in doc ? 'webkitVisibilityState' :
                'mozVisibilityState' in doc ? 'mozVisibilityState' :
                null;
    if(!!hidden && !!state){
        var stateChangeEvent = hidden.replace(/hidden/i,'visibilitychange');
        doc.addEventListener(stateChangeEvent,function(event){
            doc.title = doc[hidden] ? "(☯_☯)我藏起来了哦~ | " + title : title;
        },false);
    }
})(window,document);