---
title: The Effective Engineer - By Edmond Lau
slug: "/blog/book/effective-eng"
date: 2020-08-17
tags:
  - Book Notes
  - Engineering
---
> Time is our most finite asset, and leverage - the value we produce per unit time - allows us to direct our time towards what matters most.

## Summary
This is one of those books that I plan to come back to whenever I feel stuck or unsure of how to approach work and improve my product and team. It is interspersed with nuggets of wisdow and the abundance of examples make it a really fun read.
This book was recommended to me by my CTO and I now understand how these simple ideas can scale to a multi-billion dollar company like Gojek while still being relevant to my day to day work. Highly recommended.


## My Notes
The goal of an Engineer:

- To ship the most value in the least effort and amount of time
- To do the above regularly and in a sustainable way

Successful engineers ignore the bureaucracy that values low leverage tasks and identify the 1/2 things that make the most business impact.

Good Questions to ask about your product

- Is my product successful?
- If not, what are the 1 or 2 things that will make it so.

Always ask why before how → ~~how~~  why should we do it?

Instead of trying to solve the impossible problems, try to question the assumptions and work around the problems. 

Engineering is much more about leverage than programming ability

Leverage is the yardstick for measuring effectiveness

Leverage = Impact Produced/Time Invested.   → ROI

Similarly, use the Pareto Principle, what 20% of work produces 80% of impact

Questions to ask to increase leverage:

- How can I complete this activity in a shorter amount of time?
- How can I increase value produced by this activity?
- Is there something else that would produce more value?

Adopt a growth Mindset

Things don’t get fixed on their own, no one is born good at anything, you need to learn and improve to get the things you want.

Similarly, while learning new technologies or managing people, expect that you’ll suck at it in the beginning but things will get better once you actively learn and improve.

One advice that I really like and have been trying to incorporate is

> Own your story

Decide what you want out of life and go after it. it is you who will make your life.

If you don’t know what you want, others will tell you what you want. Own your story and don’t let others define it.

Start with the basics → This will help in compounding the rate of learning, you with learn things much faster once you have the basics in place

Recursion → trees and graphs → compilers and network topologies

Choosing a cushy and well paying job, lowers your learning rate (by choosing easier things to work on) which you pay with missing long-term compounding. You get complacent and stall.

Treat yourself like a startup, initially prioritize learning over profitability

Improve by only 1% per day.

**Seek work environments conducive to learning**

- Fast Growth
    - Companies with high growth have a lot of problems and few resources, so there are many high leverage opportunities to make impact and take responsibility of
    - Low growth → politics, stagnation and squabbling over limited opportunities
    - Questions to ask
        - What is the rate of growth of business (metrics)
        - Will the things that you work on be high priorities with enough support from company to grow
        - What has been the hiring rate?
        - How quickly have the strongest team members grown into positions of leadership
- Training
    - The company focuses on training for employees, which means that they prioritize professional growth
    - Questions to ask
        - Is there a program for onboarding new engineers?
        - Is there formal or informal mentorship?
        - Has the company taken steps to ensure that engineers learn and grow?
        - What new things have team members learned recently?
- Openness
    - Everyone is encouraged to ask questions
    - Feedback and info is shared
    - Questions to ask
        - Are team priorities shared and public?
        - Are there retros to reflect on feature launches and product changes
        - How is knowledge documented and shared
- Pace
    - Quick iterations
    - Fewer bureaucratic barriers to getting things done
    - Does the company experiment
    - Questions to ask?
        - How long does it take from an idea to launch approval
        - %time on development vs maintenance
- People
    - Choose the people you want to work with, try to work with people more creative, talented and smarter than you
    - Questions
        - Are there skills that they can teach me?
        - Is there teamwork and cooperation?
- Autonomy
    - A wide range of projects with less mentoring vs specialised projects with more mentoring and coaching
    - Questions
        - Do people have autonomy on what and how to work on
        - How often do individuals switch teams or projects
        - Do engineers have say in product direction?

Invest ~20% of your time at work on side projects or improving the company.

Make investments that make you more effective in the long run - make it a habit to work on side projects.

Tips:

- Study code written by engineers you admire: try to think of how you would implement it
- Write code: it is a craft that you have to work at to improve, reading will not help much
- Use talks and tech docs
- Get feedback from harshest critics (code reviews, design docs)
- Work on a diversity of projects - to pick up new skills
- Make sure you work with people from whom you can learn things
- Jump fearlessly into code you don’t know

Always be learning

Read books, learn new programming languages, attend conferences, build and maintain relationships

Always be working on side projects

Prioritise regularly

You need to prioritize often to always pick the tasks with the most leverage

Heuristics for prioritization:

- Focus on what directly produces value
    - Shipping is of the highest priority
    - At the end of the day what matters is how much value you created - products shipped, users acquired
    - Meetings, slack conversations, reports indirectly create less value but take up a lot of time
    - When you get the important things right, the small things don’t matter
    - **Make sure the effort you invest is proportional to its expected Impact**
- Focus on important and non-urgent tasks

    We let life’s daily interruptions, rather than our priorities, dictate our schedules - Avoid interruptions

    Often the things that are urgent are not important, i.e. they are not investments that increase effectiveness in the future.

    ![priority-matrix.jpeg](priority-matrix.jpeg)

    Quadrant 2 tasks don’t have a deadline and therefore don’t get prioritised because of urgency, but in the long run provide significance

    This is what tim urban talks about in his talk, the monkey mind and procrastination

    Mark all tasks in to-do list from 1-4 (based on the quadrants). This can be useful in identifying things that are important and not urgent

    Spending too much time in Quadrant 1 might mean that you are simply addressing the symptoms and not the underlying cause.

Automate processes to remove avoidable errors - checklists

Brain is meant for processing data, not storing it: write down all the things that need to be done in a list

A useful to-do list has 2 qualities

- It is accessible and exhaustive - you should trust the list to have all the items you need to do

To prioritise items:

- estimate the % impact on the growth metrics for each item
- Estimate the time it will take to implement

The above will not give you perfect order, but can be used to regularly course correct and work on the highest leverage tasks

**Maker’s Schedule**

To gain flow we need more contiguous block of time to work. 

At all costs avoid interruptions:

- Schedule necessary meetings back-to-back

Limit amount of work in progress

- It’s hard to build momentum with many things in WIP
- As a team, if many things are in progress, the people lose context for design decisions and code reviews

Fight Procrastination

- Deliberately plan when and how you will do the task
- To come over the initial reluctance (activation energy), decide to do something only for 5 minutes

Build a routine around prioritization so that you frequently look at what is important with the changing requirements and new knowledge

## Execution

Reduce the feedback loop times to make faster decisions(that can be quickly corrected), test out ideas quicker and course correct.

Smaller releases enable quicker debugging in case of issues, and CD enables to quickly deploy the fix

The fast you iterate the more you learn about what works and what doesn’t.

*If you don’t break anything, you’re probably not moving fast enough*

Feature flags are a good design strategy to implement CD with in progress features

Invest in iteration speed:

- Automated testing
    - Testing frameworks
    - Monitoring - comprehensive dashboards and alerts to verify the system is working properly and roll back changes in the event that some bad code had been released

Shaving off seconds and minutes from repititive daily tasks can have a huge ROI in the long term.

Write as many tools as you can for repititive tasks

Reduce time spent in daily tasks

- Compilation time
- Interactive languages (REPL)
- Faster tests

Making the onboarding smooth for a tool to be integrated in existing workflows is a worthwhile investment.

Making debugging workflows quicker by building tools is a much better investment than just spending the same time on debugging every iteration

Optimise Non-Engineering Bottlenecks

- Not just in code, but try to identify the biggest bottlenecks and figure out how to eliminate them.

Bottleneck of dependency on other people - while it is easy to attribute delays and incomplete work to laziness or incompetence, it is more often due to misalignment of priorities.

Communication is critical for making progress on people-related bottlenecks. Ask for frequent updates and commitments in daily stand-ups

**Projects usually fail because of under-communication**

Use informal meetings to solicit early and frequent feedback, its usually a mistake to wait until significant effort has been invested

Plan ahead for bottlenecks like project approval, security testing and feature requirements

Measure what you want to Improve

Google optimizes for user happiness “a sense of delight” in google search, but to improve on it, it needs to measure it first.

It does this by measuring the long-click rate - how many users click a search result and don’t come back to the search page i.e. they found what they were searching for

A prerequisite to deciding good metrics is to gather a lot of data which lets form insights and connections across behaviours.

The power of well-chosen metrics, it’s ability to tackle a wide range of problems and Google’s reliance on metrics played a key role in ensuring search quality and growing market share

How do you know that a feature that you shipped improves user experience, traction or actually solves the problem that it was built for? 

**Good metrics**

1. Help you focus on the right goals (North Star)
2. Act as regression tests on the system
3. Performance ratcheting - Drive progress (doesn’t let system deteriorate ate with changes)
4. Measure effectiveness over time ( change in metric/effort)

Picking the right metric incentivizes the behavior you want

- Measuring productivity per week instead of hours worked
- 95th Percentile vs Average response times.
- Bugs outstanding vs bugs fixed - measuring outstanding bugs prevents the incentive to be less rigorous while building new features
- Total number of users vs weekly growth rate - tracking weekly growth helps focus on sustainable growth and continuous improvement

Choose metrics that 

- Maximize impact - the core metric that leads the team to make the greatest and most sustainable impact
- Are actionable - metric that are directly affected by the team’s work, should avoid vanity metrics that can be affected by other reasons (press coverage for e.g.)
- Are responsive yet robust - the metric should give quick feedback on the changes, yet be robust to high variances (1 minute rates, 1 hour rates for e.g.)

For long term goals it is good to have a few core metrics (should avoid measuring a lot of things)

On the other hand for the short term, we should measure and instrument as much as possible. This helps gain insights into the systems we have build and help us reason about improving the long term core metrics.

Be skeptical about the data and the way it is interpreted (people interpret it in different ways). Try to align the metric with you intuition or come to the same conclusion using a different metric

### Validate Ideas early and often

As with everything, iterate quickly and get faster feedback on your ideas and direction.

Always be customer focused → fail fast, take feedback

Demystify the riskiest areas and the areas with the most unknowns to avoid surprises that might invalidate your efforts later

Use MVPs to focus on high-leverage activities that can validate hypotheses about users

A/B testing allows to gain quicker feedback on minor changes and validation of ideas and experiments

Avoid working in 1 person Teams

- No one else has context on what you’re working, so it is hard to get feedback
- The lows of a project can be demoralizing when working alone
- The Highs can be less motivating too

Ideas to work better in teams

- View feedback as opportunities for improvement
- Commit code early and often - no one likes ginormous code reviews
- Get code reviews from harsh critics - you learn a lot, bugs get fixed earlier
- Design the API to a new system first. This helps align teams
- Send out a design document first - this will help clarify the intent, design and get feedback

Think of your work as a series of experiments. Try to build feedback loops that help you measure the success and failures of these experiments

### Project Estimation

While working to fix a problem or building a product, a rough idea of when the problem will be fixed or when the product will be shipped is vital to prioritize work and get everyone on board.

We always operate under imperfect information, so successful planning requires

1. Increasing accuracy of project estimates
2. Increasing ability to adapt to changing requirements

A good estimate gives a clear enough view of the project reality to allow the team to make good decisions about how to control the project to hit its targets - should the scope be reduced or the timeline be increased

Estimates do not define a deadline of when a project will be completed but give an understanding of the underlying work required and a rough idea of how much time that work will take

Tips for better estimation

- Break down project into granular tasks (not more than 2 days)- this helps in identifying all the components involved
- Think of estimates as probability distributions and not best case scenarios - probability of % of project completion in 4 weeks vs 8 weeks
- The people working on the project should do the actual estimation
- Validate estimates against historical data
- Use timeboxing to constrain open-ended tasks (analysis, exploration)

Iteratively revise the estimates with better information and lesser unknowns

Measure the actual time taken to complete the task compare to the estimate - this will help in future estimates

Bugdet for the unknown:

Factor in the time for unplanned work

 Longer projects have unexpected problems that need to be accounted for - team members changing teams, leaving. reprioritization of issues.

As engineers we need to fix bugs, conduct interviews, performance reviews, attend team meetings. These need to be accounted for 

Asana’s engineering team maps 1 ideal engineering day to 2 work days to account for daily interruptions

Try to maximize learning and minimise risk from the beginning.

- Try to dig deeper into riskier and unknown areas.
- Build and design for failures - this helps in better estimations and a better product

Do it with tracer bullets and prototypes. If the risk is in integration across systems. Work on defining the API first and bulding a scaffold for the system

Try to avoid project rewrites

Problems:

1. Similar to building something new but estimated much smaller
2. Scope keeps on increasing (improvements/refactorings)
3. New features are either blocked or need to be duplicated

Instead of rewriting it in one go, we should break it down into a series of smaller projects. 

Refactoring should be incremental, behavior-preserving transfarmations to reduce risk of introducing errors. It usually increases the overall work, but dramatically reduces risk

Don’t Sprint in the middle of a marathon.

Don’t try to overexert to meet interim deadlines, as it usually reduces output in the coming weeks - Hourly productivity decreases with additional hours worked.

Slipping schedule generally means that past work was underestimated, hence the future work will be too and thus sprinting now won’t help much

Additional hours can burn out team members

Working towards a deadline incentivizes technical debt, which will bite us in the ass after the deadline.

The ideal solution to slipping deadlines is to either redefine the launch by cutting scope or to postpone the deadline to something more realistic

If overtime is necessary:

- Find out root cause of delay and make sure everyone understands it. Will the overtime fix these root causes?
- Revise the project plan to a realistic version
- Define when to stop the overtime, if the project plan is still slipping, cut losses sooner

Milestones

Clearly define the scope of deliverable of the project - This helps in guarding scope and clearly define success for the project

The project should have specific goals and milestones help measure progress on these goals. 

Defining project goal helps in

1. Guard scope (must have vs nice to have)
2. Builds clarity and alignment across stakeholders

**Building long term value**

The tradoffs b/w high coding standards and agility in software dev.

- Google places great emphasis on the quality and standard of codebases, but this adds an overhead to experiments and quickly spiking out ideas. Code meant to serve 100 users and 10 million users is held to the same standards
- It’s possible to over-invest in quality, to the point where there are diminishing returns for time spent.
- You need to build high quality software to move quickly, otherwise you’l spend as much time dealing with poorly written software as the time you had saved in writing it. Also, being overly dogmatic about reviews, standardization can lead to diminishing returns on quality and reduce effectiveness
- Finding a balance is of the utmost importance

> Thinking in terms of right and wrong isn’t a very accurate or useful framework for viewing the world... Instead of right and wrong, I prefer to look at things in terms of works and doesn’t work. It brings more clarity and is more effective for making decisions. - Bobby Johnson

Code reviews are helpful in

- Sharing context of the code with new engineers
- Teaching and ensuring quality of the code being pushed

They’re useful when not all members of the team share the same context and attention to quality and standards.

The newer the employee, the more valuable reviews are for bringing code quality and style up to the team’s standard.

Managing complexity through abstraction

Building good abstractions help scale up a product much effectively. 

Good abstractions

- Help reduce complexity of the original problem into easier to understand primitives
- Since a lot of code is abstracted away, its maintenance is easier and changing it is easier
- Reduces duplication of code. DRY

To scale a product, improve the abstraction of the product!

Be wary of building the abstraction too early without understanding the problem correctly as they lead to ill-designed and overfitted abstractions to the current use cases. 

A red flag is deciding to build own abstractions from scratch instead of incorporating an existing abstraction.

What makes good abstractions good

- Easy to learn
- Easy to use even without documentation
- Hard to misuse
- Sufficiently powerful to satisfy requirements
- Easy to extend
- Appropriate to the audience

Simple abstractions avoid interweaving multiple concepts, so that we can reason about them independently rather than being forced to consider them together. - Functional programming concepts

**Repay Tech Debt**

Technical debt is all the deferred work that’s necessary to improve the health and quality of the codebase and that would slow us down if left unaddressed

Technical debt isn’t necessarily a bad thing, it enables to move quickly earlier when we have less information, but it becomes a problem when it is not repaid in reasonable time.

Poor design choices when they are first being implemented are also a form of debt.

### Reduce operational Burden

To grow the product with a small team and to move fast you need to reduce operations.

Every single additional technology you add, is guaranteed to go wrong over time, and at some point, the entire team will be consumed with operations.

Avoid re-inventing the wheel and writing unnecessary custom software that you would have to maintain. This will enable you to scale your product with a small team. 

**Always do the simple thing first .** Complex systems lead to 

- Fragmentation of engineering expertise and improvement efforts get diluted across the different systems
- Leads to single points of failure and truck factors within the team
- Harder to onboard new engineers

**Build systems to fail fast**

It’s ofter harder to debug issues when software fails slowly, i.e. catch clauses or default configs do not let the software fail but let run in a degraded state. It’s difficult to pinpoint the root cause once the symptoms are visible much later (during high load for e.g.)

Therefore to make debugging easier and to better reason about our code, we should build softwares that fail early.

Though being counterintuitive, failing early makes the software more robust, there’s less “magic” and finding and fixing bugs is much faster.

So build software that

- Crashes at startup due to config errors instead of supplementing it with default configs
- Validates input
- Bubbles up errors from an external service instead of a catch-all error handler
- Throwing exceptions when key data structures or behaviours become corrupted.

Make Batch Process idempotent

- Automations in the systems should be idempotent (or retriable) to reduce maintenance time.

Fail fast does not necessary mean crashing the program for users, the system as a whole should fail gracefully while individual components can fail fast and help recover fast.

The best defense against major unexpected failures is to fail often.

Adopting techniques like chaos-monkey to frequently test the systems and failure strategies and to focus our time and energy on our ability to recover quickly can be of high leverage

Building scripts and runbooks for failure scenarios can be very effective for such cases. They enable us to find out the root cause much quicker and fix things in a focused way.

Load testing systems should also be prioritized.

### Invest in your team’s growth

Focus on helping your team members succeed, this will help the team and the company succeed and indirectly contribute to your own success.

```clojure
Staff engineer - you’re making a whole team better than it would be otherwise
Principal Engineer - making the whole company better than it would be otherwise
Distinguished Engineer - Making the whole Industry better
```

You get more credit for being part of a successful company and less credit that you deserve for being part of an unsuccessful company - Your success depends on the team’s and company’s success.

Spend time and effort in Hiring

A good interview process achieves 2 goals

- It screens for the type of people likely to do well on the team
- It gets candidates excited about the team, the mission and the culture.

good Questions have high signal-to-noise ratios

Use interviews to simulate the day-to-day work that engineers usually do

- Design and implementation of small end-to-end systems
- Squashing bugs in popular open-source codebases
- Refactoring poorly designed applications
- Pair programming

Design good Onboarding Process

- The faster new team members get onboarded, the quicker they will be effective

Effectively ramping up new team members gives you more flexibility to choose higher-leverage activities.

1 effective way is to pair new joinees with mentors who assign bug fixes, small starter projects.

For onboarding

- Ramp up new engineers as quickly as possible
- Share team’s culture and values
- Expose new engineers to the breadth of fundamentals needed

Increase fungibility of the system

- When you alone are responsible for a system, you get stuck in it, there’s no one else to help out with issues, bug fixes
- Even if you want to work on something else, you can’t

Write down and share post mortems to build collective wisdom.

Build a great engineering culture:

- Optimize for iteration speed
- Build systems and processes for experimentation
- Share knowledge and ownership of code
- Build high code quality with automated testing and code reviews

### Book Recommendations

- The checklist manifesto - Atul Gawande
- The Startup of You - Reid Hoffman
- Delivering Happiness - Tony Hsieh
- Getting Things Done - David Allen
- 7 habits of highly effective people - Stephen Covey
- Personal Kanban - Tonianne DeMaria barry and Jim Benson
- The Pomodoro technique - Francesco Cirillo
- Todoodlist - Nick Cern
- In the Plex - Steven Levy
- The Effective Executive - Peter Drucker
- Good to Great - Jim Collins
- The Lean Startup - Eric Ries
- Team Geek - Brian Fitzpatrick and Brian Collins
- Software Estimation - Steve McConnell
- The mythical man month - Frederick Brooks
- Software abstractions - Daniel Jackson
- The score takes care of itself -
- Cracking the coding Interview - Gayle Laakmann McDowell
-
