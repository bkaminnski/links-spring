# Links - Composite UI project

This is a Spring Boot version of [this project](https://github.com/bkaminnski/links-jee/).

## Goal

The goal of the project is to verify in practice Composite UI technique. I first heard about it in [*Advanced Distributed Systems Design*](https://particular.net/adsd) course by Udi Dahan (on-line version, available [here](https://www.plimus.com/jsp/buynow.jsp?contractId=2317281)). You can find a short introduction to this idea in his [blog post](http://udidahan.com/2012/06/23/ui-composition-techniques-for-correct-service-boundaries/). Another mention of the technique can be found in [*Building Microservices* book](https://www.amazon.co.uk/d/Books/Building-Microservices-Sam-Newman/1491950358) by Sam Newman, under the name *UI Fragment Composition* (however with far less attention). It was also mentioned in the Technology Radar under the term of *micro frontends*, [here](https://www.thoughtworks.com/radar/techniques/micro-frontends).

Even though Composite UI technique makes the main driver for the project, there are many other interleaving concepts, playing with which is important alike: finding services boundaries, autonomous services, services decomposition, messaging, asynchronous communication, loose coupling. The goal of the hands-on part of the project is to practice automation skills (with tools like Docker, Flyway, and some scripting), Spring Boot (with its starter configurations, Eureka, Zuul, Ribbon, RabbitMQ, ...), Java 8 (with its streams, lambdas, ...) and ReactJS (with webpack, babel, ...). 

And the overall theme of the project derives from the [KISS](https://en.wikipedia.org/wiki/KISS_principle) principle.

## Links

This is my personal project, therefore I decided to make a simple application in terms of its functional scope. It is a list of links - idea similar to the [pocket](http://getpocket.com/) application (BTW - highly recommended). Even though it is small, it still gives enough opportunities to evaluate many interesting concepts.
