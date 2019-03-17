---
title: "Getting Your Own Baseball Data"
date: "2019-01-02"
path: "/getting_your_own_data"
author: "adam"
excerpt: "Places to visit and steps to take in order to make sure you have the most up to date baseball data at your fingertips."
---


Baseball is what got me into math way back when, and what makes it easy to analyze is the crazy amount of free data out there. 
If anything you read here or elsewhere makes you want to get your own hands dirty, or simply peaks an interest in what these databases look like, these are the places you should visit:

- Baseball Reference [(baseball-reference.com)](https://www.baseball-reference.com/)
- Sean Lahman ()
- Roto
- Build Your Own SQL Database (Off of any of the above sources) -github

**Here's a small walk through of how to get your own database going**:



If you're looking for complete historical data on the on most of the typical stats, the best source to use is Sean Lahman. He has csv versions for every year up to 2017, and sql versions up to 2016. Unfortunately, as of today, it doesn't have 2018 yet. For that you'll have to turn to baseball reference. 

Baseball Reference has many default searches ou can use, but if you find yourself using it often, I highly recomend paying for their Play Index, which allows you to have more specific queries.  I simply searched for all players from 2018. Lets take a look at the data. 


```sql 
SELECT * FROM baseball_ref.regular_pitching WHERE at_bats > 50;
```

<my-component />


> Fusce pharetra suscipit orci nec tempor. Quisque vitae sem sit amet sem mollis consequat. Sed at imperdiet lorem. Vestibulum pharetra faucibus odio, ac feugiat tellus sollicitudin at. Pellentesque varius tristique mi imperdiet dapibus. Duis orci odio, sodales lacinia venenatis sit amet, feugiat et diam.

Sed a leo id risus venenatis vulputate non quis nulla. Aenean nisl quam, lacinia pulvinar orci sit amet, eleifend eleifend dui. Nulla tempor ligula leo, eu vehicula quam condimentum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla gravida tristique nunc sed semper. Morbi nec felis odio.

- Sed efficitur, lacus ac scelerisque pellentesque, lectus risus dignissim nisl, fermentum semper lectus diam eget lacus.
- Nunc ornare purus enim, id eleifend mauris vestibulum volutpat.
- Aenean facilisis ut ipsum condimentum ultrices.
- Fusce sed metus vulputate, lobortis purus et, finibus purus. Suspendisse quis posuere lorem. Vivamus vulputate nec risus in pulvinar.
