---
layout: post
title: Mocking 101 
---
<div class='message'>
If you are new to TDD and have no idea what "mocking" is, this blog could change your life.
</div>

Before starting on what mocking is, let me give you a rundown of TDD.
Test Driven Developement (TDD) is basically a software development
strategy where one defines tests first and then writes just enough code
to pass that test. In this manner as you start adding your tests and
ensure that all the tests pass you build a better and bug free piece of
code, obviously while maintaining code quality by frequent refactors.
TDD helps build better software by ensuring that the developers go
through the **all the possible behaviours their code could have**(since you
write the least possible code to pass a test) and thus keeps them from
accidentally introducing bugs in the codebase. The **code is also very
predictable and a delight to work on** as you can make sure that none of
the previous code breaks when you add on new code.


OK, all of this sounds good but where do "Mocks" come in? I hear you
ask. Since you are reading this blog I hope you understand the concept
of *Single Responsibility Principle*. So in accordance with this
principle we try to ensure that our classes and methods have only one
responsibility and piece of logic. This as you could imagine might turn
out to be difficult in the case where your methods call upon other
methods to get results or write to databases. If in your naivety you
write tests for these methods as you normally do, you will soon realize
that these tests are not only testing your desired method but all the
subsequent methods it calls upon and in some cases also testing the
behaviours of external databases and APIs which is undesirable. As is
the case with your code your tests should also have a predictable
behaviour, by which I mean that they should not break in situations
that are externally controlled, like the database not working in your
testing environment or the API not responding. This is where Mocks come
to the resque.

```
public string create(int index) {
  object = get_obj_from_database(index);
  if object is valid
    value = compute_cost(object);
    make_random_API_call()
  return object.name
}
```
In the method above you will notice that create() calls another method
get_obj_from_database(), an API call and a database call. So in effect a
test for this method will test the above implementations as well while
all we want to check is the behaviour of this particular method(whether
the calls were made or not) and mocking helps us with just that.A mock,
by definition is an imitation or a fake (though they are technically [different](https://martinfowler.com/articles/mocksArentStubs.html)) of the original method and thus just gives the desired output for that method. In a mock for a method we can define what the output for a particular input
should be (without implementing the logic) and also keep a count of how
many times the method was called.

So, a mock for the above methods would look like

```
mock get_obj_from_database(index) {
  counter++
  return predefined_obj_for_given_index, counter
S}

mock compute_cost(obj) {
  counter++
  return predefined_value_for_given_obj, counter
}

mock make_random_API_call() {
  counter++
  return response OK or 400 based on test input
}
```
Here the counters keep track of the times the method was called and the
responses are either defined in the test or are decided by some logic.

So now with the magical powers of mocks, you could individually test
your methods. Now, I do not mean that you should not test these
interactions at all and only depend on mocks, the tests I am
talking about are unit tests and integration tests are what handle these
interactions with databases and different parts of the project.

Also do note that the code written above is just pseudo-code and this is
not the correct way to write mocks. Almost all the major languages have
great mocking frameworks: Go has testify, ruby has rspec-mock.

