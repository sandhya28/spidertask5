$('.1').addClass("active");
func();
$('#episode').hide();
$('#movielisting').hide();
$('#moviecompare').hide();
$('#moviesearch').hide();
var dataforcompare = [];
$('#nice0').show();

function myFunction()
{
	$('#option').empty();
	var title = document.getElementById('search').value;
	var type = document.getElementById('searchtype').value;	
	var year = document.getElementById('searchyear').value;	

	type = type.toLowerCase();

	$.ajax
	({
		type :'GET',
		url : 'http://omdbapi.com/?s='+title,
		success : function(data)
		{	
			var eachdata = data.Search;
			var options = '';
			 	for (var i = 0; i < data.Search.length; i++) 
				{
					if((eachdata[i].Type==type||type=="")&&(year == eachdata[i].Year||year == ""))
					{
						var option = $('<option value=\"'+eachdata[i].Title+'\"></option>');
        				$('#option').append(option);
					}
				}
				
				 
		}

	});

}

function mysearch()
{
	var url;
	var i;

	var title = document.getElementById('search').value;
	var type = document.getElementById('searchtype').value;
	var season = document.getElementById('searchseason').value;
	var episode = document.getElementById('searchepisode').value;

	for(i = 0; i < 9; i++) 
	{
		if(title.indexOf('tt'+i) > -1)
		{
			url = 'http://omdbapi.com/?i=';
			break;
		}
		else
			url = 'http://omdbapi.com/?t=';
	}

	$.ajax
	({
		type : 'GET',
		url: url+title+'&type='+type+'&season='+season+'&episode='+episode,
		success : function(data)
		{
			$('#image').show();
			var HTML="";
			if(data.Response!='False')
			{
				 HTML +='<table><th>Property</th><th>Description</th><tr><td>'+'Type'+'</td><td>'+data['Type']+'</td></tr>';
			
				$('#nice').show();
	
				if(data.Poster!='N/A')
					$('#image').attr("src",data.Poster);
				else
					$('#image').hide();	
	
				for(var key in data)
				{	
					if (data[key]!='N/A' && key!='Response' && key !='Poster' && key!='Type')
					HTML += '<tr><td>'+key+'</td><td>'+data[key]+'</td></tr>';
				}
	
				HTML += '</table>';
				document.getElementById('nice').innerHTML = HTML;
			}
			else
			{
				$('#image').hide();
				document.getElementById('nice').innerHTML = "Enter a valid IMDb ID or Name of movie/series/episode";
			}

		}
	});
	
	if(title == '')
	{
		document.getElementById('nice').innerHTML = "Enter a valid IMDb ID or Name of movie/series/episode";
	}
}

$('.1').click(function()
{
	{
		$('#homepage').show();
		$('#movielisting').hide();
		$('#moviecompare').hide();
		$('#moviesearch').hide();
		$("ul").hide();
		$("ul").fadeIn(1000);
		$("a").removeClass("active");
		$(this).addClass("active");
		
	}
});

$('.2').click(function()
{
	{
		$('#homepage').hide();
		$('#movielisting').hide();
		$('#moviesearch').fadeIn(1000);
		$('#moviecompare').hide();
		$("ul").hide();
		$("ul").fadeIn(1000);
		$("a").removeClass("active");
		$(this).addClass("active");	
	}
});

$('.3').click(function()
{
	{
		$('#homepage').hide();
		$('#movielisting').hide();	
		$('#moviecompare').hide();
		$('#moviesearch').hide();
		$('#moviecompare').fadeIn(1000);
		$("ul").hide();
		$("ul").fadeIn(1000);
		$("a").removeClass("active");
		$(this).addClass("active");
	}
});

$('.4').click(function()	
{
	{
		$('#homepage').hide();
		$('#movielisting').fadeIn(1000);
		$('#moviecompare').hide();
		$('#moviesearch').hide();
		$("ul").hide();
		$("ul").fadeIn(1000);
		$("a").removeClass("active");
		$(this).addClass("active");
	}
});

function movie_search_suggestion1()
{
	$('#option').empty();
	var title = document.getElementById('searchmovie1').value;

	$.ajax
	({
		type :'GET',
		url : 'http://omdbapi.com/?s='+title,
		success : function(data)
		{	
			var eachdata = data.Search;
			var options = '';
			
			document.getElementById('nice1').innerHTML="";
 			
 			for (var i = 0; i < data.Search.length; i++) 
			{
				if(eachdata)
					{
						var option = $('<option value=\"'+eachdata[i].Title+'\"></option>');
        				$('#option').append(option);
					}
			}
				
				
			
		}

	});

}

function movie_search_suggestion2()
{
	$('#option').empty();
	var title = document.getElementById('searchmovie2').value;

	$.ajax
	({
		type :'GET',
		url : 'http://omdbapi.com/?s='+title,
		success : function(data)
		{	
			var eachdata = data.Search;
			var options = '';
			
			document.getElementById('nice1').innerHTML="";
 			
 			for (var i = 0; i < data.Search.length; i++) 
			{
				if(eachdata)
				{
					var option = $('<option value=\"'+eachdata[i].Title+'\"></option>');
        			$('#option').append(option);					
				}
			}
						
		}

	});

}

function mysearchcompare()
{
	var url1;
	var url2;
	var i;

	var title2 = document.getElementById('searchmovie1').value;
	var title1 = document.getElementById('searchmovie2').value;

	for(i = 0; i < 9; i++) 
	{
		if(title1.indexOf('tt'+i) > -1)
		{
			url1 = 'http://omdbapi.com/?i=';
			break;
		}
		else
			url1 = 'http://omdbapi.com/?t=';
	}

	for(i = 0; i < 9; i++) 
	{
		if(title2.indexOf('tt'+i) > -1)
		{
			url2 = 'http://omdbapi.com/?i=';
			break;
		}
		else
			url2 = 'http://omdbapi.com/?t=';
	}

	$.ajax
	({
		type : 'GET',
		url: url1+title1,
		success : function(data)
		{
			dataforcompare = data;
		}
	});

	$.ajax
	({
		type : 'GET',
		url: url2+title2,
		success : function(data)
		{
			document.getElementById('nice1').innerHTML ="";
			
			var HTML="";
			
			if(data.Response=='True'&&dataforcompare.Response=='True')
			{
				 HTML +='<table><th></th><th>'+data['Title']+'</th><th>'+dataforcompare['Title']+'</th>';
				 HTML+='<tr><td>'+'Type'+'</td><td>'+data['Type']+'</td><td>'+dataforcompare['Type']+'</td></tr>';
			
				$('#nice1').show();
			
				for(var key in data)
				{	
					if (key!='Response' && key !='Poster' && key!='Type'&&key!='Title')
					if(dataforcompare[key])
					HTML += '<tr><td>'+key+'</td><td>'+data[key]+'</td><td>'+dataforcompare[key]+'</td></tr>';
				}
			
				HTML += '</table>';
				document.getElementById('nice1').innerHTML = HTML;
			
				if(data.Poster!='N/A')
					$('#image1').attr("src",data.Poster);
				if(dataforcompare.Poster!='N/A')
					$('#image2').attr("src",dataforcompare.Poster);

			}
			else
			{
				document.getElementById('nice1').innerHTML = "Enter a valid IMDb ID or Name of movie/series/episode";
			}

		}
	});
}

function mysearchlisting()
{
	var title = document.getElementById('searchlist').value;
	var type = document.getElementById('searchtypelist').value;	
	
	type = type.toLowerCase();
	$.ajax
	({
		type :'GET',
		url : 'http://omdbapi.com/?s='+title,
		success : function(data)
		{	
			var eachdata = data.Search;
			var HTML = '<p id = "listing">TOP SEARCH LIST</p><table>';
			HTML += '<tr><th>NAME</th><th>TYPE/YEAR</th><th>IMDb ID</th></tr>';
			document.getElementById('nice2').innerHTML="";
 			 	for (var i = 0; i < data.Search.length; i++) 
				{
					if((eachdata[i].Type==type||type==""))
					{
						HTML += '<tr><td><a>'+eachdata[i].Title+'</a></td><td>'+eachdata[i].Type+'/'+eachdata[i].Year+'</td><td>'+eachdata[i].imdbID+'</td></tr>';
					}
				}
				
				HTML += '<table>';
				document.getElementById('nice2').innerHTML = HTML; 
		}

	});

}

function func()
{
	$('#nice0').show();

	var alp = "abcdefghijklmnopqrstuvwxyz";

	document.getElementById('nice0').innerHTML ="";

	for (var i = 0; i < 4; i++) 
	{

		var a = Math.floor(Math.random() * 26);
		var b = Math.floor(Math.random() * 26);
		var title = alp[a]+alp[b]+' ';
	
		$.ajax
		({
			type : 'GET',
			url: "http://omdbapi.com/?t="+title,
			success : function(data)
			{
				var HTML="";
		
				if(data.Poster!='N/A')
				HTML = '<img class = "homeimg" src=\''+data.Poster+'\'>';

				document.getElementById('nice0').innerHTML += HTML;
			
			}
		
		});

	}
	
}

function episodeverify()
{
	var type = document.getElementById('searchtype').value;	
	type.toLowerCase();
	
	if(type == "episodes"||type=="episode")
	{
		$('#episode').show();
	}	
	else
		$('#episode').hide();
}
