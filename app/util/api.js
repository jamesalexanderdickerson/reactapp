var api = {
  getRovers() {
    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers?&api_key=Jhw5mCMpLq0K7a2Omrc2ChN0UoEKT4ffK18JJcpE`
    return fetch(url).then((res) => res.json());
  },
  getRecentPhotos(rover, maxSol, camera) {
    var rover = rover.toLowerCase().trim();
    var camera = camera.toLowerCase().trim();
    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${maxSol}&camera=${camera}&api_key=Jhw5mCMpLq0K7a2Omrc2ChN0UoEKT4ffK18JJcpE`;
    return fetch(url).then((res) => res.json());
  },
  addNote(note) {
    var url = `https://myappdatabase1.firebaseio.com/jamesdickerson.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  },
  getNotes() {
    var url = `https://myappdatabase1.firebaseio.com/jamesdickerson.json`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
