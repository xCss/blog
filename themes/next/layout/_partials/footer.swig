<div class="copyright">
  <a href="{{ config.powered.aliyun }}" target="_blank">
    <img style="display:inline-block;" src="http://7xilig.com1.z0.glb.clouddn.com/aliyun.png" alt="">
  </a>
  <a href="{{ config.powered.qiniu }}" target="_blank">
    <img style="display:inline-block;" src="http://7xilig.com1.z0.glb.clouddn.com/qiniu.png" alt="">
  </a>
</div>
<div class="copyright" >
  {% set current = date(Date.now(), "YYYY") %}
  &copy; {% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
  <span itemprop="copyrightYear">{{ current }}</span>
  <span class="with-love">
    <i class="icon-next-heart fa fa-heart"></i>
  </span>
  <span class="author" itemprop="copyrightHolder">{{ config.author }}&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="http://www.miitbeian.gov.cn/" class="theme-link" target="_blank">{{ config.beian }}</a></span>&nbsp;&nbsp;|&nbsp;&nbsp;
  <span>Power By <a class="theme-link" href="http://hexo.io">Hexo</a> And <a class="theme-link" href="https://github.com/iissnan/hexo-theme-next"> NexT.{{ theme.scheme }} </a> </span>
</div>


{% block footer %}{% endblock %}
