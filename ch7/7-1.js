class Organization {
  #name;
  #country;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  get rawData() {
    return { name: this.name, country: this.country }; // set이 있을때
    return { ...this.#data }; // set 없이 get 만 있을때
  }
}

const organization = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB'
});

const organization1 = new Organization('Acme Gooseberries', 'GB'); // 이러한 방식도 있다

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
