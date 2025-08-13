## Comments about the mentoring about relationships

Every worldly problems are relationship problems, such as problems at home, wars, and so on. This is not exclusive to the
world, programming problems also reside in relationships. Therefore, establishing a good relation among things, which are
divided in some levels, are: 

Level 1: nouns + verbs

Establishing a strong relationship between the nouns and verbs of our application is a fundamental step in designing robust
software. In this metaphor, the nouns represent the data — the entities, value objects, or models that our application
will manage. The verbs, on the other hand, represent the actions — the operations, methods, or behaviors we apply to that
data.

It is through this interplay between data and behavior that we begin to shape our understanding of the problem space and
design effective solutions. This relationship forms the backbone of how we model real-world scenarios in code.

Every programming paradigm involves data and functions. What differentiates them is how these two elements are relate
and structured:

In object-oriented programming (OOP), data and behavior are tightly coupled. Classes encapsulate both state (nouns) and
the actions (verbs) that operate on that state. This allows for rich, behavior-driven models.

In functional programming, there is a clear separation between data and behavior. Data is immutable, and pure functions
(verbs) are applied externally, promoting predictability and ease of testing.

In domain-driven design (DDD), this metaphor becomes especially powerful. By explicitly mapping domain nouns (such as
Invoice, User, or Product) and verbs (such as generate, create, or update), we align code with real-world concepts, leading
to more expressive and maintainable software.

Ultimately, it's by understanding and organizing this relationship — data + functions — that we lay the foundation for clear,
maintainable, and meaningful code. It’s not just about writing instructions for a computer, but about modeling the domain
in a way that reflects how things work in the real world.

Level 2: Application (Business) + Inputs/Outputs

This level represents the relationship between the application's core business logic and the I/O operations it depends on.
It covers how the code — typically written or specified by business specialists — is connect to external or side effects.

By Inputs/Outputs (IO), we can think of any form of communication with the outside world: writing files to disk, interacting
with a database, consuming data from a legacy system, integrating with any third party services such as payment gateways,
sending e-mails, or reading user input.

When we talk about inputs and outputs, in the context of an application, it's essential to carefully and define how the
core business logic will interface with these external operations. One part represents the pure, domain-driven application
code — ideally kept free from side effects — and the other represents the necessary but impure operations that allow the
application to communicate with the outside world.

Designing a clean boundary between the business logic and the I/O layer helps in creating more testable, maintainable, and
flexible systems. It also makes it easier to mock dependencies, change external providers, or run parts of the application
in isolation for testing or development purposes.

This relationship between data and functions is what determines which paradigm we are following and how much we are adhering
or violating it. We may have chosen OOP to guide the data/functions relationship, and once we make that choice, we will
encounter principles and pillars that shape how we relate these two elements.

However, we might unintentionally violate OOP if we don't follow its core principles and how we manage the relationship

We understand that every application is composed by data and behaviors. This is universal, it doesn't matter
if we are working on a lower level language, or a higher level language, we will always work on data and behaviors. What
will change from a paradigm to other is the relationship.

Therefore, when thinking on data + behaviors relationships, this relationship is what will generate exactly what we know
as programming paradigm. Every paradigm have data and behaviors, and the way we unite both is what will differentiate whether
we are working with one or the other.

Programming paradigms are, at their core, different ways of thinking about how to solve problems through code. 
It's even possible to work with multiple paradigms simultaneously within the same app — for instance we might choose to
tackle a specific problem using a more functional approach because it makes more sense to us, even within a broader object-oriented
system.

This means we will usually have a primary paradigm that guides our architecture and development decisions. However in specific
parts of the codebase, we may opt for a different paradigm if it provides a better fit for the problem at hand.

We may, even incorporate principles from other paradigms that we consider good practices. For example, in OOP, we often
work with mutable data — values that can change overtime. A valuable practice we can adopt from functional programming is
immutability, which can lead to fewer bugs, and make it easier to reason about code, specially in concurrent or multi-threaded
environments.

Even though immutability is not a strict requirement in OOP, We can simply "import" this mindset, and start applying it
to our object-oriented code to improve safety and maintainability 

### What are I/Os (Inputs / Outputs ) in an application

On the software context, I/O refers to any communication between system and external world — be it by receiving data (input)
or sending data (output)

Common examples are: 

Inputs — what enters the system: 

. HTTP Requests (ex: a form sent by an user)
. Reading files from disk
. Reading messages of a queue (ex: RabbitMQ, Kafka)
. Querying data from a database
. Commands entered in a terminal or CLI

Output — what the system sends or does externally

. Sending HTTP responses (e.g from an API)
. Writing files in the disk
. Send e-mails or SMS messages
. Persisting data in the database
. Sending events to other systems
. Terminal logics or file logs

In a well structured architecture (such as Domain Driven Design or Clean Architecture), the core of the system (business logic)
should: 

. Not know or care how data comes or where it goes;
. Only process data and apply business rules

All I/Os operations are considered implementation details and should live at the edges of the system (in outer layers), 
so they can be easily changed, mocked, or replaced without breaking the main logic.


### DDD - Domain Driven Design

DDD is an approach to software development that focuses on modeling the business domain accurately and aligning the code
with the real world rules an processes of the organization

Key Concepts of DDD

1. Ubiquitous language
Everyone involved in the project — developers, business analysts, domain experts — should use the same language. For example,
if you're building an order system, everyone should consistently use terms like "Customer", "Order", and "Product", and your
code should reflect that exact language

2. Domain Modeling

You model the business logic in terms of domain concepts — creating entities, value objects, and domain services that represent
how the business actually works, independent of technical concerns.

3. Layered Architecture

DDD encourages a clear separation of concerns through layered architecture: 

. Domain Layer: Contains the pure business logic and rules
. Application Layer: Coordinates use cases and delegates to the domain layer.
. Infrastructure Layer: Handles technical details like database access, external APIs, messaging systems, etc.
. Interface Layer (also known as Delivery Layer): Exposes the system to the outside world (e.g., REST APIs, UI, CLI)


And how does it relate to Inputs/Outputs? 

When we think of separating business logic from I/O, we consider one of DDD's key principles: keep your core domain logic
isolated from technical concerns like reading from databases, writing to files, calling APIs, etc.

This separation allows us to: 

. Write business code that is easy to understand and test.
. Swap out I/O mechanisms like changing databases or APIs without rewriting our domain logic
. Avoid tightly coupling our core logic with specific frameworks or tools.

## Data vs Data Structure

One important distinction to clarify is the clear difference between data and the structures that organize this data.
For example, we can have multiple numbers, and within the computer, each number has a defined structure in a given
format (like the number of bits to specify its signal, etc.) Therefore, data is one thing and data structures are another.

For instance, Number, Boolean and String are data structures—they are the basic building blocks of a programming language.
We also have more complex structures such as trees, queues, stacks, and custom structures (like objects).  

● System for a basic school

  Imagine we spoke to a specialist about the institution's needs for the first version of a system: 

    ○ The specialist might say that the system needs to manage rooms, assets, students, and teacher registrations, and
    define the relationship between teachers and classrooms.

    ○ This would require creating different data structures to represent a student, a teacher, a classroom, and so on

    ○ Now 'John Doe' who is seven years old, becomes a piece of data inside the custom structure we just created. We should
    already understand that objects are these structures, where basic data types combine to form more complex structures.

    ○ For example, we might have a guardian object for a student, and this guardian object can have an address, which is
    another object/structure. The guardian object can also be related to other students in the
    same school, and so on.
    
● Most common programming paradigms

  ○ We mainly have three core paradigms, all of which were created almost 70 years ago. While new paradigms may emerge
  they are generally build upon these foundational ones"


  ○ Structured Programming (1970)

    ■ When thinking about structured or procedural programming, we often refer to them together. While they are not exactly
    the same, they go hand in hand. Structured programming focuses on control flow (like if, while, for) while procedural
    programming emphasizes procedures or functions. 

    ■ In this paradigm: 
    
    □ Functions have inputs (parameters) and outputs — their role is to transform data.

    □ It is common to use global variables, which are accessible from different parts of the app.

    □ Example of functions: 
      - Functions with no inputs: Only their result matters.
      - Functions that take parameters but return nothing: They simply process the input
     
    
    □ A function like `power(base, exponent)` would return a result such as `power(2, 8) -> 256`

    □ While we also use functions in other paradigms like `OOP` or `FP`, the functional concept comes of transforming data
    through functions comes from structured programming.

  
  ○ Key concepts introduced by Structured Programming

    ■  Execution Stack: 
      □ It shows the sequence of function calls during program execution, helping trace the origin of an error — known as
      the `stack trace`

      □ When there's an error in the stack, it returns to us that giant message full of errors, but inside of it, it shows
      the `stack trace`, that is the trace from the whole stack until the error, this is a way for us to know where it
      was that caused the problem, and where it originated.
      □ Before structured programming, `goto` was used, allowing jumps to any part of the code (e.g., from line 287 to line
      4), which made code chaotic and hard to maintain. 
      □ Structured programming replaced `go to` with `direct control transfer`, making programs easier to understand and
      verify

      □ Example of a call stack: 
        1. The program starts at `main()` — base of the stack
        2. `main()` calls `initialize()` — added to the top of the stack
        3. `initialize()` calls `environmentVars()` — added above
        4. When a function finishes, it is removed from the stack, and control returns to the caller.


    ■ Control Structures: 
      □ Controls such as `if`, `else`, `for`, and while define the flow of a program.

      □ These allow for sequential, conditional, and loop based execution in readable, structured manner.

    ■ Scopes:
      □ Scope refers to the visibility and lifetime of variables.

      □ There are two main types

        - Global Scope: Outside of functions
        - Local Scope: Inside functions

      ```ts
        let lastResult = 0;

        function sum(a: number, b: number): number {,
          const result = a + b
          lastResult = result
          return result
        }

      ```

      □ 'result' is local to the `sum()` function.
      □ 'lastResult' is global.

      — Local scopes give developers better control and predictability

      - However, structured programming often allows `mutable shared data', which can lead to 'unpredictable behavior',
        especially with concurrency  (e.g., two threads modifying lastResult simultaneously) 

    ○ Functional Programming x Structured Programming

    ■ Both programming use functions, but

      □ Structured programming allows multiple global data
      □ Functional programming avoids shared and mutable data.

    ■ In environments like node/ts, each file is treated as a module, giving us module-level scope in addition to function
    scope.

    ■ Functional programming emphasizes pure functions:
    
      □ A pure functions only uses its input parameters and returns a value
    
      □ It does not read or write external variables.
      
      □ It must be predictable — for example, it cannot use `Math.random()` or `Date.now()`, since they are modified on
      each invocation

      □ In our early example, `sum()` would be considered impure since it modifies `lastResult`.

      □ Modifying a global variable within a function is unacceptable in fp but ok in the structured paradigm


    ■ Whereas in a procedural paradigm, the procedure is the main character,


  ○ Object Oriented Programming (1960)
  ○ Functional Programming (1950)



  