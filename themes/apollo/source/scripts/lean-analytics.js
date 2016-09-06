

window.onload = function(){
    function $(selector){
        return document.querySelectorAll(selector);
    }
    function showTime(Counter) {
        var query = new AV.Query(Counter);
        var entries = [];
        var $visitors = $(".leancloud-visitors");

        for(var i in $visitors){
            var temp = $visitors[i];
            entries.push( temp.id );
        }

        query.containedIn('url', entries);
        query.find()
            .done(function (results) {

                if (results.length === 0) {
                    for(var i in $visitors){
                        var temp = $visitors[i];
                        temp.innerHTML = 0 + '°';
                    }
                    return;
                }

                for (var i = 0; i < results.length; i++) {
                    var item = results[i];
                    var url = item.get('url');
                    var time = item.get('time');
                    var element = document.getElementById(url);

                    element.innerHTML = time + '°';
                }
                for(var i = 0; i < entries.length; i++) {
                    var url = entries[i];
                    var element = document.getElementById(url);
                    if( element.innerHTML == '') {
                        element.innerHTML = '0°';
                    }
                }
            })
            .fail(function (object, error) {
                console.log("Error: " + error.code + " " + error.message);
            });
    }

    function addCount(Counter) {
        var $visitors = $(".leancloud-visitors")[0];
        var url = $visitors.id;
        var title = $visitors.getAttribute('title');
        var query = new AV.Query(Counter);

        query.equalTo("url", url);
        query.find({
            success: function(results) {
                if (results.length > 0) {
                    var counter = results[0];
                    counter.fetchWhenSave(true);
                    counter.increment("time");
                    counter.save(null, {
                        success: function(counter) {
                            document.getElementById(url).innerHTML = counter.get('time') + '°';
                        },
                        error: function(counter, error) {
                            console.log('Failed to save Visitor num, with error message: ' + error.message);
                        }
                    });
                } else {
                    var newcounter = new Counter();
                    /* Set ACL */
                    var acl = new AV.ACL();
                    acl.setPublicReadAccess(true);
                    acl.setPublicWriteAccess(true);
                    newcounter.setACL(acl);
                    /* End Set ACL */
                    newcounter.set("title", title);
                    newcounter.set("url", url);
                    newcounter.set("time", 1);
                    newcounter.save(null, {
                    success: function(newcounter) {
                    document.getElementById(url).innerHTML = newcounter.get('time') + '°';
                    },
                    error: function(newcounter, error) {
                    console.log('Failed to create');
                    }
                    });
                }
            },
            error: function(error) {
                console.log('Error:' + error.code + " " + error.message);
            }
        });
    }
    setTimeout(function(){
        if(!/^http:\/\/localhost/.test(location.href)){
            var Counter = AV.Object.extend("Counter");
            if($('.leancloud-visitors').length == 0) return; 
            if ($('.leancloud-visitors').length == 1) {
                addCount(Counter);
            } else if ($('.post-title-link').length > 1) {
                showTime(Counter);
            }
        }
    },0);
}