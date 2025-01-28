# Type-Safe Arithmetic Operations in TypeScript

This repository demonstrates basic arithmetic operations in TypeScript with a focus on type safety and error handling. The initial code lacks robust type checking, leading to potential runtime errors. The solution introduces improved type handling to prevent such issues. 

## Bug Description

The original code doesn't explicitly enforce that the input parameters for each arithmetic operation are numbers. This omission can result in unexpected behavior or runtime errors if non-numeric values are provided.

## Solution

The solution enhances the code by strictly enforcing the number type of input parameters using TypeScript's type system. This ensures that only numerical inputs are accepted, preventing potential runtime errors caused by type mismatches.