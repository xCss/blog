<div class="copyright">
  {% set current = date(Date.now(), "YYYY") %}
  &copy; &nbsp; <span class="serif">{% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
  {{ current }}</span>
  <span class="with-love">
    <i class="icon-heart"></i>
  </span>
  <span class="author">{{ config.author }}</span>
</div>

<div class="powered-by">
  {{ __('footer.powered', '<a class="theme-link" href="http://hexo.io">Hexo</a>') }}
</div>

<div class="theme-info">
  {{ __('footer.theme') }} 
  <a class="theme-link" href="https://github.com/iissnan/hexo-theme-next">
    Next
  </a>.
</div>

{% block footer %}{% endblock %}
