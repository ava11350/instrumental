 /**
         *
         * General Functionality
         *
         */
  var previousContainer;

  // Event Listener for profile button
  userButtons = document.querySelectorAll("#userButton");
  userButtons.forEach(element => {
      element.addEventListener("click", function(e) {
          previousContainer = e.originalTarget;
          while(previousContainer.className != "container justify-content-center"){
              previousContainer = previousContainer.parentElement;
          }
          previousContainer.style="display:none;";
          document.getElementById("pageUser").style="";
      });
  })

  // Event Listener for back button
  backButtons = document.querySelectorAll("#backButton")
  backButtons.forEach(element => {
      element.addEventListener("click", function(e) {
          ourContainer = e.originalTarget;
          while(ourContainer.className != "container justify-content-center"){
              ourContainer = ourContainer.parentElement;
          }
          ourContainer.style="display:none;"
          previousContainer.style="";
      });
  })
  

  /**
   * 
   * Login Screen
   * 
   */

  // Event Listener for login functionality
  document.getElementById("login").addEventListener("click", function(e) {
      if(document.getElementById("username").value == "admin"){
          if(document.getElementById("password").value == "password"){
              document.getElementById("pageLogin").style = "display:none;";
              document.getElementById("pageSplash").style = "";
          }else{
              document.getElementById("username").value = ""
              document.getElementById("password").value = ""
          }
      }else{
          document.getElementById("username").value = ""
          document.getElementById("password").value = ""
      }
  });

  /**
   * 
   * Splash Screen
   * 
   */

  // Event Listener for borrower functionality
  document.getElementById("borrower").addEventListener("click", function(e) {
      previousContainer = document.getElementById("pageSplash");
      document.getElementById("pageSplash").style = "display:none;";
      document.getElementById('pageBorrower').style = "";
  });

  // Event Listener for lender functionality
  document.getElementById("lender").addEventListener("click", function(e) {
      previousContainer = document.getElementById("pageSplash");
      document.getElementById("pageSplash").style = "display:none;";
      document.getElementById("pageLender").style = "";
  });

  // Event Listener for chat history
  chatButtons = document.querySelectorAll("#chatButton");
  chatButtons.forEach(element => {
      element.addEventListener("click", function(e) {
          previousContainer = e.originalTarget;
          while(previousContainer.className != "container justify-content-center"){
              previousContainer = previousContainer.parentElement;
          }
          previousContainer.style="display:none;";
          document.getElementById("pageChatHistory").style="";
      });
  });


  /**
   *
   * User Profile Screen
   *
   */

  // Event Listener for save button
  document.getElementById("saveButton").addEventListener("click", function(e) {
      // This would update user's profile data
      ourRow = e.originalTarget;
      if(ourRow.localName == "span"){
          ourRow = ourRow.parentNode;
      }
      ourRow.style="background-color:green;"
      setTimeout(() => {
          ourRow.style="background-color:gray;";
          ourRow.parentNode.querySelector("#backButton").click();
      }, 600);
      console.log("User data 'saved'");
      console.log("Low-key user data is currently not implenented :)")
  });

  document.getElementById("backButtonLend").addEventListener("click", function(e) {
      document.getElementById("pageLender").style = "display:none;";
      document.getElementById("pageSplash").style = "";
  });



  /**
   *
   * Borrower Screen
   *
   */
   document.getElementById("backButtonBorrow").addEventListener("click", function(e) {
      document.getElementById("pageBorrower").style = "display:none;";
      document.getElementById("pageSplash").style = "";
  });

  /**document.getElementById("profileButton").addEventListener("click", function(e) {
      document.getElementById("pageBorrower").style = "display:none;";
      document.getElementById("pageListingProfile").style = "";
  });*/

  /**document.getElementById("chatHistoryButton").addEventListener("click", function(e) {
      document.getElementById("pageBorrower").style = "display:none;";
      document.getElementById("pageChatHistory").style = "";
  });*/

  mapButtons = document.querySelectorAll("#mapButton");
  mapButtons.forEach(element => {
      element.addEventListener("click", function(e) {
          document.getElementById("pageBorrower").style = "display:none;";
          document.getElementById("pageMap").style = "";
      });
  });

  listButtons = document.querySelectorAll("#listButton");
  listButtons.forEach(element => {
      element.addEventListener("click", function(e) {
          document.getElementById("pageMap").style = "display:none;";
          document.getElementById("pageBorrower").style = "";
      });
  });

  document.getElementById("filterButtonBorrow").addEventListener("click", function(e) {
      document.getElementById("pageBorrower").style = "display:none;";
      document.getElementById("pageFilter").style = "";
  });


   /**
   *
   * Listing Profile Screen (Randaldo)
   *
   */

  messageButtons = document.querySelectorAll("#messageNow");
  messageButtons.forEach(element => {
      element.addEventListener("click", function(e) {
          previousContainer = e.originalTarget;
          while(previousContainer.className != "container justify-content-center"){
              previousContainer = previousContainer.parentElement;
          }
          previousContainer.style="display:none;";
          document.getElementById("pageChat").style = "";
      });
  });


  /**
   *
   * Chat Screen (Randaldo)
   *
   */

   document.getElementById("backToChatHistory").addEventListener("click", function(e) {
      document.getElementById("pageChat").style = "display:none;";
      document.getElementById("pageChatHistory").style = "";
  });


  /**
   *
   * Chat History Screen (Randaldo)
   *
   */

   document.getElementById("historyRonaldoChat").addEventListener("click", function(e) {
      document.getElementById("pageChatHistory").style = "display:none;";
      document.getElementById("pageChat").style = "";
  });

  document.getElementById("backButtonChat").addEventListener("click", function(e) {
      document.getElementById("pageChatHistory").style = "display:none;";
      previousContainer.style = "";

  });



  /**
   * 
   * Map Screen 
   * 
   */
  function myMap() {
      var mapProp= {
          center:new google.maps.LatLng(36.126693,-115.180642),
          zoom:10,
      };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }


  document.getElementById("backButtonMap").addEventListener("click", function(e) {
      document.getElementById("pageMap").style = "display:none;";
      document.getElementById("pageSplash").style = "";
  });

  /**
   * 
   * Individual listings
   * 
   */
  document.getElementById("sitar").addEventListener("click", function(e) {
      document.getElementById("pageBorrower").style = "display:none;";
      document.getElementById("sitarinfo").style = "";
  });

  document.getElementById("pearlDrumset").addEventListener("click", function(e) {
      document.getElementById("pageBorrower").style = "display:none;";
      document.getElementById("druminfo").style = "";
  });

  document.getElementById("grandPiano").addEventListener("click", function(e) {
      document.getElementById("pageBorrower").style = "display:none;";
      document.getElementById("pianoinfo").style = "";
  });

  document.getElementById("clarinet").addEventListener("click", function(e) {
      document.getElementById("pageBorrower").style = "display:none;";
      document.getElementById("clarinetinfo").style = "";
  });

  document.getElementById("orangeAmp").addEventListener("click", function(e) {
      document.getElementById("pageBorrower").style = "display:none;";
      document.getElementById("ampinfo").style = "";
  });

  instrButtons = document.querySelectorAll("#backButtonInstr");
  instrButtons.forEach(element => {
      element.addEventListener("click", function(e) {
          previousContainer = e.originalTarget;
          while(previousContainer.className != "container justify-content-center"){
              previousContainer = previousContainer.parentElement;
          }
          previousContainer.style="display:none;";
          document.getElementById("pageBorrower").style="";
      });
  })


  /**
   * 
   * Search filter
   * 
   */
  document.getElementById("backButtonf").addEventListener("click", function(e) {
      document.getElementById("pageFilter").style = "display:none;";
      document.getElementById("pageBorrower").style = "";
  });

  document.getElementById("saveFilterButton").addEventListener("click", function(e) {
      document.getElementById("pageFilter").style = "display:none;";
      document.getElementById("pageBorrower").style = "";
  });	


  /**
   * 
   * Lender Screen
   * 
   */
  document.getElementById("addInstruments").addEventListener("click", function(e) {
      document.getElementById("pageLender").style = "display:none;";
      document.getElementById("pageAdd").style = "";
  });


  /**
   * 
   * Add instrument
   * 
   */
  document.getElementById("backButtona").addEventListener("click", function(e) {
      document.getElementById("pageLender").style = "";
      document.getElementById("pageAdd").style = "display:none;";
  });

  document.getElementById("saveFilterButtona").addEventListener("click", function(e) {
      document.getElementById("pageLender").style = "";
      document.getElementById("pageAdd").style = "display:none;";
  });
  
