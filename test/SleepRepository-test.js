const chai = require('chai');
const expect = chai.expect;

const UserRespository = require('../src/UserRepository.js');
const User = require('../src/User.js');
const SleepRepository = require('../src/SleepRepository.js');
// const Sleep = require('../src/Sleep');

describe('SleepRepository', function() {
  let userRepository, user, userData1, sleepRepository, sleepData;

  beforeEach(function() {
    userData1 = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8,
      49
    ]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
      9,
      18,
      24,
      19
    ]
  },
  {
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [
      19,
      11,
      42,
      33
    ]
  },
];

    sleepData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/17",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/18",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/19",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/20",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/21",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
   {
    "userID": 2,
    "date": "2019/06/17",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 5,
    "sleepQuality": 4.7
  },
   {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
   {
    "userID": 3,
    "date": "2019/06/17",
    "hoursSlept": 8,
    "sleepQuality": 5
  },
   {
    "userID": 3,
    "date": "2019/06/18",
    "hoursSlept": 10,
    "sleepQuality": 6
  },
   {
    "userID": 3,
    "date": "2019/06/19",
    "hoursSlept": 10,
    "sleepQuality": 6
  },
   {
    "userID": 3,
    "date": "2019/06/20",
    "hoursSlept": 10,
    "sleepQuality": 6
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "hoursSlept": 10,
    "sleepQuality": 6
  },
];


    // userRepository = new UserRepository(userData1);
    //
    // user = new User(userRepository.returnuserData1(3));

    sleepRepository = new SleepRepository(sleepData);

  });

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {

    expect(sleepRepository).to.be.an.instanceOf(SleepRepository);
  })

  it('should store sleepData within a property', function() {

    expect(sleepRepository.sleepData).to.deep.equal([
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
       {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
       {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
       {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
       {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
       {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
       {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
       {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 5,
        "sleepQuality": 4.7
      },
       {
        "userID": 3,
        "date": "2019/06/16",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
       {
        "userID": 3,
        "date": "2019/06/17",
        "hoursSlept": 8,
        "sleepQuality": 5
      },
       {
        "userID": 3,
        "date": "2019/06/18",
        "hoursSlept": 10,
        "sleepQuality": 6
      },
       {
        "userID": 3,
        "date": "2019/06/19",
        "hoursSlept": 10,
        "sleepQuality": 6
      },
       {
        "userID": 3,
        "date": "2019/06/20",
        "hoursSlept": 10,
        "sleepQuality": 6
      },
      {
        "userID": 3,
        "date": "2019/06/21",
        "hoursSlept": 10,
        "sleepQuality": 6
      },
    ]);

  })

  it('should return the specified user sleepData',
  function() {

    let data = sleepRepository.returnUserSleepData(3)

    expect(data).to.deep.equal([
      { userID: 3, date: '2019/06/15', hoursSlept: 5, sleepQuality: 4.7 },
      { userID: 3, date: '2019/06/16', hoursSlept: 7, sleepQuality: 4.7 },
      { userID: 3, date: '2019/06/17', hoursSlept: 8, sleepQuality: 5 },
      { userID: 3, date: '2019/06/18', hoursSlept: 10, sleepQuality: 6 },
      { userID: 3, date: '2019/06/19', hoursSlept: 10, sleepQuality: 6 },
      { userID: 3, date: '2019/06/20', hoursSlept: 10, sleepQuality: 6 },
      { userID: 3, date: '2019/06/21', hoursSlept: 10, sleepQuality: 6 }
    ])
  })

  it('should return average sleep quality for all users',
  function() {

    let data = sleepRepository.returnAverageSleepQuality()

    expect(data).to.equal(4.128571428571429)
  })

  it('should find all users who average a sleep quality greater than 3 for a given week (7 days) ',
  function() {
    let sleepQualityForUsers = [];

    userData1.forEach(element => {
      sleepRepository.createSleepQualityData("2019/06/21", element.id)
    });
    const userResult = sleepRepository.getQualitySleepers()

    expect(userResult).to.deep.equal( [{ id: 2, averageQuality: 4.7 },
    { id: 3, averageQuality: 5.485714285714286 }])
  });

  it('should find the users who slept the most number of hours (one or more if they tied) on a given date',
   function() {
    const heavySleepers = sleepRepository.findHeavySleepers("2019/06/15")

    expect(heavySleepers).to.deep.equal([{ userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7 }])
  });
});
