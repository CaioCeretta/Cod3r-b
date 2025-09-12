# Overall Comments

  ● Template Strings and Object Literals in console.log

    ○ Template String: `console.log(`N1: ${n1}, N2: ${n2}, maior: ${maior}`);

      ■ This code is correct, because we wan´t to print a formatted string in the console. The template strings with use
        of the ` accent, will alllow us to interpolate values with ${}

    ○ Object literal:  `console.log({`N1: ${n1}, N2: ${n2}, maior: ${maior}`});`

        ○ On the other hand, this code is wrong, because {} outside a function or control structure are interpolated as
        object literal declarations
        ○ The content inside the {} must be a fieldName key, followed by : and not a template string

  ● Two use effects in the same file, with different dependency array

    ○ In the `maior` lesson, where we have the n1, n2, and maior states, we are forcing a re render in one use effect,
    when each of the numbers change, and inside the other use effect, we are console logging only when the `maior` state
    changes
    ○ Even though the first use effect changes the maior with the comparison if n1 is bigger than n2, the other use effect
    which has the maior state in its dependency, will only show its console.log when the maior state changes, if we have,
    for example, n1 as 4 and n2 as 1, when increasing the n2 value, to 2 and the 3, this useEffect won't be fired.

