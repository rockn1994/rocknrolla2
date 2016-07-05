var k = [];
$(document).ready(function(){
    $.getJSON("http://localhost:8081/todaypost", function(data){
        $( "#products" ).empty();            
        $.each(data.posts,function(i,posts){
            content = '<div class="col-md-4 portfolio-item">'
            content+=    '<a href='+posts.redirect_url+'>',
            content+=        '<img class="img-responsive" src='+posts.thumbnail.image_url+' height="300">',
            content+=    '</a>',
            content+=    '<h3>',
            content+=        '<a href='+posts.redirect_url+'>'+posts.name+'</a>',
            content+=    '</h3>',
            content+=    '<h3>',
            content+=        '<a href='+posts.discussion_url+'>Discussion link</a>',
            content+=    '</h3>',
            k = [];
            $.each(posts.makers,function(i,makers){
                
                k.push(makers.name);
            })
            content+=    '<p>Makers : '+k.join(" ,")+'</p>',
			content+= '</div>'
            $(content).appendTo("#products");
            	
            })
        });
});
/*<div class="col-md-4 portfolio-item">
                <a href=posts.redirect_url>
                    <img class="img-responsive" src=posts.thumbnail.image_url>
                </a>
                <h3>
                    <a href=posts.redirect_url>posts.name</a>
                </h3>
                <h3>
                    <a href=posts.discussion_url>Discussion link</a>
                </h3>
                <p>Makers : posts.makers.name.join(" ,")</p>
</div>
*/