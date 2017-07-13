var databaseTTS = [
	{
		"users": [
			{
				"id": "01",
				"firstname": "Sith",
				"lastname": "Lord",
				"avatar": "./img/manager_avatar.jpg",
				"role": "manager",
				"email": "sith@gmail.com",
				"pass": "123456789",
			},
			{
				"id": "02",
				"firstname": "Anakin",
				"lastname": "Skywalker",
				"avatar": "./img/avatar2.jpg",
				"role": "programmer",
				"email": "anakin@gmail.com",
				"pass": "123456789",
			},
			{
				"id": "03",
				"firstname": "Gandalf",
				"lastname": "the White",
				"avatar": "./img/manager_avatar2.jpg",
				"role": "manager",
				"email": "gendalf@gmail.com",
				"pass": "123456789",
			},
			{
				"id": "04",
				"firstname": "Frodo",
				"lastname": "Baggins",
				"avatar": "./img/avatar1.jpg",
				"role": "programmer",
				"email": "frodo@gmail.com",
				"pass": "123456789"
			}
		],
		"tasks": [
			{
				"id":"01tf",
				"title": "Clarify data",
				"subtasks": [
					{
						"title": "Size of images for gallery",
						"done": true
					},
					{
						"title": "Numbers of symbols in news preview",
						"done": true
					}
				],
				"project": "Paint shop",
				"receiver": "Gandalf the White",
				"creator": "Frodo Baggins",
				"progress": "100%"
			},
			{
				"id":"01tg",
				"title": "Find the ring",
				"subtasks": [
					{
						"title": "Find the ring",
						"done": true
					}
				],
				"project": "The fellowship of the ring",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"02tg",
				"title": "Meet Aragorn",
				"subtasks": [
					{
						"title": "Find the team",
						"done": true
					},
					{
						"title": "Hide from dark knight",
						"done": true
					},
					{
						"title": "Find the place to sleep",
						"done": true
					},
					{
						"title": "Get drunk",
						"done": true
					},
					{
						"title": "Put on the ring",
						"done": false
					}
				],
				"project": "The fellowship of the ring",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "80%"
			},
			{
				"id":"03tg",
				"title": "Fight with troll",
				"subtasks": [
					{
						"title": "Fight with troll",
						"done": false
					}
				],
				"project": "The fellowship of the ring",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "0%"
			},
			{
				"id":"04tg",
				"title": "Escape from gollum",

				"subtasks": [
					{
						"title": "Escape from gollum",
						"done": false
					}
				],
				"project": "The two towers",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "0%"
			},
			{
				"id":"05tg",
				"title": "Develop the homepage",
				"subtasks": [
					{
						"title": "Develop header",
						"done": true,
					},
					{
						"title": "Develop slider",
						"done": false,
					},
					{
						"title": "Develop content",
						"done": false,
					},
					{
						"title": "Develop footer",
						"done": false,
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "25%"
			},
			{
				"id":"06tg",
				"title": "Develop the productpage",
				"subtasks": [
					{
						"title": "Develop the productpage",
						"done": true
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"07tg",
				"title": "Develop the newspage",
				"subtasks": [
					{
						"title": "Develop the newspage",
						"done": true
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"08tg",
				"title": "Develop the aboutspage",
				"subtasks": [
					{
						"title": "Develop the aboutspage",
						"done": true
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"09tg",
				"title": "Develop the contactspage",
				"subtasks": [
					{
						"title": "Develop the contactspage",
						"done": false
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "0%"
			},
			{
				"id":"10tg",
				"title": "Develop the cabinetpage",
				"subtasks": [
					{
						"title": "Develop the cabinetpage",
						"done": true
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Gandalf the White",
				"progress": "100%"
			},
			{
				"id":"01ts",
				"title": "Come to the dark side",
				"subtasks": [
					{
						"title": "Smash young padawans",
						"done": true,
					},
					{
						"title": "Kill Obi-Van Kenobi",
						"done": true,
					},
					{
						"title": "Lose legs",
						"done": false,
					}
				],
				"project": "Dark Side",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "67%"
			},
			{
				"id":"02ts",
				"title": "Destroy some planet",
				"subtasks": [
					{
						"title": "Destroy some planet",
						"done": false
					}
				],
				"project": "Dark Side",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "0%"
			},
			{
				"id":"03ts",
				"title": "Make test server",
				"subtasks": [
					{
						"title": "Choose the CMS",
						"done": false
					},
					{
						"title": "Do the start settings",
						"done": false
					}
				],
				"project": "Paint shop",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "0%"
			},
			{
				"id":"04ts",
				"title": "Start programming the site",
				"subtasks": [
					{
						"title": "Make database",
						"done": true
					},
					{
						"title": "Make data for admin",
						"done": false
					},
					{
						"title": "Make data for client",
						"done": false
					},
					{
						"title": "Make data for content manager",
						"done": false
					},
					{
						"title": "Finish admin area for admin",
						"done": false
					},
					{
						"title": "Finish admin area for client",
						"done": false
					},
					{
						"title": "Finish admin area for content manager",
						"done": false
					},
					{
						"title": "Install all plagins",
						"done": false
					},
					{
						"title": "Make test site visible only for developers",
						"done": false
					},
					{
						"title": "Programm the home page",
						"done": false
					}
				],
				"project": "Paint shop",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "10%"
			},
			{
				"id":"05ts",
				"title": "Develop the authorisation pages",
				"subtasks": [
					{
						"title": "Develop the login page",
						"done": true
					},
					{
						"title": "Develop the forgetpass page",
						"done": true
					},
					{
						"title": "Develop the register page",
						"done": true
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Sith Lord",
				"progress": "100%"
			},
			{
				"id":"06ts",
				"title": "Develop the cabinet pages",
				"subtasks": [
					{
						"title": "Develop the account page",
						"done": true
					},
					{
						"title": "Develop the history page",
						"done": false
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Sith Lord",
				"progress": "50%"
			},
			{
				"id":"07ts",
				"title": "Meet with client",
				"subtasks": [
					{
						"title": "Meet with client",
						"done": false
					}
				],
				"project": "Paint shop",
				"receiver": "Frodo Baggins",
				"creator": "Sith Lord",
				"progress": "0%"
			},
			{
				"id":"08ts",
				"title": "Do something evil",
				"subtasks": [
					{
						"title": "Do something evil",
						"done": false
					}
				],
				"project": "Paint shop",
				"receiver": "Anakin Skywalker",
				"creator": "Gandalf the White",
				"progress": "0%"
			},
			{
				"id":"08ts",
				"title": "Make the army of clones",
				"subtasks": [
					{
						"title": "Make the army of clones",
						"done": false
					}
				],
				"project": "Dark Side",
				"receiver": "Anakin Skywalker",
				"creator": "Sith Lord",
				"progress": "0%"
			},
			{
				"id":"09ts",
				"title": "Kill the devil monster",
				"subtasks": [
					{
						"title": "Kill the devil monster",
						"done": false
					}
				],
				"project": "The fellowship of the ring",
				"receiver": "Gendalf the White",
				"creator": "Sith Lord",
				"progress": "0%"
			},
		],
		"contents": {
			"home": {
				"block1": {
					"page": "Home",
					"title": "Some numbers",
					"description": "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.",
					"items": [
						{
							"title": "1600",
							"text": "Happy clients"
						},
						{
							"title": "3200",
							"text": "Completed projects"
						},
						{
							"title": "40",
							"text": "Awards"
						},
						{
							"title": "20 000",
							"text": "Coffee drinks"
						}
					]
				},
				"block2": {
					"page": "Home",
					"title": "Possibilities",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla tempus dapibus. Mauris id risus non odio iaculis rutrum in sit amet urna. Ut porta justo ligula, sed volutpat mi porttitor a. Maecenas eget euismod purus. Maecenas fringilla blandit interdum. Praesent in lorem non ex accumsan finibus maximus hendrerit magna. Mauris auctor lacus ac sagittis elementum. Duis sed condimentum odio, commodo pretium dui. Maece iaculis interdum lacus lorem sit amet sapien.",
					"items": [
						{
							"icon":"a",
							"title": "Analise",
							"text": "Vivamus suscipit tortor eget felis porttitor volutpat. Cura bitur aliquet quam."
						},
						{
							"icon":"b",
							"title": "Preparing",
							"text": "Lorem Ipsum - это текст- рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов."
						},
						{
							"icon":"c",
							"title": "Working",
							"text": "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века."
						},
						{
							"icon":"d",
							"title": "Finalyse",
							"text": "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов."
						},
						{
							"icon":"e",
							"title": "Testing",
							"text": "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов."
						},
						{
							"icon":"f",
							"title": "Deliver",
							"text": "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов."
						}
					]
				},
			},
			"about": {
				"block1": {
					"page": "About",
					"title": "About us",
					"description": "Sed ut risus vestibulum, condimentum massa non, faucibus lorem. Nunc euismod et purus non tempus. Fusce fringilla, purus vitae consequat facilisis, risus tortor gravida nunc, at lacinia urna velit id leo. Mauris sit amet posuere justo. Suspendisse ac sodales neque. Proin nec ultrices enim. Mauris cursus pellentesque ex a condimentum. Phasellus nec tellus nisi. Nulla et bibendum arcu, et ultrices nisi. Morbi quis nibh in urna placerat ultricies non id dui. Phasellus nec varius lectus. Etiam ut suscipit tellus.",
					"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
				}
			},
			"whoweare":	{
				"block1": {
					"page": "Who we are",
					"title": "Who we are",
					"description": "Cras accumsan risus vitae mi molestie, sed volutpat turpis posuere. Duis vel nisi venenatis, ultricies tortor sed, malesuada felis. Etiam accumsan ex vel commodo euismod. Phasellus vitae pellentesque dui. Quisque risus orci, fermentum nec tortor id, maximus sagittis arcu. Vivamus ut quam lectus. Maecenas eu lacinia diam. Vivamus feugiat ultrices dui placerat porta. Integer finibus ante sapien, in gravida quam euismod non. Proin sed fringilla urna.",
					"items": [
						{
							'icon': 'g',
							'title': 'On time projects',
							'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
						},
						{
							'icon': 'h',
							'title': 'Professional experience',
							'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
						},
						{
							'icon': 'j',
							'title': 'Fully support',
							'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
						},
						{
							'icon': 'k',
							'title': 'Communicative team',
							'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
						}
					]
				},
			},
			"benefits": {
				"block1": {
					"page": "Benefits",
					"title": "Benefits",
					"description": "Praesent dictum blandit velit. Sed pharetra urna sed convallis laoreet. Suspendisse a orci vehicula, egestas elit a, egestas diam. Phasellus ut nibh quis justo aliquam tincidunt a ac nisi. Duis ultricies metus id congue dictum. Nunc tellus sapien, blandit at neque ut, varius scelerisque nisl. Maecenas tincidunt erat ac odio rutrum, ut sagittis arcu elementum. Curabitur pulvinar ultrices velit, quis egestas turpis eleifend molestie. Donec velit mi, placerat id mollis vehicula, lacinia in turpis. Praesent ultricies urna eu elit fermentum, sit amet convallis metus pulvinar.",
					"items": [
						{
							"icon":"a",
							"title": "Analise",
							"text": "Vivamus suscipit tortor eget felis porttitor volutpat. Cura bitur aliquet quam."
						},
						{
							"icon":"b",
							"title": "Preparing",
							"text": "Lorem Ipsum - это текст- рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов."
						},
						{
							"icon":"c",
							"title": "Working",
							"text": "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века."
						},
						{
							"icon":"d",
							"title": "Finalyse",
							"text": "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов."
						},
						{
							"icon":"e",
							"title": "Testing",
							"text": "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов."
						},
						{
							"icon":"f",
							"title": "Deliver",
							"text": "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов."
						}
					]
				},
			},
			"team": {
				"block1": {
					"page": "Team",
					"title": "Our team",
					"description": "Maecenas eget purus purus. Morbi consequat suscipit metus nec mollis. Cras non ante velit. Quisque pulvinar, est quis aliquet scelerisque, enim nibh semper risus, in mattis lorem ante sed felis. Praesent tempus, sem sit amet venenatis malesuada, tellus mauris auctor libero, at porta diam leo ut sapien. Curabitur in risus convallis, bibendum elit ac, sagittis ligula. Mauris ut elementum enim. Quisque vehicula leo neque, quis laoreet leo malesuada eu. Vestibulum eu nulla eget augue auctor efficitur vel id eros. Aliquam malesuada suscipit turpis nec interdum.",
					"items": [
						{
							"firstname": "Bumblebee",
							"lastname": "",
							"position": "CTO",
							"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
							"image": "./img/team/bumblebee.jpg"
						},
						{
							"firstname": "Alexandra",
							"lastname": "Daddario",
							"position": "HR",
							"description": "No comments..",
							"image": "./img/team/daddario.jpg"
						},
						{
							"firstname": "Deadpool",
							"lastname": "",
							"position": "Team lead",
							"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
							"image": "./img/team/deadpool.jpg"
						},
						{
							"firstname": "Terminator 2",
							"lastname": "",
							"position": "CEO",
							"description": "Cras ultricies ligula sed magna dictum porta. Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
							"image": "./img/team/terminator.jpg"
						},
						{
							"firstname": "Zack",
							"lastname": "Efron",
							"position": "Front-end",
							"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
							"image": "./img/team/efron.jpg"
						},
						{
							"firstname": "Michelangelo",
							"lastname": "",
							"position": "Pizza guy",
							"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
							"image": "./img/team/michelangelo.jpg"
						},
						{
							"firstname": "Rocket",
							"lastname": "Raccoon",
							"position": "Back-end",
							"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
							"image": "./img/team/rocket.jpg"
						},
						{
							"firstname": "Some",
							"lastname": "Strangers",
							"position": "Doing nothing",
							"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
							"image": "./img/team/some.jpg"
						},
						{
							"firstname": "Dart",
							"lastname": "Wader",
							"position": "System administrator",
							"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
							"image": "./img/team/wader.jpg"
						}
					]
				},
			},
			"contacts": {
				"block1": {
					"page": "Contacts",
					"title": "Where you can find us",
					"description": "Ut purus elit, accumsan eget lectus in, tristique feugiat nibh. Aliquam maximus leo a justo tristique, quis faucibus purus facilisis. Vivamus dictum, tortor vulputate aliquam faucibus, ante libero commodo enim, eget tempus metus sapien vitae ipsum. Nullam vel ante sed nunc semper vulputate id ut dui. Vivamus commodo, metus imperdiet fringilla gravida, ex nibh pellentesque erat, quis sodales risus arcu ac lectus. Fusce scelerisque volutpat nisi, eget ullamcorper mi vulputate vel.",
					"items": [
						{
							'icon': 'l',
							'title': 'Our adress',
							'text': 'Not home and not street'
						},
						{
							'icon': 'm',
							'title': 'Our email',
							'text': 'www.com'
						},
						{
							'icon': 'n',
							'title': 'Our phone',
							'text': '(0) 123-456-789-00'
						}
					]
				},
			}
		}
	}
]
var localUsers = JSON.parse(localStorage.getItem('databaseTTS'));
if (!localUsers) {
	localStorage.setItem('databaseTTS', JSON.stringify(databaseTTS));
}
