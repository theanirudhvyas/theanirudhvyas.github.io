---
title : Is Ruby an Interpreted Language?
layout : post
---

<div class="message">
If you reflexively answered yes or never gave it a thought, you will learn something new today!
</div>

How often do we question our assumptions? And have you ever noticed how ferociously we protect them from criticism and scrutiny? So this topic came up in a discussion yesterday and I fought tooth and nail claiming that Ruby IS an Interpreted Language but alas as such discussions go, I was wrong. Now let me enlighten you.

To answer the question you first need to define what an interpreted language is? And for that matter what is a compiled language?
Well first, **A Language is not interpreted or compiled, its implementation is.** Now that we have it out of the way, lets proceed:
- In a compiled implementation, the original program is translated into native machine instructions, which are executed directly by the hardware.
- In an interpreted implementation, the 'interpreter' goes through the code line by line and deciphers the instructions to machine instructions. There are some instances (in python for example) where the code is translated into a bytecode which is then read by an interpreter.

So basically if a language can be run line by line it is an interpreted implementation of that language.

If you have come this far and still are unsure, let me explain with an example.

So **Ruby is both interpreted and compiled**
- The MRI implementation (Matz's Ruby Interpreter) which is arguably the most popular implementation is an interpreted one.
- However other popular implementations like JRuby and Rubinius are compiled implementations and support using a compiler like C or Java.

How's That for Trivia!

{% raw %}
<iframe src="https://giphy.com/embed/5aLrlDiJPMPFS" width="206" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jon-stewart-the-daily-show-5aLrlDiJPMPFS">via GIPHY</a></p>
{% endraw %}
