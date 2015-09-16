

var bio = {
	"name" : "Isabella Murphy",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "203-999-9999",
		"email" : "isabella@gmail.com",
		"github" : "isatai23",
		"twitter" :"isatai23",
		"blog" : "http://www.CTChinese.org",
		"location" : "Connecticut"
	},
	
	"welcomeMessage": "Hello World! This is the welcome message bla bla bla bla bla bla bla bla bla!",
	"skills": ["programming", "database administration" , "desktop support", "research"],
	"biopic" : "./images/fry.jpg"

}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("footerContacts").append(formattedTwitter);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(formattedBlog);
	$("#footerContacts").append(formattedBlog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	if(bio.skills.length > 0 ) {
		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#header").append(formattedSkill);
		}
	}
	
}
bio.display();

var education = {
	"schools" : [
		{
			"name": "Taiwan University",
			"location": "Taipei, Taiwan",
			"degree": "BS",
			"majors": "Medical Technology",
			"dates": "1993-1997",
			"url": "http://www.ntu.edu.tw/english/"
		},
		{
			"name": "University of Connecticut",
			"location": "Storrs, CT",
			"degree": "MS",
			"majors": ["Biotechnology", "Computer Science and Engineering"],
			"dates": "1998-2005",
			"url": "https://www.uconn.edu/"
		}
	],
	"onlineCourse" : [
		{
			"title": "Javascript Fundation",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com"
		},
		{
			"title": "Software as a Service",
			"school": "EdX",
			"dates": "2014",
			"url": "https://www.edx.org/"
		}
	]
}

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedmajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedmajors);

		var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedURL);
	}
	if(education.onlineCourse.length > 0) {
		$("#education").append(HTMLonlineClasses);

		for(course in education.onlineCourse) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
			$(".education-entry:last").append(formattedTitle);

			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
			$(".education-entry:last").append(formattedSchool);

			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
			$(".education-entry:last").append(formattedonlineDates);

			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
}

education.display();

var work = {
	"jobs" : [
		{
			"employer": "Yale University",
			"title": "Programming Assistant",
			"location": "New Haven, CT",
			"dates": "July 2008 - present",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"employer": "Alexion Pharmaceutical",
			"title": "Research Associate",
			"location": "Chesire, CT",
			"dates": "May 2005 - January 2006",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]
}

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

var projects = {
	"projects" : [
		{
			"title": "Connecticut Chinese Culture Association Website",
			"dates": "2010 - present",
			"description": "Webmaster of CTChinese.org",
			"images" : ["./images/CCCA.jpg","https://s-media-cache-ak0.pinimg.com/736x/df/7b/6b/df7b6bf21d4a6fd43705367c37697a3a.jpg"]
		},
		{
			"title": "ChuanBau Chinese Language School Website",
			"dates": "2010 - 2012",
			"description": "Webmaster of ChuanBau Chinese Language School",
			"images": ["./images/fry.jpg","./images/fry.jpg"]
		}
	]
}

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}	
	}
}

projects.display();



function inName(name) {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0]+" "+ name[1];
}

$("#main").append(internationalizeButton);



$("#mapDiv").append(googleMap);



