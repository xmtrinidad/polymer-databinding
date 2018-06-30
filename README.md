# \<pricing-table\>

## Data binding

For passing data from parent to child:

1.  Create a *get properties()* method in the component's class

```js
static get properties() {
  return {
    plans: {
      type: Array,
      value() {
        return [
          { planType: 'basic', planPrice: '19' },
          { planType: 'starter', planPrice: '29' },
          { planType: 'small', planPrice: '49' },
          { planType: 'premium', planPrice: '69' },
        ]
      }
    }
  }
}
```

2.  Create a dom repeat template inside the *get template()* method

```html
<template is="dom-repeat">
  <price-option-element></price-option-element>
</template>
```

3.  Add an *items* and *as* properties to the template to iterate over items (Note that the *as* property is optional)

```html
<template is="dom-repeat" items="[[plans]]" as="plan">
  <price-option-element></price-option-element>
</template>
```

4.  Add the *as* property name (or, if there isn't an as property set, use *item*) as a property to the child element:


```html
<template is="dom-repeat" items="[[plans]]" as="plan">
  <price-option-element plan=[[plan]]></price-option-element>
</template>
```

5.  Inside the child element/component define a *get properties()* method and return an object with the type of data being passed into it

```js
static get properties() {
  return {
    plan: Object
  }
}
```

6.  Use the data passed into the child component

```html
<h5 class="card-title Plan__type">[[plan.planType]]</h5>
<h6 class="card-subtitle mb-2 text-muted Plan__price">$[[plan.planPrice]]</h6>
```


