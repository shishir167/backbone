module.exports = function(grunt) {

  /*
   * https://github.com/gruntjs/grunt/wikgtungrunt -dir
   ggrunt grunti/Configuring-tasks
   */
  grunt.initConfig({

    "handlebars": {
      compile: {
        options: {
          amd: true
        },
        src: ["Templates/templates/*.handlebars"],
        dest: "Templates/precompiled.handlebars.js"
      }
    }

  });

  // Requires the needed plugin
  grunt.loadNpmTasks('grunt-contrib-handlebars');
};