describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    serverTbody.innerHTML = '';
    allServers={};
    
  });
});
describe("2do function test",function(){
it('should Create table row element and pass to Name and a value of 0', function(){
  updateServerTable()
  allServers.server1 = { serverName: 'Mario'};
  allServers.server2 = { serverName: 'Eric' };
  updateServerTable()
  expect(serverTbody.innerHTML).toContain('Mario')
  expect(serverTbody.innerHTML).toContain('Eric')
})

afterEach(function() {
  serverTbody.innerHTML = '';
  allServers={};
  
});
});