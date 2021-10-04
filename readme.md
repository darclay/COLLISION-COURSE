  -------------------- APP TITLE ----------------------

App Title: Collision Course

  ------------------ APP DESCRIPTON -------------------

App Description: The app shows the user near earth collision objects of the day and gives the user the ability to select a date to see the near earth collision objects for that day.
    The output will include for the day: 
        -DATE
        -HOW MANY OBJECTS PASSED BY TODAY ___.
        -the name of the object
        -the size of the object
        -the speed of the object 
        -and the distance from earth
    Other items I would like to add:
        -explanation of the name of the object (i.e 138893 (2000 YH66)")
        -info based on size (such as a size comparison): array
        -info based on distance (similar to above?): array

  ----------------------- API LINK -----------------------

API LINK: https://api.nasa.gov/neo/rest/v1/feed?start_date=${date format YEAR-MN-DY}&end_date=?{date format YEAR-MN-DY}&api_key=${PERSONAL KEY GOES HERE}

WEBSITE LINK: https://api.nasa.gov/

  ----------------------- API SAMPLE ---------------------

    SAMPLE API RESPONSE:
    "links": {
    "next": "http://www.neowsapp.com/rest/v1/feed?start_date=2021-10-02&end_date=2021-10-02&detailed=false&api_key=0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX",
    "prev": "http://www.neowsapp.com/rest/v1/feed?start_date=2021-09-30&end_date=2021-09-30&detailed=false&api_key=0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX",
    "self": "http://www.neowsapp.com/rest/v1/feed?start_date=2021-10-01&end_date=2021-10-01&detailed=false&api_key=0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX"
  },
  "element_count": 8,
  "near_earth_objects": {
    "2021-10-01": [
      {
        "links": {
          "self": "http://www.neowsapp.com/rest/v1/neo/2138893?api_key=0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX"
        },
        "id": "2138893",
        "neo_reference_id": "2138893",
        "name": "138893 (2000 YH66)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2138893",
        "absolute_magnitude_h": 18.06,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.6494638409,
            "estimated_diameter_max": 1.4522452972
          },
          "meters": {
            "estimated_diameter_min": 649.4638409061,
            "estimated_diameter_max": 1452.2452971941
          },
          "miles": {
            "estimated_diameter_min": 0.4035579963,
            "estimated_diameter_max": 0.9023831126
          },
          "feet": {
            "estimated_diameter_min": 2130.7869477982,
            "estimated_diameter_max": 4764.5844608461
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2021-10-01",
            "close_approach_date_full": "2021-Oct-01 21:58",
            "epoch_date_close_approach": 1633125480000,
            "relative_velocity": {
              "kilometers_per_second": "17.1713264417",
              "kilometers_per_hour": "61816.775190017",
              "miles_per_hour": "38410.5401173748"
            },
            "miss_distance": {
              "astronomical": "0.4326045077",
              "lunar": "168.2831534953",
              "kilometers": "64716712.904318599",
              "miles": "40213100.6924867062"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },

  ---------------------- WIREFRAME ---------------------

LINK: https://www.figma.com/file/lThOe2g8CX1vbsLWeCfuiM/NEAR-EARTH-OBJECT-APPLICATION?node-id=4%3A2

  ---------- MVP: (MINIMUM VIABLE PRODUCT) --------------

1. The project is deployed on Github Pages
2. The application renders in the browser and runs without errors
3. The repo has a README that documents the project

  --------------------- POST-MVP ------------------------

1. LOOKING UP HISTORICAL DATA - PRIOR DATES
2. META DATA - LINKING TO NASA'S SITE FOR ADD. INFO
3. COMPARISONS - COMPARING THE SIZE TO OBJECTS
4. 

   ----------------------- GOALS --------------------------

DAY 1: FRI
Build the plan for the project and connect with github.  Chose the correct path for my API. Wrote the readme.md.  Start the wireframe.
today, yesterday, blockers, if I might need help with anything

DAY 2: MON
Finish the timelines for the project plan.
Complete the wireframe.
Write the Pseudo Code.
Set up the HTML.
Get my API to connect.

DAY 3: TUES
Complete all JS code.

DAY 4: WED
Finish JS code.
Complete all Styling

DAY 5: THURS
Bug fixes.

DAY 6: FRI
Present to the Group.

  ---------------------- TIMEFRAMES ----------------------

| EVENT                  | PRIORITY | ESTIMATED | ACTUAL  |
|                        |          | HOURS     | HOURS   |
|------------------------|----------|-----------|---------|
|FIGMA DESIGN            |     H    |     3     |    3    |
|PSEUDO CODE             |     H    |    .5     |   .5    |
|FETCH THE API JS        |     H    |     3     |         |
|CREATE HTML BASE        |     H    |     1     |    1    |
|CSS STYLING /FLEX       |     M    |     6     |         |
|RESPONSIVE DESIGN       |     H    |     6     |         |
|EVENT LISTENERS JS      |     H    |     3     |         |
|LOCATE DOM ELEM.        |     H    |     3     |         |
|ADD DOM ELEM. INNERTEXT |     H    |     3     |         | 
|------------------------|----------|-----------|---------|

------------------ TECHNICAL DEMONSTATION -----------------

1. OVERVIEW OF PROJECT
2. RESPONSIVE DESIGN EXAMPLES (SHOW IN DEV TOOLS)
2. 1-2 FEATURES IN THE CODE
3. WHAT I AM MOST PROUD OF
4. WHAT FUTURE WORK I WISH TO COMPLETE

------------------- HELP AND SUPPORT ----------------------

1. GIVE YOUR INSTRUCTOR AT LEAST 10 MIN NOTICE
2. PROVIDE A LINK TO THE REPO OF YOUR PROJECT
3. PROVIDE A LINK TO YOUR --ISSUE TICKET-- TEMPLATE IN FILE
4. 



