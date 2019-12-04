import { TestBed } from '@angular/core/testing';

import { VoteService } from './vote.service';

describe('VoteServiceService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should start empty', () => {
    const service: VoteService = TestBed.get(VoteService);
    expect(service.getItems()).toEqual([]);
  });

  it('should add to the list', () => {
    const service: VoteService = TestBed.get(VoteService);
    service.addItem("Alpha");
    service.addItem("Beta");
    expect(service.getItems()).toEqual([
      { name: "Alpha", votes: 0 },
      { name: "Beta", votes: 0 }
    ]);
  });

  it('should be able to undo after adding', () => {
    const service: VoteService = TestBed.get(VoteService);
    service.addItem("Alpha");
    service.addItem("Beta");
    service.undo();
    expect(service.getItems()).toEqual([
      { name: "Alpha", votes: 0 }
    ]);
    service.undo();
    expect(service.getItems()).toEqual([]);
  });

  // TODO - test removeItem

  it('remove from the list', () => {
    const service: VoteService = TestBed.get(VoteService);
    service.addItem("Alpha");
    service.addItem("Beta");
    service.addItem("Omega");
    service.removeItem("Beta");
    expect(service.getItems()).toEqual([
      { name: "Alpha", votes: 0 },
      { name: "Omega", votes: 0 }
    ]);
  });


  // TODO - test removeItem & undo

  it('should be able to undo after removing', () => {
    const service: VoteService = TestBed.get(VoteService);
    service.addItem("Alpha");
    service.removeItem("Alpha");
    service.undo();
    expect(service.getItems()).toEqual([
      { name: "Alpha", votes: 0 }
    ]);
    service.undo();
    expect(service.getItems()).toEqual([]);
  });



  // TODO - test upvote

  it('should add vote to item', () => {
    const service: VoteService = TestBed.get(VoteService);
    service.addItem("Alpha");
    service.addItem("Beta");
    service.upvote("Alpha")
    expect(service.getItems()).toEqual([
      { name: "Alpha", votes: 1 },
      { name: "Beta", votes: 0 }
    ]);
  });



  // TODO - test upvote & undo


  it('should be able to undo after voting', () => {
    const service: VoteService = TestBed.get(VoteService);
    service.addItem("Alpha");
    service.upvote("Alpha");
    service.undo();
    expect(service.getItems()).toEqual([
      { name: "Alpha", votes: 0 }
    ]);
    service.undo();
    expect(service.getItems()).toEqual([]);
  });



  // TODO - test downvote

  it('should remove vote to item', () => {
    const service: VoteService = TestBed.get(VoteService);
    service.addItem("Alpha");
    service.addItem("Beta");
    service.upvote("Alpha");
    service.downvote("Alpha")
    expect(service.getItems()).toEqual([
      { name: "Alpha", votes: 0 },
      { name: "Beta", votes: 0 }
    ]);
  });
  // TODO - test downvote & undo


  it('should be able to undo after voting', () => {
    const service: VoteService = TestBed.get(VoteService);
    service.addItem("Alpha");
    service.upvote("Alpha");
    service.downvote("Alpha");
    service.undo();
    expect(service.getItems()).toEqual([
      { name: "Alpha", votes: 1 }
    ]);
    service.undo();
    expect(service.getItems()).toEqual([
      { name: "Alpha", votes: 0 }
    ]);
  });
});
