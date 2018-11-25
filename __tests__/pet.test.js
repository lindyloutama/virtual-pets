const Pet = require('../src/pet');

describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
  });

  describe('constructor', () => {
  
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

  describe('constructor', () => {
    it('has initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('hunger', () => {
    it('grow up should increase the hunger ', () => {
      const pet = new Pet('Fido');
      pet.growUp(1);
      expect(pet.hunger).toEqual(5);
    });
  });

  describe('constructor', () => {
    it('has initial fitness of 10', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
  });


  describe('fitness', () => {
    it('growUp should decrease fitness by 3 ', () => {
      const pet = new Pet('Fido');
      pet.growUp(5);
      expect(pet.fitness).toEqual(7);
    });
  });