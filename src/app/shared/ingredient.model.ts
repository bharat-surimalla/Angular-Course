export class Ingredient {
  // shortcut to not have to declare properties on every class,
  // just set accessor and type in the constructor, Angular will handle the rest
  constructor(public name: string, public amount: number) {}
}
