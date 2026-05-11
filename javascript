### DAY 1

#  //VARIABLES AND DATA TYPES//

# Dynamically typed language
= -> assignment operator
== -> equality operator (compares values, performs type coercion if necessary)
=== -> strict equality operator (compares values and types, no type coercion)

# Variable Rules
1. Variable names are case-sensitive, so a and A are different.
2. A variable name may contain only:
    - letters (a-z, A-Z)
    - digits (0-9)
    - underscore (_)
    - dollar sign ($)
3. The first character must be:
    - a letter
    - _
    - $
4. It cannot start with a digit.
5. Reserved keywords cannot be used as variable names.

##
fullName = Camel Case

##
var: variable can be re-declared and updated. A global scope variable.

let: Variable cannot be re-declared but can be updated. A block scope variable.

const: Variable cannot be re-declared or updated. A block scope variable.

# Data types 

1.PRIMITIVE DATATYPE
Number, String, Boolean, Undefined, Null, BigInt, Symbol

2.NON-PRIMITIVE DATATYPE
objects-collection of values 
generally key:value pair is stored 
 (Arrays, Functions)



### DAY 2

# //OPERATORS AND CONDITIONAL STATEMENTS//

# comments
part of code which is not executed 
(//This is a single line comment
/* This is a multi=line comment */)

# operators 
used to perform some operation on data

1. Arithematic Operators => mathematical operations
    - Modulus(%) => gives remainder
    - Exponentiation(**) => power
    - Addition(+)
    - Subtraction(-)
    - Multiply(*)
    - Division(/)

2. Unary Operators => requires one operator
    - Increment(++ OR +1) => a = a++ / a = a+1
      a++(post => output form next line) , ++a(pre => output form same line)
    - Decrement(-- OR -1) => a = a-- / a = a-1
      a--(post) , --a(pre)

3. Assignment Operators => to assign values
    - (=) 
    - (+=) => a+=1 OR a = a+1
    - (-=)
    - (*=)
    - (%=)
    - (**=)

4. Comparison Operators
    - Equal to(==)
    - Equal to & type(===)
    - Not equal to(!=)
    - Not equal to & type(!==)
    - (>)
    - (>=)
    - (<)
    - (<=)

5. Logical Operators
    - AND (&&) => dono condition true ho tb hi true aega ek b false hui to false output aega 
    - OR (||) => agr ek b value true h toh true output aa jaega 
    - NOT (!)