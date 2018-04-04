# Resume Project
* Alex Marhefka
* 4/4/2018
* [Github Repo link](https://github.com/amarhefka/project_resume_marhefka_alex)
* [Web Host link](http://squidproquo.co/project_resume_marhefka_alex/)
* [W3C Validator link](https://validator.w3.org/unicorn/check?ucn_uri=squidproquo.co%2Fproject_resume_marhefka_alex%2F&ucn_task=conformance#validate-by-uri+task_conformance)
* [HTML5 Outliner link](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fsquidproquo.co%2Fproject_resume_marhefka_alex%2F)

## Resources
* [HTML5 Outliner](https://gsnedders.html5.org/outliner/)
  * I used this to verify the integrity of the page's new HTML5 structure.
* [W3Schools](https://www.w3schools.com/)
  * I used this to refresh my memory of the syntax for various CSS properties.
* [jQuery-fullsizeable](http://mschmidt.github.io/jquery-fullsizable/)
  * I used this plugin to allow the user to get a full-screen view of my profile picture.
* [jQuery.scrolling](https://darkseal.github.io/jquery.scrolling/)
  * I used this plugin to make the articles appear as the user scrolls.

## Deductions
I reviewed the list of deductions for this assignment and in the syllabus.

## Comments
There's an error in the Unicorn validator regarding a stray <script> tag after </body>, but it's not actually present in my HTML file. The error seems to be related to my web host, as I don't receive it when I validate my index.html via file upload.

Note that I had to use a slightly older version of jQuery (2.2.4) because the jQuery.scrolling plugin wasn't working with the most recent version.

The custom jQuery I wrote for this project is at the end of the main.js file (on lines 14–17). It allows the user to click on the subheadings/tabs (e.g., Education) to expand or collapse that section.
