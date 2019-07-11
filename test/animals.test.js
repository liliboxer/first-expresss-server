const request = require('supertest');
const app = require('../lib/app');

describe('items route', () => {
  it('can create an itme with POST', () => {
    return request(app)
      .post('/api/v1/animals')
      .send({ 
        name: 'panda', 
        legs: '4', 
        fluffy: 'not really' 
      })
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'panda', 
          legs: '4', 
          fluffy: 'not really' 
        });
      });
  });
  it('can get an array of animals', () => {
    return request(app) 
      .get('/api/v1/animals')
      .then(res => {
        expect(res.body).toEqual([{ 
          name: 'panda', 
          legs: '4', 
          fluffy: 'not really' 
        }]);
      });

  });
  it('can get animal by index', () => {
    return request(app)
      .get('/api/v1/animals/0')
      .then(res => {
        expect(res.body).toEqual([{ 
          name: 'panda', 
          legs: '4', 
          fluffy: 'not really' 
        }]);
      });
  });
  it('can update animal with PUT', () => {
    const newAnimal = {
      name: 'cat',
      legs: '4',
      fluffy: 'exceptionally so'
    };
    return request(app)
      .put('/api/v1/animals/0')
      .send(newAnimal)
      .then(res => {
        expect(res.body).toEqual({
          name: 'cat',
          legs: '4',
          fluffy: 'exceptionally so'
        });
      });
  });
});
