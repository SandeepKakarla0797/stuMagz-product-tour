
(function() {
  var init, setupShepherd;

  init = function() {
    return setupShepherd();
  };
      
  setupShepherd = function() {

    var shepherd;
    shepherd = new Shepherd.Tour({
      defaults: {
        classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
      }
    });


    shepherd.addStep('one', {
      text: '<center><p><b>Welcome to</b></p><img src="gitamlogo.jpeg" style="border-radius:10px;margin:20px 0px 5px 0px;" height="100px" width="100px"></p><p><b>Gitam University</b></p><p>Followers 106</p><br></center>',
      classes: 'welcomebox shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
       {
          text: '<p style="width:80px;">Skip Tour</p>',
          classes: 'shepherd-button-example-primary skiptour',
          action: shepherd.cancel
        },
      {
          text: 'Take Tour',
          action: shepherd.next,
          classes: 'shepherd-button-secondary taketour buttoncolorright'
        }
      ]
    });
    shepherd.addStep('two', {

      text: '<center><p><h3><img src="d1.png">   My College</h3></p></center><p>Know the hot buzz in your college</p><center><p style="font-color:#444;"> at one place.</center></p>',
      attachTo: '.college bottom',
      showCancelLink: true,
      'tetherOptions':{
                'attachment':'top left',
                'targetAttachment':'bottom center',
                'offset':'-20px 0px'
            },
      buttons: [
         {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action: shepherd.next
        }
      ]
    });
      shepherd.addStep('three', {
      text: '<center><p><h3><img src="friend-request.png" height="25px" width="25px">   Follow</h3></p></center><p>Keep track of what’s going on </p><center><p style="font-color:#444;">in colleges around you.</center></p>',
      attachTo: '.following bottom',
      showCancelLink: true,
      'tetherOptions':{
                'attachment':'top left',
                'targetAttachment':'bottom center',
                'offset':'0px 0px'
            },
      buttons: [
      {
          text: '<',
          classes: 'shepherd-button-example-primary circle buttoncolorleft',
          action: shepherd.back
        },
         {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action: shepherd.next
        }
      ],
      when: {
      show: function() {
      $('.drp-mnu').hide();
        
      }
    }
    });
      shepherd.addStep('four', {
      classes:'shepherd-element shepherd-open shepherd-theme-arrows addcursor',
      text: 'Click on Create New',
      attachTo: '.create_new bottom',
      'tetherOptions':{
                'attachment':'top left',
                'targetAttachment':'bottom center',
                'offset':'0px 0px'
            },
      buttons: false,
    when: {
      show: function() {
                   
              triggerclick();

          }
    },
    advanceOn:{selector: '.create_new', event: 'click'} 
    });

      shepherd.addStep('createnewdropdown', {
      text: '<center><p><h1><img src="pencil.png"  height="25px" width="25px">   Create New</h1></p></center><p>Shout out your thoughts </p><center><p style="font-color:#444;">from the rooftops.</center></p>',
      attachTo: '.create_new bottom',
      showCancelLink: true,
      'tetherOptions':{
                'attachment':'middle left',
                'targetAttachment':'middle right',
                'offset':'0px -53px'
            },
      buttons: [
      {
          text: '<',
          classes: 'shepherd-button-example-primary circle buttoncolorleft',
           events:{ 
        'click': function() {
            return Shepherd.activeTour.show('three');
        }
        
      }

        },
         {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action:shepherd.next 
        }
      ],

    }
    );
     shepherd.addStep('five', {
      text: '<center><p><h1><img src="d1.png">  Board</h1></p><p>Find all the posts created by your friends at one place.</p><p>It also consists of events, projects and discussions.</p></center>',
      attachTo: '.board bottom',
      showCancelLink: true,
      'tetherOptions':{
                'attachment':'bottom left',
                'targetAttachment':'top center',
                'offset':'0px 270px'
            },  
      buttons: [
      {
          text: '<',
          classes: 'shepherd-button-example-primary circle buttoncolorleft',
          events:{ 
        'click': function() {
            return Shepherd.activeTour.show('four');
        }
        }
      },
         {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action: shepherd.next
        }
      ]
     ,
    when: {
      show: function() {
      $('.drp-mnu').hide();
        
      }
    }});
     shepherd.addStep('six', {
      showCancelLink: true,
      
      text: '<center><p><h3><img src="d1.png">   Network</h3></p></center><p>See who else is reading this </p><center><p style="font-color:#444;">and connect with them.</center></p>',
      attachTo: '.board bottom',
      'tetherOptions':{
                'attachment':'bottom left',
                'targetAttachment':'top center',
                'offset':'0px -165px'
            },
     
       
      buttons: [
      {
          text: '<',
          classes: 'shepherd-button-example-primary circle buttoncolorleft',
          action: shepherd.back
          },
         {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action: shepherd.next
        }
      ]
     
    });
     shepherd.addStep('seven', {
      showCancelLink: true,
      
      text: '<center><p><h3><img src="d1.png">   About</h3></p></center><p>Read all about </p><center><p style="font-color:#444;">the college.</center></p>',
      attachTo: '.board bottom',
      'tetherOptions':{
                'attachment':'bottom left',
                'targetAttachment':'top center',
                'offset':'0px -265px'
            },
     
       
      buttons: [
      {
          text: '<',
          classes: 'shepherd-button-example-primary circle buttoncolorleft',
          action: shepherd.back
        },
         {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action: shepherd.next
        }
      ]
     
    });
      shepherd.addStep('eight', {
      showCancelLink: true,
      
      text: '<center><p><h3><img src="folded-document-icon.png"  height="25px" width="25px">   My Feed</h3></p></center><p>Find out what’s hot in the colleges </p><center><p style="font-color:#444;">you follow.</center></p>',
      attachTo: '.feed bottom',
      'tetherOptions':{
                'attachment':'bottom left',
                'targetAttachment':'top center',
                'offset':'-20px 0px'
            },  
      buttons: [
      {
          text: '<',
          classes: 'shepherd-button-example-primary circle buttoncolorleft',
          action: shepherd.back
        },
         {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action: shepherd.next
        }
      ]
     
    });
      shepherd.addStep('nine', {
      showCancelLink: true,
      
      text: '<center><p><h3><img src="d1.png">   Search</h3></p></center><p>Look for colleges, students, stories </p><center><p style="font-color:#444;">and everything under the Sun.</center></p>',
      attachTo: '.search bottom',
      'tetherOptions':{
                'attachment':'bottom left',
                'targetAttachment':'top center',
                'offset':'-14px 0px'
            },  
      buttons: [
      {
          text: '<',
          classes: 'shepherd-button-example-primary circle buttoncolorleft',
          action: shepherd.back
        },
         {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action: shepherd.next
        }
      ]
     
    }); 
      shepherd.addStep('ten', {
      showCancelLink: true,
      
      text: '<center><p><h3><img src="d1.png">   Notifications</h3></p></center><p>Get notified when something </p><center><p style="font-color:#444;">new comes up</center></p>',
      attachTo: '.notifications bottom',
      'tetherOptions':{
                'attachment':'bottom left',
                'targetAttachment':'top center',
                'offset':'-14px 5px'
            },  
      buttons: [
      {
          text: '<',
          classes: 'shepherd-button-example-primary circle buttoncolorleft',
          action: shepherd.back
        },
         {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action: shepherd.next
        }
      ],
      when: {
      show: function() {
      $('.userdrop').hide();
        
      }
    }
     
    });
      shepherd.addStep('eleven', {
      text: 'Could you please click here?',
      classes:'shepherd-element shepherd-open shepherd-theme-arrows addcursor',
      attachTo: '.usermenu bottom',
      'tetherOptions':{
                'attachment':'bottom left',
                'targetAttachment':'top center',
                'offset':'0px 0px'
            },  
      buttons:false,
      when: {
      show: function() {
                   
              triggerclickuser();

          }
    },
      advanceOn:{selector: '.usermenu', event: 'click'},     
    });
      shepherd.addStep('userdropdown', {
      showCancelLink: true,
      text: '<center><p><h3><img src="d1.png">   Your profile</h3></p></center><p>For your creations,bookings and bio</p><center><p style="font-color:#444;"> you can always come here!</center></p>',
      attachTo: '.usermenu bottom',
      'tetherOptions':{
                'attachment':'middle right',
                'targetAttachment':'middle center circle',
                'offset':'-180px 170px'
            },  
      buttons: [
      {
          text: '<',
          classes: 'shepherd-button-example-primary circle buttoncolorleft',
          events:{ 
        'click': function() {
            return Shepherd.activeTour.show('ten');
        }
      } 
        },
        {
          text: '>',
          classes: 'shepherd-button-secondary circle buttoncolorright',
          action: shepherd.next
        }
      ],
      
     
    }); 
      shepherd.addStep('thirteen', {
      text: '<center><h1>Done</h1><img src="t2.png" height="100px" width="100px"  style="padding:15px;"><br>You are all set to go</center>',
      classes: 'endingbox shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      showCancelLink: true,
      buttons: [

        {
          text:'Retour',
          classes: 'shepherd-button-example-primary buttoncolorleft retour',
          events:{ 
        'click': function() {
            return Shepherd.activeTour.show('two');
        }
        }
      },
      {
          text: 'Done',
          classes: 'shepherd-button-secondary done buttoncolorright',
          action: shepherd.cancel
        }
      ],
      when: {
      show: function() {
      $('.userdrop').hide();
        
      }
    }
     
    });
    return shepherd.start();
  };

  $(init);

}).call(this);


