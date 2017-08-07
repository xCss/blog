{% if page.comments %}
  <div class="comments" id="comments">

      {% if (theme.valine and theme.valine.enable)%}
        <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
        <script src='/lib/Valine.min.js'></script>
        <script>
            new Valine({
                av: AV,
                app_id: '{{ theme.valine.appId }}',
                app_key: '{{ theme.valine.appKey }}',
                el: '.comments' 
            });
        </script>
      {% endif %}
      
  </div>
{% endif %}
