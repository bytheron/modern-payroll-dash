# Modern Payroll Dash
A payroll view for employees, including total earnings and a summarised view, presented in a detailed table view format. Using JSON mock data.

## Challenge
This repo acts as a coding assessment. The goal is to complete as much as possible within a 3 hour window.

## Design
As provided via the test provider, this is the design we will be implementing:

![alt text](design-mock.png)

## Code
This project is written using latest Angular (20.3.3 currently).
We can access the code directory from your code editor/IDE via using the terminal and executing: `cd ng-payroll`.

Once inside the code directory - we can look to the 2nd [README.md](./ng-payroll/README.md) file to get a better understanding of how to run this code locally etc.

# Post Coding Notes
## Time Limit

I very quickly realized that 3 hours is not nearly enough time to complete the full specs in the technical requirements. Perhaps, it's a good dose of humble pie to show me that I've been working in a box for far too long. I leveraged the power of AI tools to streamline the development of basic design layout elements and then used my skills in SCSS and CSS to fix where the AI got it wrong - but still didn't have enough time to polish.

## Code Implementation
I was able to get scaffolding and basic component structure down pretty quickly, but I had some interesting architecture questions of how I wanted some of the directories to work. I suppose, in hind sight, that took some time away from me.

I have many empty methods and didn't get the chance to finish the state management solution I wanted to introduce. I feel like I didn't really get an opportunity to showcase my skills with this complex requirements in such a small time frame.

As mentioned that I have 5 working days to return this assessment, however only limited to 3 hours of development, feels like I've been cheated of something I could have really enjoyed doing to its full extent.

If given more time, things I would focus on, would be:
- proper cleanup of the styling and layout
- make the screen responsive
- add more 'mock' data and functionality to empt methods and event handlers
- add a proper state management solution
- implement some basic unit tests with the built in Jasmine and Karma runners
- export the icons and images from the design into assets to be used properly in the application
- enable the search functionality to actually work properly
- add toggle ability to the user profile section

## AI Tools
I make use of Google's Gemini (2.5 Pro) - both as a chat bot and an agent, along with using it as my copilot. 

- I used it to break the design into components that I could quickly get boiler plaate code and then come back into and add my own flavour of coding to it.
- I use it to help fix strange reference errors (as I'm using latest Angular, I'm only familiar up to v19) - so, there's still things to learn about the latest version
- I used it to generate the 'mock' data provided in the design.

**Sidenote:** I only generate code that would take me time to produce, I can write it myself, but AI Tools just speed this process up for me.

## Summary of the entire assessment
- **Setup:** follow the readme instructions linked above.
- **Time spent:** 3 hours (as indicated by the assessment)
- **Challenges:** Not completing all I wanted to in the time frame
- **AI Tools:** Google Gemini to speed up progress
- **Feedback:** Given more time, this could have been a great opportunity to really show off my skills.
