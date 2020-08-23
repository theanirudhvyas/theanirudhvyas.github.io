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
**The goal of an Engineer:** To ship value and to solve problems.

We default to code and software as our tools for shipping value as they provide the most leverage. You write something once and it works for years and can be replicated with no costs across all similar problems. But often we get blinded by our comfort zone and daily distractions and start ignoring the problems that give us much more leverage. We need to build frameworks to help us identify such issues and help us execute on them. 

**Successful Engineers** ignore the bureaucracy that values low leverage tasks and identify the 1 or 2 things that make the most business impact.


Always ask why before how → **~~how~~ why should we do it?**  Instead of trying to solve the impossible problems, try to question the assumptions and work around the problems. 

Engineering is much more about leverage than programming ability.  
Leverage is the yardstick for measuring effectiveness. `Leverage = Impact Produced/Time Invested.   → ROI`  
Pareto Principle, what 20% of work produces 80% of impact can be used to the same effect.

-------------------------------------------------------------------------------

#### Adopt a growth Mindset  
Things don’t get fixed on their own, no one is born good at anything, you need to learn and improve to get the things you want.  
Similarly, while learning new technologies or managing people, expect that you’ll suck at it in the beginning but things will get better once you actively learn and improve.

One advice that I really like and have been trying to incorporate is
> Own your story
Decide what you want out of life and go after it. it is you who will make your life. If you don’t know what you want, others will tell you what you want. Own your story and don’t let others define it.

Start with the basics → This will help in compounding the rate of learning, you with learn things much faster once you have the basics in place. Recursion → trees and graphs → compilers and network topologies

Choosing a cushy and well paying job, lowers your learning rate (by choosing easier things to work on) which you pay with missing long-term compounding. You get complacent and stall.
Treat yourself like a startup, initially prioritize learning over profitability
Improve by only 1% per day.

Tips:  
- Study code written by engineers you admire: try to think of how you would implement it
- Write code: it is a craft that you have to work at to improve, reading will not help much
- Get feedback from harshest critics (code reviews, design docs**
- Work on a diversity of projects - to pick up new skills

**Always be working on side projects**

-------------------------------------------------------------------------------

#### Prioritise regularly  
**Shipping is of the highest priority**
To ensure you're always working on tasks with the most leverage, prioritize often.
Focus on what produces value, Meetings, slack conversations, reports indirectly create less value but take up a lot of time
When you get the important things right, the small things don’t matter.  

##### Focus on important and non-urgent tasks

We let life’s daily interruptions, rather than our priorities, dictate our schedules - Avoid interruptions. This is especially important for me, as things with no deadlines don't ever end up happening.
Often the things that are urgent are not important, i.e. they are not investments that increase effectiveness in the future.

![priority-matrix.jpeg](priority-matrix.jpeg)

Quadrant 2 tasks don’t have a deadline and therefore don’t get prioritised because of urgency, but in the long run provide significance.  
Spending too much time in Quadrant 1 might mean that you are simply addressing the symptoms and not the underlying cause.  
Automate processes to remove avoidable errors - checklists  

**Maker’s Schedule**
To gain flow we need more contiguous block of time to work.  
At all costs avoid interruptions:
- Schedule necessary meetings back-to-back

Limit amount of work in progress
- It’s hard to build momentum with many things in WIP
- As a team, if many things are in progress, the people lose context for design decisions and code reviews

Build a routine around prioritization so that you frequently look at what is important with the changing requirements and new knowledge

-------------------------------------------------------------------------------

### Execution
The Golden rule to successful execution and better decisions is to **MAKE THE FEEDBACK LOOP SMALLER**  
This can be achieved by automated tests, faster iterations, continuous deployment, Experimentation and metrics in the system. 
The fast you iterate the more you learn about what works and what doesn’t.

*If you don’t break anything, you’re probably not moving fast enough*

*Feature flags* are a good design strategy to implement CD with in progress features.

Shaving off seconds and minutes from repititive daily tasks can have a huge ROI in the long term.
Write as many tools as you can for repititive tasks.

For e.g. making debugging workflows quicker by building tools is a much better investment than just spending the same time on debugging every iteration

A lot of bottlenecks can be from the process involved or the peoople too. It's your job to identify those and fix it, don't let it become your blind spot. 
It could be hiring, management, unclear team goals or team building.

Communication is critical for making progress on people-related bottlenecks. Ask for frequent updates and commitments in daily stand-ups.
**Projects usually fail because of under-communication**

Use informal meetings to solicit early and frequent feedback, its usually a mistake to wait until significant effort has been invested.

-------------------------------------------------------------------------------

#### Measure what you want to Improve

Google optimizes for user happiness “a sense of delight” in google search, but to improve on it, it needs to measure it first.
It does this by measuring the long-click rate - how many users click a search result and don’t come back to the search page i.e. they found what they were searching for

A prerequisite to deciding good metrics is to gather a lot of data which lets form insights and connections across behaviours.  
How do you know that a feature that you shipped improves user experience, traction or actually solves the problem that it was built for? 

Good metrics
1. Help you focus on the right goals (North Star)
2. Act as regression tests on the system
3. Performance ratcheting - Drive progress (doesn’t let system deteriorate ate with changes)
4. Measure effectiveness over time ( change in metric/effort)

Choose metrics that 
- Maximize impact - the core metric that leads the team to make the greatest and most sustainable impact
- Are actionable - metric that are directly affected by the team’s work, should avoid vanity metrics that can be affected by other reasons (press coverage for e.g.)
- Are responsive yet robust - the metric should give quick feedback on the changes, yet be robust to high variances (1 minute rates, 1 hour rates for e.g.)

For long term goals it is good to have a few core metrics (should avoid measuring a lot of things).   
On the other hand for the short term, we should measure and instrument as much as possible. This helps gain insights into the systems we have build and help us reason about improving the long term core metrics.  

-------------------------------------------------------------------------------

#### Validate Ideas early and often

*Reduce the feedback* loop on your ideas. 
Always be customer focused → fail fast, take feedback

Use MVPs to focus on high-leverage activities that can validate hypotheses about users. 

Avoid working in 1 person Teams
- No one else has context on what you’re working, so it is hard to get feedback
- The lows of a project can be demoralizing when working alone
- The Highs can be less motivating too

Think of your work as a series of experiments. Try to build feedback loops that help you measure the success and failures of these experiments

-------------------------------------------------------------------------------

#### Project Estimation

We always operate under imperfect information, so successful planning requires
1. Increasing accuracy of project estimates
2. Increasing ability to adapt to changing requirements

Estimates are not deadlines, they are a deeper understanding of the work to be done and how much time that work will take.

Tips for better estimation
- Break down project into granular tasks (not more than 2 days)- this helps in identifying all the components involved
- Think of estimates as probability distributions and not best case scenarios - probability of % of project completion in 4 weeks vs 8 weeks
- Validate estimates against historical data
- Use timeboxing to constrain open-ended tasks (analysis, exploration)

Bugdet for the unknown:
Factor in the time for unplanned work  
Asana’s engineering team maps 1 ideal engineering day to 2 work days to account for daily interruptions

If the project is a rewrite: define scope and only aim for feature parity, don't decide on adding new features. Do it iteratively and in parts.

Burning the night oil to meet deadlines is usually a bad approach.
It decreases productivity in the coming weeks, increases bugs and incentivizes tech debt.
The ideal approach is to cut scope and ship features iteratively with continuous delivery

If overtime is necessary:
- Find out root cause of delay and make sure everyone understands it. Will the overtime fix these root causes?
- Revise the project plan to a realistic version
- Define when to stop the overtime, if the project plan is still slipping, cut losses sooner

Defining project milestones. It helps in
1. Guard scope (must have vs nice to have**
2. Builds clarity and alignment across stakeholders
3. Measure Progress

-------------------------------------------------------------------------------

### Building long term valu

The tradoffs b/w high coding standards and agility in software dev.
- Google places great emphasis on the quality and standard of codebases, but this adds an overhead to experiments and quickly spiking out ideas. Code meant to serve 100 users and 10 million users is held to the same standards
- It’s possible to over-invest in quality, to the point where there are diminishing returns for time spent.
- You need to build high quality software to move quickly, otherwise you’l spend as much time dealing with poorly written software as the time you had saved in writing it. Also, being overly dogmatic about reviews, standardization can lead to diminishing returns on quality and reduce effectiveness

> Thinking in terms of right and wrong isn’t a very accurate or useful framework for viewing the world... Instead of right and wrong, I prefer to look at things in terms of works and doesn’t work. It brings more clarity and is more effective for making decisions. - Bobby Johnson

Manage complexity by building good abstractions. They help scale up a product much effectively.  
Good abstractions
- Help reduce complexity of the original problem into easier to understand primitives
- Since a lot of code is abstracted away, its maintenance is easier and changing it is easier
- Reduces duplication of code. DRY

Attributes of good abstractions
- Easy to learn
- Easy to use even without documentation
- Hard to misuse
- Sufficiently powerful to satisfy requirements
- Easy to extend
- Appropriate to the audience

Simple abstractions avoid interweaving multiple concepts, so that we can reason about them independently rather than being forced to consider them together. - Functional programming concepts

-------------------------------------------------------------------------------

#### Reduce operational Burden

**Do the simple thing first.**
Always default to using already available technology and only build custom solutions when the specific need arises. 

**Build systems to fail fast**
It’s ofter harder to debug issues when software fails slowly, i.e. catch clauses or default configs do not let the software fail but let run in a degraded state. It’s difficult to pinpoint the root cause once the symptoms are visible much later.  
Though being counterintuitive, failing early makes the software more robust, there’s less *magic* and finding and fixing bugs is much faster.  
Fail fast does not necessary mean crashing the program for users, the system as a whole should fail gracefully while individual components can fail fast and help recover fast.

The best defense against major unexpected failures is to fail often.  
Adopting techniques like chaos-monkey to frequently test the systems and failure strategies and to focus our time and energy on our ability to recover quickly can be of high leverage

-------------------------------------------------------------------------------

#### Invest in your team’s growth

Focus on helping your team members succeed, this will help the team and the company succeed and indirectly contribute to your own success.  
You get more credit for being part of a successful company and less credit that you deserve for being part of an unsuccessful company - Your success depends on the team’s and company’s success.

A good interview process achieves 2 goals - screens people likely to do well and gets them excited about working on the team

Design good Onboarding Process: The faster new team members get onboarded, the quicker they will be effective  
Effectively ramping up new team members gives you more flexibility to choose higher-leverage activities.

Increase fungibility of the system
- When you alone are responsible for a system, you get stuck in it, there’s no one else to help out with issues, bug fixes
- Even if you want to work on something else, you can’t

A great engineering culture:
- Optimizes for iteration speed
- Builds systems and processes for experimentation
- Shares knowledge and ownership of code
- Builds high code quality with automated testing and code reviews

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
