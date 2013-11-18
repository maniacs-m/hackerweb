(function(t){
	TEMPLATES = {
		'comments-toggle': new t({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<button class=\"comments-toggle\">");t.b(t.v(t.f("comments_count",c,p,0)));t.b(" ");t.b(t.v(t.f("i_reply",c,p,0)));t.b("</button>");return t.fl(); },partials: {}, subs: {  }}),
		'comments': new t({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("comments",c,p,1),c,p,0,13,202,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<li><p class=\"metadata\"><b class=\"user\">");t.b(t.v(t.f("user",c,p,0)));t.b("</b> <time><a href=\"#\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"comment-permalink\">");t.b(t.v(t.f("time_ago",c,p,0)));t.b("</a></time></p><p>");t.b(t.t(t.f("content",c,p,0)));t.b("<ul>");t.b(t.rp("<comments_list0",c,p,""));t.b("</ul></li>");});c.pop();}return t.fl(); },partials: {"<comments_list0":{name:"comments_list", partials: {}, subs: {  }}}, subs: {  }}),
		'post-comments': new t({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"post-content\">");if(t.s(t.f("has_post",c,p,1),c,p,0,39,576,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<header><h1><a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" target=\"_blank\">");t.b(t.v(t.f("title",c,p,0)));t.b("<br>");if(t.s(t.f("user",c,p,1),c,p,0,107,170,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("domain",c,p,1),c,p,0,118,159,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"link-text\">");t.b(t.v(t.f("domain",c,p,0)));t.b("</span>");});c.pop();}});c.pop();}t.b("</a></h1><p class=\"metadata\">");if(t.s(t.f("user",c,p,1),c,p,0,217,411,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"inline-block\">");t.b(t.v(t.f("points",c,p,0)));t.b(" ");t.b(t.v(t.f("i_point",c,p,0)));t.b(" by ");t.b(t.v(t.f("user",c,p,0)));t.b("</span><span class=\"inline-block\">");t.b(t.v(t.f("time_ago",c,p,0)));if(t.s(t.f("comments_count",c,p,1),c,p,0,343,385,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" &middot; ");t.b(t.v(t.f("comments_count",c,p,0)));t.b(" ");t.b(t.v(t.f("i_comment",c,p,0)));});c.pop();}t.b("</span>");});c.pop();}if(!t.s(t.f("user",c,p,1),c,p,1,0,0,"")){t.b("<span class=\"inline-block\">");t.b(t.v(t.f("time_ago",c,p,0)));t.b("</span>");};t.b("<a href=\"");t.b(t.v(t.f("hn_url",c,p,0)));t.b("\" target=\"_blank\" class=\"external-link\">");t.b(t.v(t.f("short_hn_url",c,p,0)));t.b("</a></p></header>");});c.pop();}if(t.s(t.f("has_content",c,p,1),c,p,0,605,928,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<section class=\"grouped-tableview\">");t.b(t.t(t.f("content",c,p,0)));if(t.s(t.f("has_poll",c,p,1),c,p,0,666,905,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<ul class=\"poll\">");if(t.s(t.f("poll",c,p,1),c,p,0,692,891,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<li title=\"");t.b(t.v(t.f("percentage",c,p,0)));t.b("%\"><span class=\"poll-details\"><b>");t.b(t.v(t.f("item",c,p,0)));t.b("</b> <span class=\"points\">");t.b(t.v(t.f("points",c,p,0)));t.b(" ");t.b(t.v(t.f("i_point",c,p,0)));t.b("</span></span><div class=\"poll-bar\"><span style=\"width: ");t.b(t.v(t.f("width",c,p,0)));t.b("\"></span></div></li>");});c.pop();}t.b("</ul>");});c.pop();}t.b("</section>");});c.pop();}t.b("</div><section class=\"comments\">");if(t.s(t.f("loading",c,p,1),c,p,0,988,1058,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"loader\"><i class=\"icon-loading\"></i> Loading&hellip;</div>");});c.pop();}if(t.s(t.f("load_error",c,p,1),c,p,0,1085,1168,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"load-error\">Couldn't load comments.<br><button>Try again</button></div>");});c.pop();}if(!t.s(t.f("loading",c,p,1),c,p,1,0,0,"")){if(!t.s(t.f("load_error",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("has_comments",c,p,1),c,p,0,1227,1254,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<ul>");t.b(t.rp("<comments_list0",c,p,""));t.b("</ul>");});c.pop();}if(!t.s(t.f("has_comments",c,p,1),c,p,1,0,0,"")){t.b("<p class=\"no-comments\">No comments.</p>");};};};t.b("</section>");return t.fl(); },partials: {"<comments_list0":{name:"comments_list", partials: {}, subs: {  }}}, subs: {  }}),
		'post': new t({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li id=\"story-");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-index=\"");t.b(t.v(t.f("i",c,p,0)));t.b("\" class=\"post-");t.b(t.v(t.f("type",c,p,0)));t.b("\"><a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"");if(t.s(t.f("detail_disclosure",c,p,1),c,p,0,110,127,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("detail-disclosure");});c.pop();}if(t.s(t.f("disclosure",c,p,1),c,p,0,164,174,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("disclosure");});c.pop();}t.b(" ");if(t.s(t.f("selected",c,p,1),c,p,0,203,211,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("selected");});c.pop();}t.b("\"><div class=\"number\">");t.b(t.v(t.f("i",c,p,0)));t.b("</div><div class=\"story\"><b>");t.b(t.v(t.f("title",c,p,0)));t.b("</b>");if(t.s(t.f("user",c,p,1),c,p,0,301,592,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"metadata\">");if(t.s(t.f("domain",c,p,1),c,p,0,335,380,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"link-text\">");t.b(t.v(t.f("domain",c,p,0)));t.b("</span><br>");});c.pop();}t.b("<span class=\"inline-block\">");t.b(t.v(t.f("points",c,p,0)));t.b(" ");t.b(t.v(t.f("i_point",c,p,0)));t.b(" by ");t.b(t.v(t.f("user",c,p,0)));t.b("</span><span class=\"inline-block\">");t.b(t.v(t.f("time_ago",c,p,0)));if(t.s(t.f("comments_count",c,p,1),c,p,0,517,559,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" &middot; ");t.b(t.v(t.f("comments_count",c,p,0)));t.b(" ");t.b(t.v(t.f("i_comment",c,p,0)));});c.pop();}t.b("</span></span>");});c.pop();}if(!t.s(t.f("user",c,p,1),c,p,1,0,0,"")){t.b("<span class=\"metadata\">");if(t.s(t.f("domain",c,p,1),c,p,0,644,689,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"link-text\">");t.b(t.v(t.f("domain",c,p,0)));t.b("</span><br>");});c.pop();}t.b("<span class=\"inline-block\">");t.b(t.v(t.f("time_ago",c,p,0)));t.b("</span></span>");};t.b("</div></a>");if(t.s(t.f("detail_disclosure",c,p,1),c,p,0,794,868,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a href=\"#/item/");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"detail-disclosure-button\"><span></span></a>");});c.pop();}t.b("</li>");return t.fl(); },partials: {}, subs: {  }}),
		'stories-load': new t({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("loading",c,p,1),c,p,0,12,82,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"loader\"><i class=\"icon-loading\"></i> Loading&hellip;</div>");});c.pop();}if(t.s(t.f("load_error",c,p,1),c,p,0,109,161,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"load-error\">Couldn't load stories.</div>");});c.pop();}return t.fl(); },partials: {}, subs: {  }})
	}
})(Hogan.Template);