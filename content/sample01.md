---
path: "/development/markdowntest/"
date: "2019-11-07"
title: "Sample 1"
tags: ["example"]
slug: "development/testing"
---

Sample content.

```jsx{1,4-6}
import React from 'react';

const Counter = initialCounter => {
  const [counter, setCounter] = React.useState(initialCounter);

  const onIncrement = () => {
    setCounter(c => c + 1);
  };

  const onIncrement = () => {
    setCounter(c => c - 1);
  };

  return (
    <div>
      {counter}

      <div>
        <button onClick={onIncrement} type="button">
          Increment
        </button>
        <button onClick={onDecrement} type="button">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
```