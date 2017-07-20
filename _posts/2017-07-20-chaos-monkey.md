---
layout: post
title: CHAOS MONKEY - Lessons learnt from Netflix
---

<cite> “Named must your fear be before banish it you can.”
— Yoda </cite>

Imagine you work for a company called StarLabs, your company hosts all its
services on the cloud and millions of people around the world use and depend on your product.
You, being a part of the core developers on the platform are responsible and accountable for
the availability of your product at all times and all places. Now, imagine one of the cloud servers
for a micro-service fails and brings the entire system down for a couple of hours costing the company hundreds of thousands
of dollars and a sizable portion of your customers.

{% raw %}
<iframe src="https://giphy.com/embed/VjAB0fOmK15Ze" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/monkey-VjAB0fOmK15Ze">via GIPHY</a></p>
{% endraw %}

Now ,imagine working for a company that intentionally kills one of its servers randomly every week, I bet you
would pack your bags and run as fast and as far away as you could. But what if I told you the
world's leading video streaming company does this and swears by it? Yes, the company I am talking about is **NETFLIX** and
the product I am talking about is **CHAOS MONKEY**. Chaos Monkey’s job is to randomly kill instances and services within their architecture.
Isn't this insane? I bet you're thinking they are stupid, but you will not say that once you hear their rationale behind this.

This is an excerpt from <a href="https://medium.com/netflix-techblog/the-netflix-simian-army-16e57fbab116">one of their blogs</a> that explains
this philosophy.

> The cloud is all about redundancy and fault-tolerance. Since no single component can guarantee
> 100% uptime (and even the most expensive hardware eventually fails), we have to design a cloud architecture
> where individual components can fail without affecting the availability of the entire system. In effect, we
> have to be stronger than our weakest link. We can use techniques like graceful degradation on dependency
> failures, as well as node-, rack-, datacenter-/availability-zone-, and even regionally-redundant deployments.
> But just designing a fault tolerant architecture is not enough. We have to constantly test our ability to actually
> survive these “once in a blue moon” failures.

As an analogy, assume that a fire breaks out in your office or your home, you are aware that there are fire extinguishers around
and you have a vague idea of those hidden fire escapes, but how would you know if the fire extinguishers are working, how would you guarantee
that you wouldn't panic? How do you know that everyone will not get trapped in a burning structure? Well, one way is to set fire to the premises
once every week and go through the drill and practice for the worst case scenario. This is not feasible, or even legal, in our world but in the world of cloud computing and storage it is cheap and quite possible. This is the philosophy behind chaos monkey, a tool that randomly disables production instances to force the developers to make robust and reliable systems.

I admire Netflix's courage and ingenuity in deploying such a system. Constantly facing and fighting your fears makes you stronger and when you start addressing the weakest links in your product, you become the best in the world!
