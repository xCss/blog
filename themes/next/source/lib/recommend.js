var recommend = [{
    title:'全民云计算',
    img:'people.jpg',
    url:'https://s.click.taobao.com/t?e=m%3D2%26s%3DmQWwKGb7ZBgcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAsva%2FJTUoHO92pw5J%2Fu62vGkE4L1JHEqowFtU2GAvyCBX5yowlHFXuaXu1KhWXdflRVF%2BG%2F2LD3qKIUZKvQyk4%2FkxFiXT%2FI5kdv2ej9RFznDI7hRLPtBsnnfiZ1OxkhRwDBkcElHipW7P37PZ5d3Efk3VTMPr8ftLkWbo0ZyKcLixiXvDf8DaRs%3D'
},{
    title:'全民云计算',
    img:'people.jpg',
    url:'https://s.click.taobao.com/t?e=m%3D2%26s%3DmQWwKGb7ZBgcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAsva%2FJTUoHO92pw5J%2Fu62vGkE4L1JHEqowFtU2GAvyCBX5yowlHFXuaXu1KhWXdflRVF%2BG%2F2LD3qKIUZKvQyk4%2FkxFiXT%2FI5kdv2ej9RFznDI7hRLPtBsnnfiZ1OxkhRwDBkcElHipW7P37PZ5d3Efk3VTMPr8ftLkWbo0ZyKcLixiXvDf8DaRs%3D'
},{
	title:'高性能服务器，就选阿里云',
	img:'high-performance.jpg',
	url:'https://s.click.taobao.com/t?e=m%3D2%26s%3Dcb3N8fnK3UwcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAstq6MLh4nrMYgJvwW%2F2QnSkE4L1JHEqowFtU2GAvyCBX5yowlHFXuaXu1KhWXdflRVF%2BG%2F2LD3qKIUZKvQyk4%2FkxFiXT%2FI5kdv2ej9RFznDI7hRLPtBsnnfiZ1OxkhRwDBkcElHipW7P37PZ5d3EfkhhwnYyXLnHpDoUWJTlJsdRZujRnIpwuLGJe8N%2FwNpGw%3D%3D'
},{
	title:'学生特惠云服务器',
	img:'student.jpg',
	url:'https://s.click.taobao.com/t?e=m%3D2%26s%3DdFjVCK5JwK8cQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAstq6MLh4nrMZB6jP54PqB%2BkE4L1JHEqowFtU2GAvyCBX5yowlHFXuaXu1KhWXdflRVF%2BG%2F2LD3qKIUZKvQyk4%2FkxFiXT%2FI5kdv2ej9RFznDI7hRLPtBsnnfiZ1OxkhRwDBkcElHipW7oVEPwGLBv10I8N6H4TM8K0Wbo0ZyKcLixiXvDf8DaRs%3D'
},{
    title:'新客户无门槛领取总价值高达2775元代金券，每种代金券限量500张，先到先得。',
    img:'tx-ticket.jpg',
    url:'https://cloud.tencent.com/redirect.php?redirect=1025&cps_key=7facb411fb6ab10a34bb4a99665ac802'
},{
    title:'腾讯云云服务器新购特惠，最低2折起，1核1G3年仅794.73元，即0.73元/日。',
    img:'tx-new.jpg',
    url:'https://cloud.tencent.com/redirect.php?redirect=1010&cps_key=7facb411fb6ab10a34bb4a99665ac802'
},{
    title:'腾讯云云服务器新购特惠，最低2折起，1核1G3年仅794.73元，即0.73元/日。',
    img:'tx-new.jpg',
    url:'https://cloud.tencent.com/redirect.php?redirect=1010&cps_key=7facb411fb6ab10a34bb4a99665ac802'
},{
    title:'腾讯云服务器安全可靠高性能，多种配置供您选择',
    img:'tx-buy.jpg',
    url:'https://cloud.tencent.com/redirect.php?redirect=1001&cps_key=7facb411fb6ab10a34bb4a99665ac802'
}];

(function(){
    setTimeout(function(){
        var custom = document.querySelector('.custom-recommend');
        if(custom){
            var rand = Math.floor(Math.random()*7);
            var tag = recommend[rand];
            var a = document.createElement('a');
            var img = document.createElement('img');
            img.setAttribute('style','width:100%;');
            img.setAttribute('class','nofancybox');
            img.setAttribute('src','/images/recommend/'+tag.img);
            img.setAttribute('alt',tag.title);
            a.appendChild(img);
            a.setAttribute('title',tag.title);
            a.setAttribute('target','_blank');
            a.setAttribute('href',tag.url);
            custom.appendChild(a);
        }
    })
})();