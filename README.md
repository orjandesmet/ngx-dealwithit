# ng2-dealwithit

Just deal with it!

# import

```typescript
import { DealWithItModule } from 'ng2-dealwithit';
```

include in imports of your module.

# usage

Add to your template

```html
<deal-with-it></deal-with-it>
```

**Optional parameter** *sizePercentage*: number (default = 100);

Inject *DealWithItService*

```typescript
import { DealWithItService } from 'ng2-dealwithit';

...
constructor(private dealWithItService: DealWithItService) {}
...
```

Display the dealWithIt on any moment

```typscript
this.dealWithItService.dealWithIt(top, left);
```

Clicking on the glasses will hide them again