const Pet = require('../src/pet');

describe('name', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
  });

  describe('initalAge', () => {
  
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
  });
  
  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });

  describe('hunger', () => {
    it('has initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('increaseHunger', () => {
    it('grow up should increase the hunger ', () => {
      const pet = new Pet('Fido');
      pet.growUp(1);
      expect(pet.hunger).toEqual(5);
    });
  });

  describe('initialFitness', () => {
    it('has initial fitness of 10', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('decreaseInFitness', () => {
    it('growUp should decrease fitness by 3 ', () => {
      const pet = new Pet('Fido');
      pet.growUp(5);
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('increaseInFitness', () => {
    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('decreaseInHunger', () => {
    it('decreases hunger by 3 but never below 0',() => {
      const pet = new Pet('Fido');
      pet.hunger = 5;
      pet.feed();
      expect(pet.hunger).toEqual(2)
      })
  })
  
  
