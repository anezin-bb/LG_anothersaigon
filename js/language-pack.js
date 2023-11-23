

	const Janguage = [{
		"key" : 'E',
		"data" : [{
				"section_name" : "login",
				"section_data" : [
					{
						"key" : 'title',
						"value" : "test"
					}
				]
			}]

	},{
		"key" : 'V',
		"data" : [{
				"section_name" : "LOGIN",
				"section_data" : [
					{
						"key" : 'title',
						"value" : "가나다라"
					}
				]
			}]

	}];
	 console.log(
		"Janguage",Janguage
	 );

	 function loadLanguage (k,t){
		switch(t){
			case "LOGIN" : 

				let title = "";
				let laData = Janguage.filter(f=> f.key === k);
				//let loginData = laData.data.filter(f=> f.section_name === t);
				
					console.log()
				$('#TITLE').html("aaaaa");
			break;
		}

	 }