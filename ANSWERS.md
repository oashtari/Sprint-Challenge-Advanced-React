- [ ] Why would you use class component over function components (removing hooks from the question)?
Could be any number of reasons, maybe you're working with legacy code at a company that has not transitioned to fucntional components. It could also be a personal preference. Until recently (introduction of hooks), Class Components had more functionality available than functional components.

- [ ] Name three lifecycle methods and their purposes.
1. componentDidMount -- Sort of the start of the lifecycle, it is called and indicates that the components and all its sub-components have rendered properly.
2. setState -- used to change a component's state data, it also triggers a call to render.
3. render -- it tells React what will be mounted to the screen.

- [ ] What is the purpose of a custom hook?
They are custom methods built to resuse some sort of logic that your program needs.

- [ ] Why is it important to test our apps?
Building tests into the app from the start will help ensure the quality of the work, and save you time down the line by minimizing the amount of debugging you might need to do.