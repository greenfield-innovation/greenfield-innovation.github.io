'use strict';
module.exports = function(grunt) {
  // Build File for a GitHub Pages Organization Page
  // builds in stages, using grunt and jekyll

  var jekyllConditionalWrapOpen  = /\{\% if[^}]+\%\}/;
  var jekyllConditionalWrapClose = /\{\%[^}]+endif \%\}/;
  var jekyllConditionalWrapPair  = [jekyllConditionalWrapOpen, jekyllConditionalWrapClose];
  var inProduction               = true;

  grunt.initConfig( {
    pkg:      grunt.file.readJSON( 'package.json' ),
    jshint:   {
      options: {
        jshintrc: '.jshintrc'
      },
      all:     [
        'Gruntfile.js',
        'assets/js/*.js',
        'assets/js/plugins/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    less:     {
      dist: {
        options: {
          compile:  true,  // turn less into CSS
          compress: false
        },
        files:   {
          'assets/css/main.css':     ['.src/assets/less/main.less'],
          'assets/css/page.css':     ['.src/assets/less/page.less'],
          'assets/css/examples.css': ['.src/assets/less/examples.less'],
          'assets/css/treemap.css':  ['.src/assets/examples/driven-by-data/styles/main.scss']
        }
      }
    },
    uglify:   {
      dist: {
        options: {
          mangle:   false,
          compress: false
        },
        files:   {
          'assets/js/scripts.min.js':                           [
            '.src/assets/js/vendor/modernizr-2.8.3.js',
            '.src/assets/js/vendor/jquery-1.11.3.min.js',
            '.src/assets/js/plugins/*.js',
            '.src/assets/js/_*.js'
          ],
          'assets/examples/driven-by-data/scripts/main.min.js': [
            '.src/assets/examples/driven-by-data/scripts/d3.min.js',
            '.src/assets/examples/driven-by-data/data/yahooResponseStatic.js',
            '.src/assets/examples/driven-by-data/data/SUB_INDUSTRY_MAP.js',
            '.src/assets/examples/driven-by-data/data/FLARE_SECTOR_MAP.js',
            '.src/assets/examples/driven-by-data/data/symbol2subindustry.js',
            '.src/assets/examples/driven-by-data/data/holdings.js',
            '.src/assets/examples/driven-by-data/scripts/main.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          quiet:             true,
          progressive:       true
        },
        files:   [{
          expand: true,
          cwd:    '.src/images/',
          src:    '{,*/}*.{png,jpg,jpeg}',
          dest:   'images/'
        }]
      }
    },
    uncss:    {
      dist: {
        src:  [
          '.src/_includes/browser-upgrade.html',
          '.src/_includes/disqus_comments.html',
          '.src/_includes/footer.html',
          '.src/_includes/uncss-ignore.html',
          '.src/_includes/head.html',
          '.src/_includes/navigation.html',
          '.src/_layouts/*.html',
          '.src/assets/*.md',
          '.src/assets/**/*.md',
          '.src/*.md'
        ],
        dest: 'assets/css/main.UN.css'
      }
    },
    inline:   {
      example:  {
        expand:  true,
        options: {
          tag:     '__inline=true',
          verbose: false,
          defer:   true,
          async:   true,
          uglify:  inProduction,
          cssmin:  inProduction,
          exts:    ['md']
        },
        cwd:     '.src',
        src:     ['assets/examples/**/*.md'],
        dest:    './'
      },
      example2: {
        expand:  true,
        options: {
          tag:     '__inline=true',
          verbose: false,
          defer:   true,
          async:   true,
          uglify:  inProduction,
          cssmin:  inProduction,
          exts:    ['md2']
        },
        cwd:     '.src',
        src:     ['.examples.md2'],
        dest:    './'
      },
      dist:     {
        expand:  true,
        options: {
          tag:     '',
          verbose: false,
          defer:   true,
          async:   true,
          uglify:  inProduction,
          cssmin:  inProduction,
          exts:    ['html', 'md']
        },
        cwd:     '.src',
        src:     ['*.md', '_includes/*.html'],
        dest:    './'
      }
    },

    shell:   {
      copyLayouts:    {
        command: 'cp -Rv .src/_layouts .;'
      },
      moveExamples:   {
        command: 'mv -v ./.examples.md2 ./examples.md'
      },
      jekyllServe:    {
        command: 'jekyll serve --safe --trace -w --config _config-dev.yml'
      },
      jekyllStop:     {
        command: "killall jekyll || exit 0;"
      },
      fontsProtected: {
        command: "cat .src/assets/js/plugins/responsive-nav.css assets/css/main.UN.css assets/css/page.css assets/css/examples.css assets/css/treemap.css .src/assets/fonts/fontawesome-4.3-subset-b64.css .src/assets/fonts/font-awesome-subset.css  > assets/css/main.css"
      },
      copyExamples:   {
        command: 'mkdir assets assets/docs assets/examples assets/examples/css assets/js ;cp -vR .src/assets/examples/** assets/examples/'
      },
      setPermissions: {
        command: 'chmod -vR +x assets images'
      }
    },
    copyto:  {
      exampleImages: {
        files:   [
          {
            cwd:    '.src/assets/examples/',
            src:    ['**/*.png'],
            dest:   'assets/examples/',
            expand: true
          },
          {
            src: ['.src/assets/docs/*.*'],
            dest: 'assets/docs/'
          },
          {
            cwd: '',
            src: '.src/robots.txt',
            dest: '_site/robots.txt'
          }
        ],
        options: {
          processContent: function (content, path) {
            return content; // do something with content or return false to abort copy
          },
          ignore:         [
            '**/*.md'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        cwd:     '.',
        src:     ['_includes/*.html', '_layouts/*.html'], //no dest: change-in-place
        expand:  true,
        options: {
          removeComments:          true,
          removeEmptyAttributes:   false,
          collapseWhitespace:      true,
          removeCommentsFromCDATA: true,
          removeIgnored:           false,
          customAttrSurround:      [jekyllConditionalWrapPair],
          minifyCSS:               false,
          minifyJS:                (inProduction ? {
            sequences:     true,
            dead_code:     true,
            drop_debugger: true,
            conditionals:  true,
            comparisons:   true,
            booleans:      true,
            loops:         true,
            unused:        false,
            if_return:     true,
            join_vars:     true,
            cascade:       true,
            warnings:      true,
            drop_console:  true,
            keep_fargs:    true
          } : false)
        }
      }
    },

    watch: {
      configFiles: {
        files:   ['Gruntfile.js', '_config.yml', 'package.json'],
        options: {
          reload: true
        }
      },
      html:        {
        files: ['.src/**/*.html', '.src/**/*.md'],
        tasks: ['inline', 'htmlmin']
      },
      less:        {
        files: [
          '.src/assets/less/*.less',
          '.src/assets/examples/driven-by-data/styles/main.scss'
        ],
        tasks: ['less', 'shell:fontsProtected', 'inline', 'htmlmin']
      },
      css: {
        files: ['.src/assets/js/plugins/ononsive-nav.css'],
        tasks: ['shell:fontsProtected']
      },
      js:          {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['inline', 'htmlmin']
      }
    },
    clean: {
      dist: [
        '*.md',
        '_site/**',
        '_includes/*',
        '_layouts/*',
        'assets/**',
        'images/*',
        'examples/**'
      ]
    }

  } );

// Load tasks
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-shell' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-htmlmin' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-copy-to' );
  grunt.loadNpmTasks( 'grunt-uncss' );
  grunt.loadNpmTasks( 'grunt-inline' );
  grunt.loadNpmTasks( 'grunt-contrib-imagemin' );

// Register tasks
  grunt.registerTask( 'buildify', [
    'clean',
    'shell:copyExamples',
    'less',                     // compile less to CSS
    'uglify',                   // really just a concat
    'imagemin',                 // lossless compression
    'uncss',                    // prune out unused CSS
    'shell:fontsProtected',     // workaround for UNCSS overpruning
    'inline:dist',              // place all resources inline in HTML. (images as base64)
    'inline:example',           // place selective resources inline in Markdown. (images as base64)
    'inline:example2',          // place resources inline (.md2 extension to hide from jekyll)
    'shell:moveExamples',
    'shell:copyLayouts',        // get layouts ready for htmlmin
    'htmlmin:dist',             // compress all HTML/CSS/JS
    'copyto'                    // include images for below-the-fold loading
  ] );

  grunt.registerTask( 'default', [
    'shell:jekyllStop',
    'buildify',
    'shell:jekyllServe'      // serve in development
  ] );

  /** PRODUCTION DEPLOYMENT **/
  grunt.registerTask( 'PROD', [
    'buildify'
  ] );

  /** PRODUCTION ROLLBACK **/
  grunt.registerTask( 'ROLLBACK', [
    'shell: git checkout master~1',   //TODO: change this to branch~1 after first successful gh-pages push
    'ROLLBACK'
  ] );

};
