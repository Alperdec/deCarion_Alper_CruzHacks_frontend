Author: Alper deCarion
Date: 05/07/2021



This project is an application portal for CruzHacks built using React.js
and is implemented as a SPA(single-page-application) with conditional rendering.

Included in this main directory is a directory titled "frontend" which contains the entire application

To reach the source code please navigate to the directory titled "src" within the frontend directory.
There you can find "INDEX.JS/CSS, APP.JS/CSS and "components".
Index.js is responsible for rendering App.js component. App.css contains all the styling.
App.js renders two components: Application.js and Announcements.js
Announcements is responsible for rendering the announcements page and Application handles
the application form, form validation, and submitting of the form. To do this it calls on three 
components in the "components" directory: "Hackers.js, Volunteers.js, and General.js".
As intuition may tell you each is responsible for it's own part of the form.
i.e. hackers handles hacker information, volunteers handles volunteers' information, and general
is responsible for general information.



To use, one may navigate to the root of the "frontend" directory and type into their console:
npm start. If this is not preferrable one may also type: "serve -s build" and that
will host a static production build of the application.

If one chooses npm start, the application should be hosted at localhost:3000 (if 3000 is free)
If one chooses serve -s build, it should be hosted at localhost:5000

Upon submission of the application, the information is routed to firestore backend via
the REST api built for the backend challenge. To verify that your information went through correctly
or instead to view the test cases used:

One must use either Postman or type into their browser (as it functions as a get request):
GET "https://us-central1-alperdec-backend.cloudfunctions.net/api/(the_email_used_here)"

	---"the_email_used_here" functions as an id for the document in question. If one used: "abcd@gmail.com" as their email
		to view type "https:// ... /api/abcd@gmail.com
	and this will return a single application

or alternatively to veiw all applicants:
GET "https://us-central1-alperdec-backend.cloudfunctions.net/api"

if one also would like to view all hackers or all volunteers one may type:

GET "https://us-central1-alperdec-backend.cloudfunctions.net/api/general/applicants/hackers"
GET "https://us-central1-alperdec-backend.cloudfunctions.net/api/general/applicants/volunteers"

respectively.
As it stands right now there are a couple place-holder applicants in the database.

All information returned will be in JSON format.

CONCLUSION:
I built the engineering challenge with responsiveness and modularity in mind, while also 
using the technology stack that is in use at CruzHacks. Building the application itself did
not prove to be too difficult however in retrospect I feel as though I could refactor
much code to make it cleaner and easier to read while also reusing the components built
from further refactoring. When it comes to css however I struggled to format and design
the application to make it purely responsive and provide a great user experience on
a multitude of devices. This is an area for me with room for much growth but I am confident
that with time and more practice it will surely become a struggle of the past.

Regardless of the outcome of my application to be a volunteer, I learned a lot with
these challenges and actually had a good deal of fun putting it together.
Thank you so much for the opportunity, and I hope to hear back soon.

Enjoy! :)

--Alper