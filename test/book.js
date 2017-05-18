const mongoose = require('mongoose');
const Book = require('../models/Books');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Books', () => {

  // beforeEach((done) => { //Before each test we empty the database
  //   const books = Book.remove({}, (err) => {
  //     done();
  //   });
  //   // console.log('My Books = ', books);
  // });


/*
  * Test the /GET route
  */
  describe('/GET books', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });


  // describe('/POST book', () => {
  //     it('it should not POST a book without name field', (done) => {
  //       let book = {
  //           description: "J.R.R. Tolkien",
  //       }
  //       chai.request(server)
  //           .post('/')
  //           .send(book)
  //           .end((err, res) => {
  //               res.should.have.status(200);
  //               res.body.should.be.a('object');
  //               res.body.should.have.property('errors');
  //               res.body.errors.should.have.property('name');
  //               res.body.errors.name.should.have.property('name').eql('required');
  //             done();
  //           });
  //     });
  //
  // });
});
