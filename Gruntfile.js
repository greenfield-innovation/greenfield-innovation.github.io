'use strict';
module.exports = function(grunt) {
    // builds in stages, using grunt and jekyll
    // 0 src
    //1  .tmp/1fat      //jekyll, fat dev build
    //2. .tmp/2inline   //inline, uncompressed
    //3  .tmp/3thin    //compress everything
    //4  _site         //final, blessed by jekyll 
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        'assets/js/plugins/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    less: {
      dist: {
        options: {
          compile: true,  // turn less into CSS
          compress: false
        },
        files: {
            'assets/css/main.css' : ['assets/less/main.less'],
            'assets/css/page.css' : ['assets/less/page.less'],
            'assets/css/examples.css': ['assets/examples/driven-by-data/styles/main.scss']
        }
      }
    },
    uglify: {
      dist: {
        options: {
          mangle: false,
          compress: false
        },
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/vendor/modernizr-2.8.3.js',
            'assets/js/vendor/jquery-1.11.3.min.js',
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ],
          'assets/examples/driven-by-data/scripts/main.min.js':
              [
                'assets/examples/driven-by-data/scripts/d3.min.js',
                'assets/examples/driven-by-data/data/yahooResponseStatic.js',
                'assets/examples/driven-by-data/data/SUB_INDUSTRY_MAP.js',
                'assets/examples/driven-by-data/data/FLARE_SECTOR_MAP.js',
                'assets/examples/driven-by-data/data/symbol2subindustry.js',
                'assets/examples/driven-by-data/data/holdings.js',
                'assets/examples/driven-by-data/scripts/main.js'
              ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          quiet: true,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '.tmp/1fat/images/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: '.tmp/1fat/images/'
        }]
      }
    },
    uncss: {
      dist: {
        options : {
          stylesheets  : ['../assets/css/source-sans-pro.css', '../assets/css/main.css'],
          timeout      : 10000,
          htmlroot     : '.',
          verbose      : false,
          report       : 'min'
        },
        files: {
          'assets/css/main.min.css': [
            '_includes/browser-upgrade.html',
            '_includes/disqus_comments.html',
            '_includes/footer.html',
            '_includes/uncss-ignore.html',
            '_includes/head.html',
            '_includes/navigation.html',
            '_layouts/*.html',
            'assets/**/*.md',
            '*.md'
          ]
        }
      }
    },
    inline: {
      dist: {
        expand: true,
        options: {
          tag: '',
          verbose: true,
          defer: true,
          async: true,
          uglify: false,
          cssmin: false,
          inlineTagAttributes: {
            js: 'defer',
            css: 'type="css/text"',
            style: 'type="css/text"'
          },
          exts: ['html', 'md']
        },
        files: [{
          expand: true,
          cwd:  '.',
          src: ['_includes/*.html', './*.md'],
          dest: '.tmp/1fat'
        },
        {
          expand: true,
          cwd:  'assets',
          src: ['**/*.md'],
          dest: '.tmp/1fat/assets/'
        }
        ]
      },
      dev: {
        expand: true,
        options: {
          verbose: false,
          defer: true,
          uglify: false,
          cssmin: false,
          exts: ['html', 'md']
        },
        files: [{
          expand: true,
          cwd:  '.',
          src: ['_includes/*.html', './*.md'],
          dest: '.tmp/1fat'
        },
        {
          expand: true,
          cwd:  'assets',
          src: ['**/*.md'],
          dest: '.tmp/1fat/assets/'
        }
        ]
      }
    },
    shell: {
      copy: {
        command: 'cp -Rv favicon* .tmp/3thin/; mkdir .tmp/3thin/assets; cp -Rv assets/fonts .tmp/3thin/assets/;'
      },
      jekyllBuild: {
        command: 'jekyll build --config _config-dev.yml -s .tmp/1fat -d .tmp/2inline'
      },
      jekyllBuildInline: {
        command: 'jekyll build --config _config-dev.yml'
      },
      jekyllServe: {
        command: 'jekyll serve --trace --config _config-dev.yml --skip-initial-build'
      },
      jekyllStop: {
        command: "killall jekyll || exit 0;"
      },
      fontsProtected: {
        command: "cat assets/css/page.css assets/css/examples.css assets/fonts/fontawesome-4.3-subset-b64.css assets/css/font-awesome-subset.css  >> assets/css/main.min.css"
      },
      gitCreds: {
        command: "cp -v CNAME  _site/ ; touch _site/.nojekyll"
        }
    },
    copyto: {
      exampleImages: {
        files: [
          {cwd: 'assets/examples/', src: ['**'], dest: '_site/examples/', expand: true}
        ],
        options: {
          processContent: function(content, path) {
            return content; // do something with content or return false to abort copy
          },
          ignore: [
            'assets/examples/**/*.md'
          ]
        }
      }
    },
    htmlmin: {
      dev: {
        cwd:  '.tmp/2inline',
        src: ['**/*.html'],
        dest: '.tmp/3thin',
        expand: true,
        options: {
          minifyCSS: false,
          minifyJS: false
        }
      },
      dist: {
        cwd:  '.tmp/2inline',
        src: ['**/*.html'],
        dest: '.tmp/3thin',
        expand: true,
        options: {
          removeComments: true,
          removeEmptyAttributes: true,
          collapseWhitespace: true,
          removeCommentsFromCDATA: true,
          minifyCSS: true,
          minifyJS: {
            sequences: true,
            dead_code: true,
            drop_debugger: true,
            conditionals: true,
            comparisons: true,
            booleans: true,
            loops:true,
            unused: false,
            if_return: true,
            join_vars: true,
            cascade: true,
            warnings: true,
            drop_console: true,
            keep_fargs: true
          }
        }
      }
    },
    'gh-pages': {
      options: {
        // Options for all targets go here.
      },
      'gh-pages': {
        options: {
          base: '_site',
          push: true
        },
        src: ['**'] // These files will get pushed to the `gh-pages` branch (the default).
      }
      //,
      //'fundwindr': {
      //  options: {
      //    add:  true, //do not wipe out branch, only add to it
      //    base: 'dest',
      //    branch: 'master',
      //    repo: 'https://example.com/other/repo.git'
      //  },
      //  // These files will get pushed to the `bar` branch.
      //  src: ['**']
      //}
    },
    
    watch: {
      configFiles: {
        files: [ 'Gruntfile.js', '_config.yml', 'package.json' ],
        options: {
          reload: true
        }
      },
      html: {
        files: ['**/*.html', '**/*.md']
      },
      less: {
        files: [
          'assets/less/*.less',
          'assets/examples/driven-by-data/styles/main.scss'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['uglify']
      }
    },
    clean: {
      dist: [
        '_site/*',
        '.tmp/*',
          '.grunt/grunt-gh-pages/*'
      ]
    }
  });

// Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-copy-to');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-gh-pages');

// Register tasks
  grunt.registerTask('buildify', [
    'clean',  
    'less',                   // compile less to CSS
    'uglify',                 // really just a concat
    'imagemin',               // lossless compression
    'uncss',                  // prune out unused CSS
    'shell:fontsProtected',   // workaround for UNCSS overpruning
    'inline:dist',            // place all resources inline in HTML. (images as base64)
    'shell:jekyllBuild',      // assemble markdown, _layouts, and _includes
    'htmlmin:dist',           // compress all HTML/CSS/JS
    'shell:copy',             // include favicon
    'shell:jekyllBuildInline',// rebuild pages with inlined, compressed templates 
    'copyto',      // include images in case of jekyll weirdness
    'shell:gitCreds'          // copy files needed for GitHub pages to serve site
  ]);

  grunt.registerTask('default', [
      'shell:jekyllStop',
      'buildify',
      'shell:jekyllServe',      // serve in development
      'watch'
    ]);
  
  /** PRODUCTION DEPLOYMENT **/
  grunt.registerTask('PROD', [
    'buildify',
    'gh-pages'
  ]);


  /** PRODUCTION ROLLBACK **/
  grunt.registerTask('ROLLBACK', [
    'shell: git checkout master~1',   //TODO: change this to branch~1 after first successful gh-pages push
    'ROLLBACK'
  ]);



};
