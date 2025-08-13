# Why is the core folder being created?

One point that's going to bring a clarity for our code, and here we created the core folder, which is going to represent
our core project, and inside this folder, we are creating a shared folder, with some things that are not specifically
exclusive of just the front end of our app, but in a more general concept and needs to be shared, but we are going to
focus more on this "evento" folder

There is a architectural limit of what represents the core of our application, our business rules, and what represents
the apps. it would be like the front, the back and the mobile, are all linked to this core.

It's like that on the apps, we'll have our main technologies, such as frames/libs, such as react, nextjs, nest, all the
db structure side and for this side of the applications, most commonly, our apps folder, we'll have the freedom to put
the frameworks and libraries of our application, whereas at the the core side, we think of putting the business rules
of our application, and these rules, by pattern, we only want to depend on the programming language, so we need to be
careful to not mix inside these rules, frameworks that we are going to lose control of what we are building, because the
framework will require us to change the class to be a certain way, etc.

