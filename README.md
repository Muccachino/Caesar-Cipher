## Caesar Cipher

This program lets you use an ancient roman encryption method.
In the left textarea you can write the text you want to encrypt and in the small middle area you write a number.
By clicking the button you shift your text down the alphabet by the amount you typed in the middle.
For example: The word "Hello" shifted 5 times becomes "Mjqqt".
This process also works with negative numbers.

```
cipher()
```

The function cipher first reads out the input in the left area.
Then the "for"-loop takes every letter individually and transforms it to its decimal value of the UTF-16 Code.

After checking, if the input is the "space" key (it should not be changed), we split up to small and capital letters,
because of their different UTF-16 Code, but apart from the different numbers everything else works the same.

With the modulo method we change the UTF-16 Code of the letters to numbers between 0 and 25 representing the 26 letters of the latin alphabet.
Then we shift the numbers by the amount typed in at the beginning. If the value goes above 25 or under 0 it goes on on the other side.

Finally the numbers will be changed back to their UTF-16 Code, then with the fromCharCode transformed back to letters and joined together to a string.
