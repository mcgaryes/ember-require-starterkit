### Overview

This starterkit aims to provide a simple starterkit for EmberJS applications. The layout is intentially left bare, with only three out of the box block level elements: `header`, `content` and `footer`. The following is a list of functionality included:

1. Directory Structure
	* The starterkit provides a base directory structure in which you should follow. Of course this will vary depending on the type of application that you are developing.
2. RequireJS AMD Implementation
	* The starterkit provides a basic jumping off point for AMD implementation. You should read up on RequireJS if you are not familiar with AMD (specifically RequireJS).
3. Jasmine Unit Test Scaffold
	* Unit testing is important with large scale applications. With this is mind the startkit provides a basic template that should get you started.
4. SASS Integration
5. Grunt Build/Watch Scripts
	* Run the grunt script to move specific files to a `www` directory.
6. JSHint implementation

### Prerequisites

1. Basic knowledge of Grunt, SASS, Require, Express, YUI and Ember.
2. Node, NPM, Grunt and PhantomJS are installed globally on your machine.

### Installation

Installation is pretty straightforward. If you run the following steps you should be up an running in a couple of minutes.

1. Clone the repository
	<pre>
	$ git clone https://github.com/mcgaryes/ember-starterkit.git
	$ cd STARTERKIT_DIRECTORY
	$ rm -r .git
	</pre>
2. Install NPM module dependencies
	<pre>
	$ cd STARTERKIT_DIRECTORY/build
	$ npm install
	$ cd ../source
	$ npm install
	</pre>
3. Startup SASS Grunt watch
	<pre>
	$ cd STARTERKIT_DIRECTORY/build
	$ grunt watch
	</pre>
4. Start developing
